import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View, Image } from 'react-native';
import NavigationBar from 'react-native-navbar';
import { Button, Body, Header, Left, Right, Title } from 'native-base'


export default class Navbar extends Component {
  render() {
      return (
        <Header style={styles.header}>

          <Left>
            <Button
              style={styles.button}
              onPress={() => console.log('Hello')}>
              <Text style={styles.text}>Login</Text>
            </Button>
          </Left>

          <Body>
            <Image
              style={styles.logo}
              source={require('../../Logo/logo.png')}
            />
          </Body>

          <Right>
            <Button
              style={styles.button}
              onPress={() => console.log('GoodBye')}>
              <Text style={styles.text}>Logout</Text>
            </Button>
          </Right>

        </Header>
      )
    }
  }
  const styles = {
    header: {
      marginTop: 20,
      height: 120
    },
    logo: {
      width: 70,
      height: 80,
    },
    button: {
      marginLeft: 10,
      marginRight: 10,
      width: 70,
      justifyContent: 'center',
    },
    text: {
      color: 'white'
    }
  }
