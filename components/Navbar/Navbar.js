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
  title: 'Good Samaratin',
};

export default class Navbar extends Component {
  render() {
      return (
        <View style={styles.container}>
          <NavigationBar
            leftButton={leftButtonConfig}
            title={titleConfig}
            rightButton={rightButtonConfig}
          />
        </View>
      );
    }
  }
  const styles = StyleSheet.create({
    container: {
      marginLeft: 10,
      marginRight: 10,
      marginTop: 20,
      flex: 1,
    },
  });
