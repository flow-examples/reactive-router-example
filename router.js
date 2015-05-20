FlowRouter.route('/', {
  name: "home",
  action: function() {
    FlowLayout.render("layout", {type: "home"});
  }
});

FlowRouter.route('/post/:id', {
  name: "post",
  action: function(params) {
    FlowLayout.render("layout", {type: "post"});
  }
});

