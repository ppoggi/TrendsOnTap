Template.middle.onCreated(function(){

	self = this;

  Session.set('woeid', 1);

	self.autorun(function(){
    
	self.subscribe('feed' , Session.get('woeid') );
    self.subscribe('places');
    self.subscribe('errors');    
	});  
});

 Template.middle.rendered = function() {

  Meteor.typeahead.inject('#places-search');
 };


Meteor.startup(function() {


});