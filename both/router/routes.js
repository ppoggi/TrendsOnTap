FlowRouter.route('/', {
  action: function() {
    BlazeLayout.render("mainLayout", {content: "middle"});
  }
});


FlowRouter.route('/:locationName', {
  action: function() {
    BlazeLayout.render("mainLayout", {content: "middle"});
  }
});