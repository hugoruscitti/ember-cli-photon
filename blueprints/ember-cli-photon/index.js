module.exports = {
  name: 'ember-cli-photon',
  normalizeEntityName: function() {},

  blueprintsPath: function() {
    return path.join(__dirname, 'blueprints');
  },

  afterInstall: function() {
    return this.addBowerPackageToProject('photon');
  }
};
