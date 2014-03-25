Meteor.publish('newspapers', function() {
  return Newspapers.find();
});
