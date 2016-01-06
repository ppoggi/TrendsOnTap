Template.registerHelper("userLogged", function(){
				
	if( Meteor.user())
		return true;
	else 		
		return false;
});


Template.errors.helpers({
	errors: function() {
		
    	return ClientErrors.find();
  }
});