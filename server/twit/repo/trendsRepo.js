TrendsRepo = {
	'insert': function(user, woeid, locationName){
    //TODO: Make sure errors are logging and working    
		T = Trends.createTwit(user);	

		T.get('trends/place', { id: woeid, count: 100 }, Meteor.bindEnvironment(function(err, data, response) {
  			
  				if(err){
  					console.log(err);
  					Errors.insert({owner:user._id,error:err});
  					return;
  				}
  				if(data){

	  				var trend = Trends.createFeed( data[0].trends, woeid, locationName);
					  Trending.insert(trend);
  				}
		}));
	},
  'update': function(user, woeid, locationName){
    //retrieve woeid stream from database
    var stream = Trending.find({woeid:woeid}).fetch()[0];
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