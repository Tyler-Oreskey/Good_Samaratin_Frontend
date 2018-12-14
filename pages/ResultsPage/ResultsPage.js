import React, { Component } from 'react';
import { Image, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, Header, Content, Footer, Button, Left, Right, Body, Title } from 'native-base'

export default class ResultsPage extends Component {

  render() {
      return (
        <Container>
          <Header style={styles.header}>
            <Left>
              <Button style={styles.button}
                onPress={() => { Actions.questionsPage() }}>
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
          </Footer>
        </Container>
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
