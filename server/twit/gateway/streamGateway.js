Meteor.methods({
	
	'getStream': function(woeid, locationName){

		if(!woeid){
			
			woeid = 1;
		}

		var user = Meteor.user();		
		console.log(user)
		if(!user){

			console.log('getStream Not Available for unlogged users')
			return;
		}		

		TrendsRepo.update( user, woeid, locationName);			
	},
	
	'getGlobalStream': function(){

		TrendsRepo.insert(null, 1, 'Global');			
	}
});





