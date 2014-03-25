Template.newspapersList.helpers({
  newspapers: function() {
    return Newspapers.find();
  }
});