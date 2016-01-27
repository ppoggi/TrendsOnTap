Template.middle.helpers({

  'trending': function(){

    return Trending.findOne({});
  },

  'currentLocation': function(){

      var loc =  FlowRouter.getParam('locationName');    
      
      if(!loc)
        loc =false;
      
      return loc;
  },

  'timestamp': function(timestamp){

      return DateHelpers.formatDate(timestamp);     
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
  },

  'countries': function(){
  
    var countries =  Places.find( { 'placeType.name' : "Country"}, { sort:{ 'name': 1}});   
    
    Helpers.prioritize(countries, function(err){
        Helpers.throwError(err);
    });

    return countries;
  },

  'cities': function(){
  
      var query;    
      var param = FlowRouter.getParam('locationName');    
      var domain = FlowRouter.getParam('domain');
      
      if(param){

        if(domain == "Country")       
          query = { 'placeType.name' : "Town", country: RoutingHelpers.decodeUrl(param)};                  
      }else{

        query = { 'placeType.name' : "Town"};
      }
    
      var cities = Places.find( query , { sort:{ 'name': 1}});    
      return cities;
  },

  'priorities': function(){
    
    return Priorities.find();
  }
});

