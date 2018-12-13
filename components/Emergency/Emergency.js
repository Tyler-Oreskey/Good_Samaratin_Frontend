import React, { Component } from 'react';
import { View, Text, Image, Card, ListItem, Button, Icon } from 'react-native'
import CardView from 'react-native-cardview'

class Emergency extends Component {
  render() {

    const { emergency: { emergency_name}} = this.props

    return (
      <CardView
          cardElevation={2}
          cardMaxElevation={2}
          cornerRadius={5}>
          <Text>
              {emergency_name}
          </Text>
      </CardView>
    );
  }
}

export default Emergency;
