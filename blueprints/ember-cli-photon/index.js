module.exports = {
  name: 'ember-cli-photon',
  normalizeEntityName: function() {
  },

  afterInstall: function() {
    return this.addBowerPackageToProject('photon');
  }
};
