import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import NavigationBar from 'react-native-navbar';
import { Button, Body, Header, Left, Right, Title } from 'native-base'


export default class Navbar extends Component {
  render() {
      return (
        <Header>
          <Left>
            <Button onPress={() => console.log('Hello')}>
              <Text>Login</Text>
            </Button>
          </Left>
                <Body>
                  <Title>Good Samaritan</Title>
                </Body>
            <Right>
              <Button onPress={() => console.log('GoodBye')}>
                <Text>Logout</Text>
              </Button>
            </Right>
          </Header>
      )
    }
  }
