Meteor.publish("feed", function (woeid) {

	if(!this.userId)
		woeid = 1;
	
	return Trending.find( {woeid:woeid}, {limit:1, sort:{ timestamp:-1} });
});

Meteor.publish("places", function(){
	
	return Places.find();	
});

Meteor.publish("errors", function(){
	
	return Errors.find({owner: this.userId});
});