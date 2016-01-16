Template.middle.events({
    
    'submit .form-inline.search-form': function (e) {  

      e.preventDefault();

      ClientErrors.remove({});

      var text = e.target.autocomplete.value;
      var valid = Helpers.verifySubmit(text);
      
      if(!valid){        
        //ClientErrors.insert({ message:"Invalid Location", color: "red"});
        return;
      }
    
      Meteor.call('getStream', valid.woeid, valid.name,
        function(err, message){          
          if(err){
            if(!err.color)
              err.color = "red";
            ClientErrors.insert(err);  
          }
          if(message)
            ClientErrors.insert(message)
       }
      );      

      text = encodeURIComponent(text);
      FlowRouter.go('/'+text);
    },

    'click a': function(e){
      e.preventDefault();
      window.open(this.url);
    }
}); 