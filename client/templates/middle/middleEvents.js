Template.middle.events({

  'click .redo': function(){
    FlowRouter.go('/');
  },
    
  'click .place-list li': function(e){
    var place = this.name;
    var domain = this.placeType.name;
  
    var valid = Helpers.verifySubmit(place);

    if(!valid){        
      ClientErrors.insert({ message:"Invalid Location", color: "red"});
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

      text = Helpers.generateUrl(place);

      FlowRouter.go('/'+domain+'/'+text);
  },

    'click .list-group-item span a': function(e){
      e.preventDefault();
      window.open(this.url);
    }
}); 