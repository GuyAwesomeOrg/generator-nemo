/*global describe:true, it:true, before:true, after:true */
'use strict';

var nemoFactory = require('nemo-mocha-factory'),
  plugins = require('../config/nemo-plugins'),
  setup = {
    "view": ['landing']
  };

describe('Nemo @landingSuite@', function() {

  nemoFactory({
    'plugins': plugins,
    'setup': setup
  });

  it('will @loadAndVerifyLandingPage@', function(done) {
    nemo.driver.get(nemo.props.targetBaseUrl);
    nemo.view.landing.pageVisible();
    nemo.view.landing.page().getText().then(function(text) {
      if (text === "<%= landingPageText %>") {
        done();
      } else {
        done(new Error("Didn't find text: <%= landingPageText %>"));
      }
    }, function(err) {
      done(err);
    });
  });
});