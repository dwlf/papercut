if (Newspapers.find().count() === 0) {
  Newspapers.insert({
    name: 'Gotham Gazette',
    url: 'http://en.wikipedia.org/wiki/Gotham_City#Notable_areas.2C_landmarks.2C_institutions_and_businesses',
    postalCodesServed: ['90909'],
    contactPhone: '555-555-5555',
    contactEmail: 'tip@example.com',
    streetAddress: '359 Murphy Avenue',
    city: 'Gotham',
    province: 'Gotham State',
    postalCode: '90909'
  });
  Newspapers.insert({
    name: 'Daily Bugle',
    url: 'http://thedailybugle.tumblr.com/',
    postalCodesServed: ['90909','89412']
  });
  Newspapers.insert({
    name: 'Daily Planet',
    url: 'http://en.wikipedia.org/wiki/Daily_Planet',
    postalCodesServed: ['94501','89412']
  });
}