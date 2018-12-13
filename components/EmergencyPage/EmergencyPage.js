import React, { Component } from 'react';
import { View, Text, Image, Card, ListItem, Button, Icon, StyleSheet } from 'react-native'
import EmergencyList from '../EmergencyList/EmergencyList'

class EmergencyPage extends Component {
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
          <EmergencyList emergencies={this.state.emergencies} />
        </View>
      );
    }
  }

const styles = StyleSheet.create({
});

export default EmergencyPage;
