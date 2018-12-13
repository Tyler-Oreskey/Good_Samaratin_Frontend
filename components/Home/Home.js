import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, Dimensions} from 'react-native';
import Login from '../Login/Login'

// Login Bar

// Med Facts API

// Button that routes to the quizzes

// Button that routes to the emergency



export default class Home extends Component {
  render() {
      return (
        <View>
          <View style={styles.container}>
            <Button
              style={styles.buttonStyle}
              title="Quiz"
              color="#F0FFFF"
            />

            <Button
              style={styles.buttonStyle}
              title="Emergency"
              color="#F0FFFF"
            />
          </View>
        </View>
      );
    }
  }

const height = Dimensions.get('window').height

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#B22222',
  },
  borderButton: {
    marginBottom: 15,
    marginTop: height * 0.6,
    width: '100%',
    height: height * 0.15,
    borderWidth: 10
  },
  buttonStyle: {
    marginBottom: 5,
    marginTop: height * 0.6,
    width: '100%',
    height: height * 0.15,
    borderWidth: 3,
    borderRadius: 5,
    margin: 2,
  },
});
