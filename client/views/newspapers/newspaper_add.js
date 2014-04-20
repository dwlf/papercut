Template.newspaperAdd.events({
  'submit form': function(e) {
    e.preventDefault();
    
    var newspaper = {
      name: $(e.target).find('[name=name]').val(),
      url: $(e.target).find('[name=url]').val(),
      postalCodesServed: new Array($(e.target).find('[name=postalcode]').val()),
      contactPhone: $(e.target).find('[name=phone]').val(),
      contactEmail: $(e.target).find('[name=email]').val(),
      address: $(e.target).find('[name=address]').val()
    }

    newspaper._id = Newspapers.insert(newspaper);
    Router.go('newspaperPage', newspaper);
  }
});
