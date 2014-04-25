Newspapers = new Meteor.Collection('newspapers');
// Although postalCodesServed is an array, for now I'm using name+postcode as ID
// for the newspaper.

Newspapers.allow({
  update: function (userId, doc) {
    // only allow posting if you are logged in
    return !! userId;
  }
});

Meteor.methods({
  addNewspaper: function (newspaperAttributes) {
    // TODO validate all inputs: size, content, and log if extra properties
    // yourPostCode should be part of the user object

    var user = Meteor.user(),
      newspaperAlreadyInCollection = null,
      newspaper = null;

    if (!user) {
      throw new Meteor.Error(1, "Please log in to add a newspaper.");
    }
    if (!newspaperAttributes.herPostalCode) {
      throw new Meteor.Error(2, "Where did you say you lived again?");
    }
    if (!newspaperAttributes.name) {
      throw new Meteor.Error(3, "All newspapers have a name.");
    }
    newspaperAlreadyInCollection = Newspapers.findOne({name: newspaperAttributes.name,
                                                       postalCodesServed: newspaperAttributes.postalCode});
    if (newspaperAlreadyInCollection) {
      throw new Meteor.Error(4, "You're in luck someone already added that newspaper.");
    }

    newspaper = _.extend(_.pick(newspaperAttributes, 'name', 'url', 'contactPhone', 'contactEmail',
                                    'streetAddress', 'city', 'province', 'postalCode'), {
      postalCodesServed: newspaperAttributes.yourPostalCode,
      modifiedBy: user._id,
      createDate: new Date().getTime(),
      lastModifiedDate: new Date().getTime()
    });

    var newspaperId = Newspapers.insert(newspaper);
    return newspaperId;
  },

  editNewspaper: function (newspaperId, newspaperAttributes) {
    // TODO like todo addNewspaper validate all inputs: size, content, and log if extra properties
    var user = Meteor.user();
    if (!user) {
      throw new Meteor.Error(11, "Please log in to edit a newspaper.");
    }
    // TODO untested:
    if (_.without(_.keys(newspaperAttributes), 'name', 'url', 'contactPhone', 'contactEmail',
                  'streetAddress').length > 0) {
      throw new Meteor.Error(12, "No touchy.");
    }

    Newspapers.update(newspaperId, {$set: newspaperAttributes});
  }

});
