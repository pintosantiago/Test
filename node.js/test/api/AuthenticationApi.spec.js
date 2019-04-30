/**
 * Hypechat
 * A simple API to make a resilient chat app for workspaces. Feel free to check our [github repository](https://github.com/taller2fiubafedmanmatsan/AppServer) for more information.
 *
 * OpenAPI spec version: 1.0.0
 * Contact: llauromanuel@gmail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.4
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Hypechat);
  }
}(this, function(expect, Hypechat) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Hypechat.AuthenticationApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('AuthenticationApi', function() {
    describe('apiAuthSinginPost', function() {
      it('should call apiAuthSinginPost successfully', function(done) {
        //uncomment below and update the code to test apiAuthSinginPost
        //instance.apiAuthSinginPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
