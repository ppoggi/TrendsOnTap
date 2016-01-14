TrendsRepo = {
	'insert': function(user, woeid, locationName){
   
    if(!woeid){
      throw new Meteor.Error('Twitter.error', "Woeid Required");     
    }

    if(!locationName){
     throw new Meteor.Error('Twitter.error', "LocationName Required");      
    }

		T = Trends.createTwit(user);	

		T.get('trends/place', { id: woeid, count: 100 }, Meteor.bindEnvironment(function(err, data, response) {
  			
  				if(err){  					            
            //TODO logs
            if(!user){
              UsageLog.max("Admin");
              LocationQ.add({woeid:woeid, locationName: locationName});
            }
            else
              UsageLog.max(user._id);

            throw new Meteor.Error('Twitter.error', err.message);  					
  				}
  				if(data){
            
            if(user)
              UsageLog.go(user._id);
            else
              UsageLog.go("Admin");

	  				var trend = Trends.createFeed( data[0].trends, woeid, locationName);
					  Trending.insert(trend);
  				}
		}));
	},
  'update': function(user, woeid, locationName){

    if(!user){

      var valid = UsageLog.verify(user);
      if(!valid){
        //TODO Logs
        console.log("User "+ user._id + " does not have any more api attempts");
        return;
      }
    }
    //retrieve woeid stream from database
    var stream = Trending.find( {woeid:woeid}, {limit:1, sort:{ timestamp:-1} }).fetch()[0];
    //if there is a stream, check to see if it is older than 5 minutes
    //if it is older, hit the api again and update
    if(stream){      
      var sentinel = Trends.compareTimestamps(Date.now(), stream.timestamp);
      if(sentinel){
        return;
      }
    }    
    this.insert(user, woeid, locationName);
  }
}