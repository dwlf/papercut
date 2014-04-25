Template.newspaperAdd.events({
  'submit form': function(e) {
    e.preventDefault();
    
    var newspaper = {
      name: $(e.target).find('[name=name]').val(),
      url: $(e.target).find('[name=url]').val(),
      herPostalCode: $(e.target).find('[name=yourpostalcode]').val(),
      contactPhone: $(e.target).find('[name=phone]').val(),
      contactEmail: $(e.target).find('[name=email]').val(),
      streetAddress: $(e.target).find('[name=streetaddress]').val(),
      city: $(e.target).find('[name=streetaddress]').val(),
      province: $(e.target).find('[name=streetaddress]').val(),
      postalCode: $(e.target).find('[name=postalcode]').val(),
    }

    Meteor.call('addNewspaper', newspaper, function (error, id) {
      if (error) {
        return alert(error.reason);
      } else {
        Router.go('newspaperPage', {_id: id});
      }
    });
  }
});
