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
