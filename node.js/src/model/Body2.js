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
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Hypechat) {
      root.Hypechat = {};
    }
    root.Hypechat.Body2 = factory(root.Hypechat.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Body2 model module.
   * @module model/Body2
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Body2</code>.
   * @alias module:model/Body2
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>Body2</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Body2} obj Optional instance to populate.
   * @return {module:model/Body2} The populated <code>Body2</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} email
   */
  exports.prototype['email'] = undefined;



  return exports;
}));

