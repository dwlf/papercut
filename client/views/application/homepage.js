Session.setDefault('yourPostalCode', '');

Template.homepage.events({
  'submit form': function (e) {
    e.preventDefault();
    Session.set('yourPostalCode', $(e.target).find('[name=yourpostalcode]').val());
  }
});

Template.homepage.helpers({
  newspapersFound: function () {
    postalCode = Session.get('yourPostalCode');
    if ( postalCode ) {
      return Newspapers.find({postalCodesServed: postalCode});
    }
  }
});