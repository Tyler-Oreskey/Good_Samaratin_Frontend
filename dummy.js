import React from 'react';
import {StyleSheet, Text, View, KeyboardAvoidingView, TextInput, SafeAreaView, ImageBackground, Image, Alert, TouchableOpacity} from 'react-native'
import { Fonts } from '../../assets/fonts/fonts'

import store from '../../store';

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);

    // store.setState({ loginStatus: true })
    // store.getState().loginStatus
    this.state = {

      // hooked to global store
      loginStatus: store.getState().loginStatus,
    }
  }

  componentDidMount() {

    // hook up callback from store when it's changed
    this.unsubscribe = store.onChange(() => {
      this.setState({
        loginStatus: store.getState().loginStatus,
      })
    });

  }

  componentWillUnmount() {
    this.unsubscribe();
  }



  render() {

    return (
    <View style={styles.container}>
      <Text>Hellow here</True>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
