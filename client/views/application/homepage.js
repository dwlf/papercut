Session.setDefault('yourPostalCode', '');
Session.setDefault('noNewspapersFound', null);

Template.homepage.events({
  'submit form': function (e) {
    e.preventDefault();
    Session.set('yourPostalCode', $(e.target).find('[name=yourpostalcode]').val());
  }
});

Template.homepage.helpers({
  newspapersFound: function () {
    postalCode = Session.get('yourPostalCode'),
      cursor = null;
    if ( postalCode ) {
      cursor = Newspapers.find({postalCodesServed: postalCode});
      if (cursor.count() === 0) {
        Session.set('noNewspapersFound', true);
      } else {
        Session.set('noNewspapersFound', false);
      }
    } else {
      Session.set('noNewspapersFound', null);
    }
    return cursor;
  },
  searchedAndNoPapersFound: function () { return Session.get('noNewspapersFound'); }
});