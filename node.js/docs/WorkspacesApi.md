# Hypechat.WorkspacesApi

All URIs are relative to *http://app-server-t2.herokuapp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiWorkspacesPost**](WorkspacesApi.md#apiWorkspacesPost) | **POST** /api/workspaces | Creates a new workspace


<a name="apiWorkspacesPost"></a>
# **apiWorkspacesPost**
> Object apiWorkspacesPost(body)

Creates a new workspace

Allows the user to create a new workspace specifying its name, users, admins and creator

### Example
```javascript
var Hypechat = require('hypechat');

var apiInstance = new Hypechat.WorkspacesApi();

var body = new Hypechat.Body4(); // Body4 | Creates workspace Object


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.apiWorkspacesPost(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body4**](Body4.md)| Creates workspace Object | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

