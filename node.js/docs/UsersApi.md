# Hypechat.UsersApi

All URIs are relative to *http://app-server-t2.herokuapp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiUsersMeGet**](UsersApi.md#apiUsersMeGet) | **GET** /api/users/me | Get user by user id
[**apiUsersMePut**](UsersApi.md#apiUsersMePut) | **PUT** /api/users/me | Allows the user to change some profile fields
[**apiUsersPost**](UsersApi.md#apiUsersPost) | **POST** /api/users | Register a new user
[**apiUsersRestorepasswordPost**](UsersApi.md#apiUsersRestorepasswordPost) | **POST** /api/users/restorepassword | Sends an email containing a new password for the user
[**apiUsersSdadsadsajdPost**](UsersApi.md#apiUsersSdadsadsajdPost) | **POST** /api/users/sdadsadsajd | Sends an email containing a new password for the user


<a name="apiUsersMeGet"></a>
# **apiUsersMeGet**
> InlineResponse2001 apiUsersMeGet()

Get user by user id



### Example
```javascript
var Hypechat = require('hypechat');

var apiInstance = new Hypechat.UsersApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.apiUsersMeGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: json

<a name="apiUsersMePut"></a>
# **apiUsersMePut**
> InlineResponse200 apiUsersMePut(body)

Allows the user to change some profile fields

Users may only modify their password, nickname or profile picture

### Example
```javascript
var Hypechat = require('hypechat');

var apiInstance = new Hypechat.UsersApi();

var body = new Hypechat.Body1(); // Body1 | Creates user object


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.apiUsersMePut(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body1**](Body1.md)| Creates user object | 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiUsersPost"></a>
# **apiUsersPost**
> InlineResponse200 apiUsersPost(body)

Register a new user

This can only be done one time per user.

### Example
```javascript
var Hypechat = require('hypechat');

var apiInstance = new Hypechat.UsersApi();

var body = new Hypechat.Body(); // Body | Creates user object


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.apiUsersPost(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body**](Body.md)| Creates user object | 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiUsersRestorepasswordPost"></a>
# **apiUsersRestorepasswordPost**
> apiUsersRestorepasswordPost(body)

Sends an email containing a new password for the user



### Example
```javascript
var Hypechat = require('hypechat');

var apiInstance = new Hypechat.UsersApi();

var body = new Hypechat.Body2(); // Body2 | Creates user object


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiUsersRestorepasswordPost(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body2**](Body2.md)| Creates user object | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiUsersSdadsadsajdPost"></a>
# **apiUsersSdadsadsajdPost**
> apiUsersSdadsadsajdPost(body)

Sends an email containing a new password for the user



### Example
```javascript
var Hypechat = require('hypechat');

var apiInstance = new Hypechat.UsersApi();

var body = new Hypechat.Body4(); // Body4 | Creates user object


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiUsersSdadsadsajdPost(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body4**](Body4.md)| Creates user object | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

