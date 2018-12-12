import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Header from '../Header/Header'

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View>
        <Header />
      </View>
    );
  }
}

const styles = StyleSheet.create({

});
