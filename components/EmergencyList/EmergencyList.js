import React, { Component } from 'react';
import { View, Text, Image, Card, ListItem, Button, Icon, StyleSheet } from 'react-native'
import Emergency from '../Emergency/Emergency'

class EmergencyList extends Component {
  render() {

    const { emergencies } = this.props

    return (
      <View style={styles.container}>
      {emergencies.map((emergency, index) => ( <Emergency key={ index }
        emergency={emergency}
        />
      ))}
    </View>
    );
  }
}

const styles = StyleSheet.create({
});

export default EmergencyList;
