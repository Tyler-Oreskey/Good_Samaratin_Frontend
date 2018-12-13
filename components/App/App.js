import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Navbar from '../Navbar/Navbar'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      
    }
  }
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
