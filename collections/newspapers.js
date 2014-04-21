Newspapers = new Meteor.Collection('newspapers');
// Although postalCodesServed is an array, for now I'm using name+postcode as ID
// for the newspaper.

Newspapers.allow({
  insert: function(userId, doc) {
    // only allow posting if you are logged in
    return !! userId; }
});