if (Meteor.isClient) {
  Template.hello.greeting = function () {
    return "Free yourself of the paper you never read, you never wanted."
  }
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  })
}

Meteor.subscribe('newspapers');