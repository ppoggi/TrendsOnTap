Template.middle.events({

  'click .redo': function(){    
      
      FlowRouter.go('/');
  },
    
  'click .place-list li': function(e){
      
      var route = RoutingHelpers.verifyRoute(this);      
      FlowRouter.go(route);
  },

    'click .list-group-item span a': function(e){
        
        e.preventDefault();
        window.open(this.url);
    }
}); 