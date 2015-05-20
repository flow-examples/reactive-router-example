Template.post.helpers({
  currentParam: function() {
    var id = FlowRouter.getParam("id");
    console.log("HELPER getParam:", id);

    return id;
  }
});

Template.post.onCreated(function() {
  this.autorun(function() {
    var id = FlowRouter.getParam("id");
    console.log("AUTORUN getParam:", id);
  });

  this.autorun(function() {
    FlowRouter.reactiveCurrent();
    console.log("AUTORUN reactiveCurrent:");
  });
});