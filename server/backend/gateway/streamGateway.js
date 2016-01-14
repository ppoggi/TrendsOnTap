Meteor.methods({
	
	'getStream': function(woeid, locationName, callback){

		if(!woeid){
			
			woeid = 1;
		}

		var user = Meteor.user();
		
		if(!user){

			LocationQ.add({woeid:woeid, locationName:locationName});

			return {message:"Log In for Real Time Updates", color:"blue"};		
		}		

		TrendsRepo.update( user, woeid, locationName);		
	},
	
	'getGlobalStream': function(){

		var limitReached = UsageLog.go("Admin");
		if(limitReached){
			//todo logs
			throw new Meteor.Error('UsageLog.error', err.message);
		}
		TrendsRepo.insert(null, 1, 'Global');			
	}
});





