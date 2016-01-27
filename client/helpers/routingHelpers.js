RoutingHelpers = {

	qTrends: function(valid){

		Meteor.call('getStream', valid.woeid, valid.name, function(err, message){          
	        if(err){
	        	
	        	if(!err.color)
	              	err.color = "red";
	            
	            ClientErrors.insert(err);  
	        }
	        if(message)
	        	ClientErrors.insert(message)
	    });
	},
	verifyRoute: function(scope){
	  	var place  = scope.name;
      	var domain = scope.placeType.name;  
      	var valid  = Helpers.verifySubmit(place);

      	if(!valid){        
	        ClientErrors.insert({ message:"Invalid Location", color: "red"});
    	    return;
      	}

      	this.qTrends(valid);     
      	return {domain, place};
	}
}