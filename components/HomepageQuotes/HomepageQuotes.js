import React, {Component} from 'react';
import {Platform, StyleSheet, View, Text} from 'react-native';

export default class HomepageQuotes extends Component {

  render() {

  const { quotes: { quote, author}} = this.props

    return (
      <View>
        <Text style={{fontSize: 20}}>"{quote}"</Text>
        <Text style={{fontSize: 20}}>-{author}</Text>
      </View>
    );
  }

}
