import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Navbar from '../Navbar/Navbar'

export default class App extends Component {
  render() {
    return (
      <View>
        <Navbar />
      </View>
    );
  }
}

const styles = StyleSheet.create({

});
