Tracker.autorun(function() {
  console.log("WATCH: routeName", FlowRouter.getRouteName());
});

Tracker.autorun(function() {
  console.log("WATCH: getParam", FlowRouter.getParam("id"));
});

