
Template.middle.helpers({

  'trending': function () {

    return Trending.findOne({});
  },

  'timestamp': function(timestamp){
    //format date
    if(!timestamp)
      return null;

    var date = new Date(timestamp);
    var hour = date.getHours();
    var noon;
    
    if(hour > 12)
      noon = "P.M.";
    else
      noon = "A.M.";

    hour = hour % 12;

    var month = date.getMonth() + 1;
    var minutes = date.getMinutes();
    
    if(parseInt(minutes) < 10);
      minutes = '0'+minutes 

    var year = date.getYear() +""; 
    year = year.slice(1);

    return month +'/'+ date.getDate() +'/'+ year +', '+ hour +':'+ minutes +' '+noon;    
  },

  'locationTag': function(){

    return location =  Tags.find({name:'location'});
  }
});

Template.middle.onCreated(function(){

	self = this;

  Session.set('woeid', 1);

	self.autorun(function(){
    
		self.subscribe('feed' , Session.get('woeid') );
    self.subscribe('places');
    self.subscribe('errors');    
	});  
});

  Template.middle.events({
    
    'submit .form-inline.search-form': function (e) {  

      e.preventDefault();
      var text = e.target.text.value;
      var valid = Helpers.verifySubmit(text);
      
      if(!valid){

        console.log('invalid location');
        ClientErrors.insert({ message:"Invalid Location"});
        return;
      }
      
      Meteor.call('getStream', valid.woeid, text);      
      Session.set('woeid', valid.woeid);
    }
  });
