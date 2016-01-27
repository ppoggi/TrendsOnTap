Template.middle.events({

  'click .redo': function(){    
      
      RoutingHelpers.verifyRoute();
  },
    
  'click .place-list li': function(e){
      
      var route = RoutingHelpers.verifyRoute(this);

      FlowRouter.go('/'+route.domain+'/'+route.place);
  },

    'click .list-group-item span a': function(e){
        
        e.preventDefault();
        window.open(this.url);
    }
}); 