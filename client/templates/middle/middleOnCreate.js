Template.middle.onCreated(function(){


	 this.getLocationName = function(){
 	 	var param;
	 	var domain = FlowRouter.getParam('domain');	 	
	 	
	 	if(!domain)
	 	 	return 1;
	 	
	 	if(domain == "Country")
	 		param = FlowRouter.getParam('country');	 		 	
	 	else
	 	 	param = FlowRouter.getParam('city');	 	 	
			 	
	 	param = RoutingHelpers.decodeUrl(param);
	 	param = Places.find({name:param}).fetch()[0].woeid;
	 	
	 	return param;	 	
	 }

	var handle = this.subscribe('places');
	
	this.autorun( () => {
    			    	    
	    if(handle.ready())
	    	this.subscribe('feed' , this.getLocationName() );		
	});  
});

 Template.middle.rendered = function() {
 	
 };


Meteor.startup(function() {


});