UI.registerHelper('outputOrEditMe', function( key, value ) {
  if ( !value ) {
    value = 'Add ' + key + '.';
  } else {
    if ( key === 'url') {
      var a = document.createElement('a');
      a.href = value;
      value = '<a href="' + value + '">' + a.hostname + a.pathname + '</a>';
    }
  }
  return value;
});

Template.newspaperPage.echoOrEditMe = function( key, value ) {
  if (!value) {
    value = 'Add ' + key + '.';
  } else {
    if ( key === 'url') {
      var a = document.createElement('a');
      a.href = value;
      value = '<a href="' + value + '">' + a.hostname + a.pathname + '</a>';
    }
  }
  return value;
}

Template.newspaperPage.htmlFullNewspaper = function( ) {
  var html = '';
  for (key in this) {
    if ( key === '_id' ) {
      continue;
    }
    html = html + '<div>';
    if ( this[key] ) {
      switch( key ) {
        case 'url':
          var a = document.createElement('a');
          a.href = this[key];
          html = html + '<a href="' + this[key] + '">' + a.hostname + a.pathname + '</a>';
          break;
        case 'address':
          html = html + JSON.stringify( this[key] );
          break;
        default:
          html = html + key + ': ' + this[key];
      }
    } else {
      html = html + 'Add ' + key;
    }
    html = html + '</div>';
  }
  return html;
}