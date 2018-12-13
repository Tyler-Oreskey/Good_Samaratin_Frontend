import React, { Component } from 'react';
import { View, Text, Image, Card, ListItem, Button, Icon } from 'react-native'
import Emergency from '../Emergency/Emergency'

class EmergencyList extends Component {
  render() {

    const { emergencies } = this.props

    return (
      <View>
      {emergencies.map((emergency, index) => ( <Emergency key={ index }
        emergency={emergency}
        />
      ))}
    </View>
    );
  }
}

export default EmergencyList;
