Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function() { return Meteor.subscribe('newspapers'); }
});

Router.map(function() {
  this.route('newspapersList', {path: '/'});

  this.route('newspaperPage', {
    path: '/newspapers/:_id',
    data: function() { return Newspapers.findOne(this.params._id); }
  });
});
