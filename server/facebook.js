// XXX This is not production safe code, but makes sense while developing locally with regular resets.
//     As 3rd authentication settings live in Mongo then interactive initial configuration will likely
//     be sufficient with back up and recovery of the relevant Mongo collection.
//     https://groups.google.com/forum/#!topic/meteor-talk/1WCrxOl3_
//
// Local devel
// first, remove configuration entry in case service is already configured
ServiceConfiguration.configurations.remove({
  service: "facebook"
});
ServiceConfiguration.configurations.insert({
  service: 'facebook',
  appId: '522996017813015',
  secret: '78c1afa4d8ac02dd9c726edde83a4098'
});
