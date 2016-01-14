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
			token  = '4693126453-cDXKMGyDFvXsHlhWz8RWVxkLfld19rERyqWpM1f';
			secret = 'fC3fNFmAoEfDG1F89FLgSUYeqv79iUlnjPJHgbMIFBzBR';
		}

		return new Twit({	
		    consumer_key:         'APJEv7zCTaspch7UmpLC3lXNN',
		    consumer_secret:      'ONpa4oCkzen4tffxrOHELmsVYZ0Gw7vx7OuEF9g6jJBAeTs81L',
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

