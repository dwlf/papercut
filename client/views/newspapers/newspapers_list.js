var newspapersData = [
  {
    name: 'Alameda Sun',
    url: 'http://www.alamedasun.com/'
  },
  {
    name: 'Saanich News',
   url: 'http://www.vicnews.com/neighbourhoods/saanich/'
  },
  {
    name: 'Daily Planet',
    url: 'http://en.wikipedia.org/wiki/Daily_Planet'
  },
  {
    name: 'Daily Bugle',
    url: 'http://thedailybugle.tumblr.com/'
  }
]
Template.newspapersList.helpers({
  newspapers: newspapersData
});