import React, { Component } from 'react';
import { View, Text, Image, ListItem, Button, Icon, ScrollView, StyleSheet, TouchableHighlight} from 'react-native'
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';

class Emergency extends Component {
  render() {

    const { emergency: { emergency_name}} = this.props

    return (
      <Text>{emergency_name}</Text>
    );
  }
}

  const styles = StyleSheet.create({

  });

export default Emergency;
