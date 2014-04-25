Template.newspaperPage.helpers({
  newspaperExists: function() {
    var exists = false;
    if ( this.findOne() ) {
      exists = true;
    }
    return exists;
  }
});

Template.newspaperPage.htmlFullNewspaper = function () {
  var html = '';
  for (key in this) {
    if (key === '_id') {
      continue;
    }
    html = html + '<div>';
    if (this[key]) {
      switch (key) {
        case 'url':
          var a = document.createElement('a');
          a.href = this[key];
          html = html + '<a href="' + this[key] + '">' + a.hostname + a.pathname + '</a>';
          break;
        default:
          html = html + key + ': ' + this[key];
      }
    } else {
      html = html + 'ADD ' + key;
    }
    html = html + '</div>';
  }
  return html;
}