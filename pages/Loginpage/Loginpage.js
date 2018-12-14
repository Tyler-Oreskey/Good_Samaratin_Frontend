import React, { Component } from 'react';
var buffer = require('buffer')
import { Text, View, StyleSheet, Image, TextInput, TouchableHighlight, ActivityIndicator } from 'react-native';

export default class Loginpage extends Component {
  constructor(props){
    super(props)

    this.state = {
      showProgress: false
    }
  }

  render() {

    var errorCtrl = <View />
    if (!this.state.success && this.state.badCredentials) {
      errorCtrl = <Text style={styles.error}>
        That username or password did not work
      </Text>
    }
    if (!this.state.success && this.state.unknownError) {
      errorCtrl = <Text style={styles.error}>
        An unknown error has occured
      </Text>
    }

    return (
      <View style={styles.container}>

          <Text style={styles.heading}>
            Login Through Github
          </Text>

          <TextInput
          onChangeText={(text) => this.setState({username: text})}
            style={styles.input}
            placeholder='Github username' />

          <TextInput style={styles.input}
            onChangeText={(text) => this.setState({password: text})}
            placeholder='Github password'
            secureTextEntry={ true } />

          <TouchableHighlight
            onPress={this.onLoginPressed.bind(this)}
            style={styles.button}>
            <Text style={styles.buttonText}>
              Log in
            </Text>
          </TouchableHighlight>

          {errorCtrl}

          <ActivityIndicator
            animating={this.state.showProgress}
            size="large"
            style={styles.loader}
            />
      </View>
    );
  }

  onLoginPressed(){
    this.setState({showProgress: true})

    var authService = require('../../components/AuthService/AuthService')

    authService.login({
      username: this.state.username,
      password: this.state.password
    },(results) => {
      this.setState(Object.assign({
        showProgress: false
      }, results))
      if (results.success && this.props.onLogin) {
        this.props.onLogin()
      }
    })
  }
}

var styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    paddingTop: 60,
    alignItems: 'center',
  },
  logo:{
    width: 80,
    height: 80
  },
  heading:{
    fontSize: 30,
    marginTop: 10
  },
  input:{
    height: 50,
    width: 350,
    marginTop: 10,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48bbec'
  },
  button:{
    height: 50,
    width: 350,
    backgroundColor: '#48BBEC',
    marginTop: 10,
    justifyContent: 'center',
    borderRadius: 10
  },
  buttonText:{
    fontSize: 22,
    color: '#FFF',
    alignSelf: 'center'
  },
  loader:{
    marginTop: 20,
  },
  error:{
    color: 'red',
    paddingTop:10
  }
})
