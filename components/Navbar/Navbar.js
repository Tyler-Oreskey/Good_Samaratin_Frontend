import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import NavigationBar from 'react-native-navbar';

const rightButtonConfig = {
  title: 'Login',
  handler: () => alert('hello!'),
};

const leftButtonConfig = {
  title: 'Back',
  handler: () => alert('hello!'),
};

const titleConfig = {
  title: <Text style={{
    textAlign: 'center',
    flex: 1,
    fontSize: 30,
    fontFamily: 'Arial-BoldItalicMT'
    }}>Good Samaratin</Text>
};

export default class Navbar extends Component {
  render() {
      return (
              <NavigationBar
                leftButton={leftButtonConfig}
                title={titleConfig}
                rightButton={rightButtonConfig}
              />
      )
    }
  }

  // const styles = StyleSheet.create({
  //   container: {
  //     marginTop: 20,
  //     flex: 1,
  //   },
  // });
