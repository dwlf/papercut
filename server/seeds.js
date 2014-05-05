var seedUserId = null;
if (Meteor.users.find().count() === 0 ) {
  seedUserId = Meteor.users.insert({
    email: 'f@oo.com',
    password: 'bar'
  });
}

if (Newspapers.find().count() === 0) {
  Newspapers.insert({
    name: 'Gotham Gazette',
    url: 'http://en.wikipedia.org/wiki/Gotham_City#Notable_areas.2C_landmarks.2C_institutions_and_businesses',
    contactPhone: '555-555-5555',
    contactEmail: 'tip@example.com',
    street: '359 Murphy Avenue',
    city: 'Gotham',
    province: 'GS'
/*  , postalCode: '90909' */
  , modifiedBy: [seedUserId]
  , modifiedAt: [new Date()]
  });
  Newspapers.insert({
    name: 'Daily Bugle'
  , url: 'http://thedailybugle.tumblr.com/'
  , modifiedBy: [seedUserId]
  , modifiedAt: [new Date()]
  });
  Newspapers.insert({
    name: 'Daily Planet'
  , url: 'http://en.wikipedia.org/wiki/Daily_Planet'
  , modifiedBy: [seedUserId]
  , modifiedAt: [new Date()]
  });
}