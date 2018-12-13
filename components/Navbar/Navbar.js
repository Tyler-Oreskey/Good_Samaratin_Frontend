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
        <View>
            <View style={styles.container}>
              <NavigationBar
                style={styles.navbar}
                leftButton={leftButtonConfig}
                title={titleConfig}
                rightButton={rightButtonConfig}
              />
            </View>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      marginTop: 20,
      flex: 1,
    },
    title: {
      color: 'red'
    }
  });
