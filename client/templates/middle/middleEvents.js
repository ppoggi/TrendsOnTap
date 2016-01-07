Template.middle.events({
    
    'submit .form-inline.search-form': function (e) {  

      e.preventDefault();
      var text = e.target.autocomplete.value;
      var valid = Helpers.verifySubmit(text);
      
      if(!valid){

        console.log('invalid location');
        ClientErrors.insert({ message:"Invalid Location"});
        return;
      }
      
      Meteor.call('getStream', valid.woeid, text);      
      Session.set('woeid', valid.woeid);
    },

    'click a': function(e){
      e.preventDefault();
      window.open(this.url);
    }


}); 