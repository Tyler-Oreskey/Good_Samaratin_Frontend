import React, {Component} from 'react';
import {Platform, StyleSheet, Image, Text, View, Dimensions} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, Header, Content, Footer, Button, Left, Right, Body, Title } from 'native-base'
import CallForHelpButton from '../../components/CallForHelpButton/CallForHelpButton'

export default class StepsPage extends Component {

  render() {
      return (
        <Container>
          <Header style={styles.header}>
            <Left>
              <Button
                style={styles.button}
                onPress={() => {Actions.emergencies()}}>
                <Text style={styles.text}>Back</Text>
              </Button>
            </Left>
            <Body>
              <Image
                style={styles.logo}
                source={require('../../Logo/logo.png')}
              />
            </Body>
            <Right>
            </Right>
          </Header>
          <Container>



          </Container>
          <Footer>
            <CallForHelpButton />
          </Footer>
        </Container>
      );
    }
  }

  const height = Dimensions.get('window').height
  const width = Dimensions.get('window').width

  const styles = StyleSheet.create({
    container: {
      borderRadius: 4,
      width: 125,
      height: height * 0.15,
      borderWidth: 2,
      fontSize: 20,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'firebrick'
    },
    containerOdd: {
      borderRadius: 4,
      width: 124,
      height: height * 0.15,
      borderWidth: 2,
      fontSize: 20,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'whitesmoke',
      color: 'white'
    },
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
  });
