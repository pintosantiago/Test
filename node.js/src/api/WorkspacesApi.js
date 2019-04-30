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
    define(['ApiClient', 'model/Body4'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Body4'));
  } else {
    // Browser globals (root is window)
    if (!root.Hypechat) {
      root.Hypechat = {};
    }
    root.Hypechat.WorkspacesApi = factory(root.Hypechat.ApiClient, root.Hypechat.Body4);
  }
}(this, function(ApiClient, Body4) {
  'use strict';

  /**
   * Workspaces service.
   * @module api/WorkspacesApi
   * @version 1.0.0
   */

  /**
   * Constructs a new WorkspacesApi. 
   * @alias module:api/WorkspacesApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the apiWorkspacesPost operation.
     * @callback module:api/WorkspacesApi~apiWorkspacesPostCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates a new workspace
     * Allows the user to create a new workspace specifying its name, users, admins and creator
     * @param {module:model/Body4} body Creates workspace Object
     * @param {module:api/WorkspacesApi~apiWorkspacesPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.apiWorkspacesPost = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling apiWorkspacesPost");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Object;

      return this.apiClient.callApi(
        '/api/workspaces', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));