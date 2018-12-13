import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Navbar from '../Navbar/Navbar'
import Home from '../Home/Home'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      emergencies: [],
    }
  }

  //make get request to display emergencies on emergencies page
  async componentDidMount() {
    const response = await fetch('https://safe-sands-98677.herokuapp.com/emergencies', {
      method: 'GET',
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        'Accept': 'application/JSON',
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()
    this.setState({
      ...this.state,
      emergencies: json
    })
  }


  render() {
    return (
      <View>
        <Navbar />
        <Home />

      </View>
    );
  }
}

const styles = StyleSheet.create({

});
