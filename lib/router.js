Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function () {
    return Meteor.subscribe('newspapers');
  }
});

Router.map(function () {
  this.route('homepage', {
    path: '/'
  });

  this.route('newspapersList', {
    path: '/newspapers'
  });

  this.route('newspaperPage', {
    path: '/newspapers/:_id',
    data: function () { return Newspapers.findOne(this.params._id); }
  });

  this.route('newspaperEdit', {
    path: '/newspapers/:_id/edit',
    data: function () { return Newspapers.findOne(this.params._id); }
  });

  this.route('newspaperAdd'), {
    path: '/add/newspaper'
  }
});

Router.onBeforeAction('loading');
