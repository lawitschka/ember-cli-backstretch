/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-backstretch',

  included: function(app) {
    this._super.included(app);

    app.import(app.bowerDirectory + '/jquery-backstretch/jquery.backstretch.js');
  }
};
