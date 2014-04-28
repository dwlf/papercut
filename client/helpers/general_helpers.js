UI.registerHelper('json', function (context) {
  return JSON.stringify(context);
});
UI.registerHelper('session',function (input) {
  return Session.get(input);
});
