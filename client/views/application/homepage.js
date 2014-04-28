Session.setDefault('yourPostalCode', '');
Session.setDefault('noNewspapersFound', null);

Template.homepage.rendered = function () {
  var postalCodeSearchForm = $('#postalcode_search_form');
  postalCodeSearchForm.parsley();
  postalCodeSearchForm.parsley('addItem', '#postal_code');
};

Template.homepage.events({
  'submit form': function (e) {
    e.preventDefault();
    if( $('#postalcode_search_form').parsley('validate').validationResult ) {
      Session.set('yourPostalCode', $(e.target).find('[name=yourpostalcode]').val());
    }
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