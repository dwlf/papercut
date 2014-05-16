Session.setDefault('yourPostalCode', '');
Session.setDefault('newspaperName', '');
Session.setDefault('noNewspapersInPostalCodeFound', null);
Session.setDefault('noNewspapersOfNameFound', null);

Template.homepage.helpers({
  searchedAndNoPapersInPostalCodeFound: function () { return Session.get('noNewspapersInPostalCodeFound'); },
  searchedAndNoNewspapersOfNameFound: function () { return Session.get('noNewspapersOfNameFound'); },

  newspapersFound: function () {
    postalCode = Session.get('yourPostalCode'),
    newspaperName = Session.get('newspaperName'),
      cursor = null;
    if ( postalCode && !newspaperName ) {
      cursor = Newspapers.find({postalCodesServed: postalCode});
      if (cursor.count() === 0) {
        Session.set('noNewspapersInPostalCodeFound', true);
      } else {
        Session.set('noNewspapersInPostalCodeFound', false);
      }
    } else if ( newspaperName ) {
      cursor = Newspapers.find({name: newspaperName});
      if (cursor.count() === 0) {
        Session.set('noNewspapersOfNameFound', true);
      } else {
        Session.set('noNewspapersOfNameFound', false);
      }
    }
    return cursor;
  }
});

Template.postalCodeSearch.rendered = function () {
  var postalCodeSearchForm = $('#postalcode_search_form');
  postalCodeSearchForm.parsley();
  postalCodeSearchForm.parsley('addItem', '#postal_code');
  $('#postalcode_search_form').parsley('validate');
};

Template.postalCodeSearch.events({
  'submit form': function (event) {
    event.preventDefault();

    // Reset the session variables in case user comes back to search again
    Session.set('noNewspapersInPostalCodeFound', false);
    Session.set('newspaperName', '');
    Session.set('noNewspapersOfNameFound', false);

    if( $('#postalcode_search_form').parsley('validate').validationResult ) {
      Session.set('yourPostalCode', $(event.target).find('[name=yourpostalcode]').val());
    }
    console.log('done');
  }
});


Template.newspaperNameSearch.rendered = function () {
  var newspaperNameSearchForm = $('#postalcode_search_form');

  // If we are rendering this template then it should be in focus.
  $('#newspaper_name').focus();

  newspaperNameSearchForm.parsley();
  newspaperNameSearchForm.parsley('addItem', '#newspaper_name');
  $('#newspaper_name_search_form').parsley('validate');
};

Template.newspaperNameSearch.events({
  'submit form': function (event) {
    event.preventDefault();
    if( $('#newspaper_name_search_form').parsley('validate').validationResult ) {
      Session.set('newspaperName', $(event.target).find('[name=newspapername]').val());
    }
  }
});