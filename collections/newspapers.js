Newspapers = new Meteor.Collection('newspapers');

Newspapers.allow({
  insert: function(userId, doc) {
    // only allow posting if you are logged in
    return !! userId; }
});