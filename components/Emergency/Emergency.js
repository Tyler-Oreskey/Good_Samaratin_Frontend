import React, { Component } from 'react';
import { View, Text, Image, ListItem, Button, Icon, StyleSheet, ScrollView } from 'react-native'
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
class Emergency extends Component {
  render() {

    const { emergency: { emergency_name}} = this.props

    return (
      <ScrollView>
        <Card>
            <CardTitle
              title={emergency_name}
            />
            <CardAction
              separator={true}
              inColumn={false}>
            <CardButton
              onPress={() => {}}
              title="View"
              color="#FEB557"
            />
          </CardAction>
        </Card>
      </ScrollView>
    );
  }
}

export default Emergency;
