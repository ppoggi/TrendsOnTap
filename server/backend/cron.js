
Meteor.startup(function() {
	//Generator.mod = PlacesTwo.length;
	

	UsageLog.initialize("Admin");
	// Meteor.call('getGlobalStream', null, 1, 'Global');	
});

//task to update global
Meteor.setInterval(function(){
	
	UsageLog.reset();	

	Meteor.call('getGlobalStream', null, 1, 'Global');	
	

},  15 * 60 * 1000);


Meteor.setInterval(function(){
	
	//check the LocationQ	
	LocationQ.go();	

},  5 * 1000);
// },  1000);



//task to populate database
// Meteor.setInterval(function(){

// 	var place = PlacesTwo[Generator.next()];

// }, 60 * 1000);

//exceed rate
// Meteor.setInterval(function(){	
// 	Meteor.call('getGlobalStream', null, 1, 'Global');
// },  1000);