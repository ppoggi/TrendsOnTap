Template.middle.onCreated(function(){

	self = this;
	 this.getLocationName = function(){
	 	 	
	 	var param =	FlowRouter.getParam('locationName');

	 	if(!param){
	 	 	return 1
	 	}		 	 

	 	param = decodeURIComponent(param);
	 	param = Places.find({name:param}).fetch()[0].woeid;
	 	
	 	return param;	 	
	 }

	var handle = self.subscribe('places');
	
	self.autorun( () => {
    			    	    
	    if(handle.ready())
	    	self.subscribe('feed' , this.getLocationName() );		
	});  
});

 Template.middle.rendered = function() {

  Meteor.typeahead.inject('#places-search');
  $('input').attr('autocomplete','off');
 };


Meteor.startup(function() {


});