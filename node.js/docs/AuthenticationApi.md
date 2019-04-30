# Hypechat.AuthenticationApi

All URIs are relative to *http://app-server-t2.herokuapp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiAuthSinginPost**](AuthenticationApi.md#apiAuthSinginPost) | **POST** /api/auth/singin | Sing In with an already registered user


<a name="apiAuthSinginPost"></a>
# **apiAuthSinginPost**
> &#39;String&#39; apiAuthSinginPost(body)

Sing In with an already registered user



### Example
```javascript
var Hypechat = require('hypechat');

var apiInstance = new Hypechat.AuthenticationApi();

var body = new Hypechat.Body3(); // Body3 | Sing in a user


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.apiAuthSinginPost(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body3**](Body3.md)| Sing in a user | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text

