/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-photon',

  included: function(app) {
    this._super.included(app);
    var path = {destDir: "fonts"};

    this.app.import(app.bowerDirectory + '/photon/dist/css/photon.css');
    this.app.import(app.bowerDirectory + '/photon/dist/fonts/photon-entypo.eot', path);
    this.app.import(app.bowerDirectory + '/photon/dist/fonts/photon-entypo.svg', path);
    this.app.import(app.bowerDirectory + '/photon/dist/fonts/photon-entypo.ttf', path);
    this.app.import(app.bowerDirectory + '/photon/dist/fonts/photon-entypo.woff', path);
  },
};
