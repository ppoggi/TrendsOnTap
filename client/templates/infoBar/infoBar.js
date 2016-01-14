Template.registerHelper("userLogged", function(){
				
	if( Meteor.user())
		return true;
	else 		
		return false;
});


Template.errors.helpers({
	errors: function(){
		
    	return ClientErrors.find();
  	}
});

Template.error.helpers({
	style: function(color){
		if(color == "red")
			return "danger";
		else if(color == "blue")
			return "info"
		else if(color == "green")
			return "success"
		else if(color == "yellow")
			return "warning"
		else
			return "default"
	}
});