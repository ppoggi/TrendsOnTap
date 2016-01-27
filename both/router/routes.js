FlowRouter.route('/', {
  action: function() {
    BlazeLayout.render("mainLayout", {content: "middle"});
  }
});

FlowRouter.route('/:domain/:country', {
  action: function() {
    BlazeLayout.render("mainLayout", {content: "middle"});
  }
});

FlowRouter.route('/:domain/:country/:city', {
  action: function() {
    BlazeLayout.render("mainLayout", {content: "middle"});
  }
});


