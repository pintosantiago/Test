# Hypechat.HealthcheckApi

All URIs are relative to *http://app-server-t2.herokuapp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**rootGet**](HealthcheckApi.md#rootGet) | **GET** / | Check if server is still working


<a name="rootGet"></a>
# **rootGet**
> ERRORUNKNOWN rootGet()

Check if server is still working



### Example
```javascript
var Hypechat = require('hypechat');

var apiInstance = new Hypechat.HealthcheckApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.rootGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ERRORUNKNOWN**](ERRORUNKNOWN.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

