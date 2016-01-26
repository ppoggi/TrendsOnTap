FlowRouter.route('/', {
  action: function() {
    BlazeLayout.render("mainLayout", {content: "middle"});
  }
});


FlowRouter.route('/:domain/:locationName', {
  action: function() {
    BlazeLayout.render("mainLayout", {content: "middle"});
  }
});