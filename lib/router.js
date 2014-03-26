Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function() { return Meteor.subscribe('newspapers'); }
});

Router.map(function() {
  this.route('newspapersList', {path: '/'});
});
