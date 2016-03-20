module.exports = {
  name: 'ember-cli-photon',
  normalizeEntityName: function() {},

  included: function(app) {
    this._super.included(app);
    var path = {destDir: "fonts"};

    app.import(app.bowerDirectory + '/photon/dist/css/photon.css');
    app.import(app.bowerDirectory + '/photon/dist/fonts/photon-entypo.eot', path);
    app.import(app.bowerDirectory + '/photon/dist/fonts/photon-entypo.svg', path);
    app.import(app.bowerDirectory + '/photon/dist/fonts/photon-entypo.ttf', path);
    app.import(app.bowerDirectory + '/photon/dist/fonts/photon-entypo.woff', path);
  },

  afterInstall: function() {
    return this.addBowerPackageToProject('photon');
  }
};
