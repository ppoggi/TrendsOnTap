Trends = {

	createFeed: function(trends, woeid, locationName){

		feed = {};			
		feed.trends = trends;
		feed.timestamp = Date.now();
		feed.locationName = locationName;
		feed.woeid = woeid;
		return feed;
	},
	createTwit: function(user){
		//TODO:  Store credentials in the datatabse
		var token;
		var secret;		

		if(user){
			token  = user.services.twitter.accessToken;
			secret = user.services.twitter.accessTokenSecret;			
		}else{
			token  = Meteor.settings.credentials_twitter.access_token;
			secret = Meteor.settings.credentials_twitter.access_token_secret;
		}

		return new Twit({	
		    consumer_key:         Meteor.settings.twitter.api_key,
		    consumer_secret:      Meteor.settings.twitter.api_secret,
		    access_token:         token,
		    access_token_secret:  secret
		});
	},
	compareTimestamps: function(now, old){

		var now = new Date(now)
		var old = new Date(old)
								
		if(now - old < (5 * 60 *1000))//5 minutes > 
			return true;
		else
			return false;
	}
}

