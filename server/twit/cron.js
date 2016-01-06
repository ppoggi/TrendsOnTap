
Meteor.setInterval(function(){
	Meteor.call('getGlobalStream', null, 1, 'Global');
},  5 * 60 * 1000)
