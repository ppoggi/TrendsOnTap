RoutingHelpers = {

	generateUrl: function(pre){
		
		var post = pre.replace(" ","-");
		post = post.replace(" ","-");
		return post;
	},

	decodeUrl: function(pre){
		
		var post = pre.replace("-"," ");
		post = post.replace("-"," ");
		return post;
	},

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

		Helpers.clearErrors();
	  	var place  = scope.name;
      	var domain = scope.placeType.name;      
      	var valid  = Helpers.verifySubmit(place);

      	if(!valid){        

	        ClientErrors.insert({ message:"Invalid Location", color: "red"});
    	    return;
      	}
      	    
      	return {domain:domain, place: RoutingHelpers.generateUrl(valid.name)};
	}
}