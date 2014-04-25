Template.newspaperEdit.events({
  'submit form': function(e) {
    e.preventDefault();
    var currentNewspaperId = this._id;
    var newspaperProperties = {
      name: $(e.target).find('[name=name]').val(),
      url: $(e.target).find('[name=url]').val(),
      contactPhone: $(e.target).find('[name=phone]').val(),
      contactEmail: $(e.target).find('[name=email]').val(),
      streetAddress: $(e.target).find('[name=streetaddress]').val()
    }

    Meteor.call('editNewspaper', currentNewspaperId, newspaperProperties, function (error, id) {
      if (error) {
        return alert(error.reason);
      } else {
        Router.go('newspaperPage', {_id: currentNewspaperId});
      }
    });
  }
});
