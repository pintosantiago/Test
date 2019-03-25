# HypeChatApi.DevelopersApi

All URIs are relative to *https://virtserver.swaggerhub.com/Santiago-Pinto/hypeChat-api/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**searchInventory**](DevelopersApi.md#searchInventory) | **GET** /inventory | searches inventory


<a name="searchInventory"></a>
# **searchInventory**
> [InventoryItem] searchInventory(opts)

searches inventory

By passing in the appropriate options, you can search for available inventory in the system 

### Example
```javascript
var HypeChatApi = require('hype_chat_api');

var apiInstance = new HypeChatApi.DevelopersApi();

var opts = { 
  'searchString': "searchString_example", // String | pass an optional search string for looking up inventory
  'skip': 56, // Number | number of records to skip for pagination
  'limit': 56 // Number | maximum number of records to return
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.searchInventory(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **searchString** | **String**| pass an optional search string for looking up inventory | [optional] 
 **skip** | **Number**| number of records to skip for pagination | [optional] 
 **limit** | **Number**| maximum number of records to return | [optional] 

### Return type

[**[InventoryItem]**](InventoryItem.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

