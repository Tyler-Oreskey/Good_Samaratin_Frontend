import React, {Component} from 'react';
var buffer = require('buffer')
class AuthService{
  login(creds, cb){

    var b = new buffer.Buffer(creds.username + ':' + creds.password)
    var encodedAuth = b.toString('base64')
    console.log(encodedAuth);

    fetch('https://api.github.com/user', {
      headers: {
        'Authorization' : 'Basic ' + encodedAuth
      }
    })
    .then((response) => {
      if(response.status >= 200 && response.status < 300){
        console.log(response);
        return response
      }
      throw{
        badCredentials: response.status == 401,
        unknownError: response.status != 401
      }
        console.log(response);
        throw "unknown error"
      })
      .then((response) => {
        return response.json()
      })
      .then((results) => {
        return cb({success: true})
      })
      .catch((err) => {
        return cb (err)
      })
      .finally(() => {
        return cb({showProgress: false})
      })

  }
}
module.exports = new AuthService()
