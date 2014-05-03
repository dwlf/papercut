PostCodeSchema = new SimpleSchema({
  PostalCode: {
    type: String,
    regEx: /^[0-9]{5}$/
  }
});

Newspapers = new Meteor.Collection('newspapers', {
  schema: new SimpleSchema({
    name: {
      label: 'Newspaper Name'
    , type: String
    , min: 3
    , max: 56
    },
    postalCodesServed: {
      type: [PostCodeSchema]
    , minCount: 1
    },
    url: {
      type: String
    , label: 'URL'
    , regEx: SchemaRegEx.Url
    , optional: true
    },
    contactPhone: {
      label: 'Phone'
    , type: String
    , min: 9
    , max: 20
    , optional: true
    },
    contactEmail: {
      type: String
    , label: 'Email'
    , regEx: SchemaRegEx.Email
    , optional: true
    },
    street: {
      type: String
    , max: 100
    , optional: true
    },
    city: {
      type: String
    , max: 50
    , optional: true
    },
    province: {
      type: String
    , min: 2
    , max: 2
    , optional: true
    },
    postalCode: {
      type: PostCodeSchema
    , optional: true
    },
    modifiedBy: {
      type: [String]
    },
    modifiedAt: {
      type: [Date]
    , minCount: 1
    }
  })
});

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
    if (!newspaperAttributes.yourPostalCode) {
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
                                    'street', 'city', 'province', 'postalCode'), {
      postalCodesServed: newspaperAttributes.yourPostalCode,
      modifiedBy: user._id,
      modifiedAt: [ new Date().getTime() ]
    });

    Newspapers.insert(newspaper, function (error, result) {
      console.log(Newspapers.simpleSchema().namedContext().invalidKeys());
      return result;
    });
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
