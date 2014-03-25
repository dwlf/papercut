if (Newspapers.find().count() === 0) {
  Newspapers.insert({
    name: 'Alameda Sun',
    url: 'http://www.alamedasun.com/',
    address: {
      streetAddress: '3215J Encinal Ave',
      city: 'Alameda',
      state: 'CA',
      postalCode: '94501',
      country: 'USA'
    },
    contactEmail: '',
    contactPhone: '',
    postalCodesServed: ['94501','94502']
  });
  Newspapers.insert({
    name: 'Daily Bugle',
    url: 'http://thedailybugle.tumblr.com/',
    zipCodesServed: ['94501','94502']
  });
  Newspapers.insert({
    name: 'Daily Planet',
    url: 'http://en.wikipedia.org/wiki/Daily_Planet',
    zipCodesServed: ['94501','94502']
  });
}