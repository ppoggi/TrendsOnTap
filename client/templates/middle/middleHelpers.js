Template.middle.helpers({

  'trending': function () {

    return Trending.findOne({});
  },

  'timestamp': function(timestamp){

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

    if(hour == 0)
      hour = 12;

    var month = date.getMonth() + 1;

    var minutes = date.getMinutes();

    if(parseInt(minutes) < 10){
      minutes = '0'+minutes 
    }

    var year = date.getYear() +""; 
    year = year.slice(1);

    return month +'/'+ date.getDate() +'/'+ year +', '+ hour +':'+ minutes +' '+noon;    
  },

  'autocomplete': function(){
    
      return Places.find().fetch().map(function(obj){return obj.name});     
  },
  
  'count': function(volume){    
    if(volume == null)
      return "Started trending in the last hour" 
    else{
      if(parseInt(volume) > 999){
        volume = volume + "";        
        volume = volume.slice(0,volume.length-3) +"K"
      }
      return volume +" Tweets";
    }
  }
});

