import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Navbar from '../Navbar/Navbar'
import CallForHelpButton from '../CallForHelpButton/CallForHelpButton'

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
        <CallForHelpButton />
      </View>
    );
  }
}

const styles = StyleSheet.create({

});
