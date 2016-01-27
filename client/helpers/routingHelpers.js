RoutingHelpers = {

	generateUrl: function(pre){
		
		var post = pre.replace(" ","-");
		post     = post.replace(" ","-");
		return post;
	},

	decodeUrl: function(pre){

		var post = pre.replace("-"," ");
		post     = post.replace("-"," ");
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
	  	var place   = scope.name;
      	var domain  = scope.placeType.name;      
      	var valid   = Helpers.verifySubmit(place);
      	var country = scope.country;
      	
      	if(!valid){        

	        ClientErrors.insert({ message:"Invalid Location", color: "red"});
    	    return;
      	}		      	          	 
      	 if(valid.name == country)
      	 	return "/"+domain+"/"+RoutingHelpers.generateUrl(valid.name);
      	 else
      	 	return "/"+domain+"/"+RoutingHelpers.generateUrl(country)+"/"+RoutingHelpers.generateUrl(valid.name);

	}
}