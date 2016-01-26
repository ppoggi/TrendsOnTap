Helpers = {
	verifySubmit : function(text){

		var text = this.upperCaseFirstLetter(text);
		var result = Places.find({name: text}).fetch()[0];
		
		if(result)
			return result;
		else
		 return null; 
		
	},
	upperCaseFirstLetter : function(string){
		 
		 return string.charAt(0).toUpperCase() + string.slice(1);
	},
	throwError : function(message){
		
		ClientErrors.insert({message:message});
	},
	generateUrl: function(pre){
		
		var post = pre.replace(" ","-");
		post = post.replace(" ","-");
		return post;
	},
	decodeUrl: function(pre){
		
		var post = pre.replace("-"," ");
		post = post.replace("-"," ");
		return post;
	}
}