/*jshint node:true*/
/* global require, module */
var EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  var app = new EmberAddon(defaults, {
    sourcemaps: {
      extensions: ['js', 'css'],
      enabled: true
    },

    cssModules: {
      virtualModules: {
        'virtual-constants': {
          'superbold': 800,
          'important-background': 'rgb(255, 255, 0)'
        }
      }
    }
  });

  if (app.env === 'test') {
    app.import('bower_components/ember/ember-template-compiler.js');
  }

  /*
    This build file specifies the options for the dummy test app of this
    addon, located in `/tests/dummy`
    This build file does *not* influence how the addon or the app using it
    behave. You most likely want to be modifying `./index.js` or app's build file
  */

  return app.toTree();
};
