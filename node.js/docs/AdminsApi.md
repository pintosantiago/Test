# HypeChatApi.AdminsApi

All URIs are relative to *https://virtserver.swaggerhub.com/Santiago-Pinto/hypeChat-api/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addInventory**](AdminsApi.md#addInventory) | **POST** /inventory | adds an inventory item


<a name="addInventory"></a>
# **addInventory**
> addInventory(opts)

adds an inventory item

Adds an item to the system

### Example
```javascript
var HypeChatApi = require('hype_chat_api');

var apiInstance = new HypeChatApi.AdminsApi();

var opts = { 
  'inventoryItem': new HypeChatApi.InventoryItem() // InventoryItem | Inventory item to add
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addInventory(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inventoryItem** | [**InventoryItem**](InventoryItem.md)| Inventory item to add | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

