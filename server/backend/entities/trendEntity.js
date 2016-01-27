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
		
		var token;
		var secret;		
		//TODO

		if(user){
			token  = user.services.twitter.accessToken;
			secret = user.services.twitter.accessTokenSecret;			
		}else{
			// token  = Meteor.settings.credentials_twitter.access_token;
			// secret = Meteor.settings.credentials_twitter.access_token_secret;
			token  = '3839700732-KhvMfuytuDMqOtcD0grvdi9CFGJ79WG6u83ftvp';
			secret = 'GX81KNUkTOEokpovSIuWge9Toyzov1jqn5ZvU0c5r6CzF';
		}

		return new Twit({	
		    // consumer_key:         Meteor.settings.twitter.api_key,
		    // consumer_secret:      Meteor.settings.twitter.api_secret,
		    consumer_key:         '6a0GX7eDoqwKjevLKwZoDCu9A',
		    consumer_secret:      'LCk3A8a7c9svxMPZpMKiK5UbNWMgl8TbjgOQBOXM5eaP6nLtih',
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

