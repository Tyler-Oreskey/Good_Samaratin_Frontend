import React, { Component } from 'react';
import { Image, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, Header, Footer, Button, Left, Right, Body, Content, Card, ListItem, List } from 'native-base'

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
          <Content>

            <Card>
              <List>
                <ListItem>
                  <Text style={styles.congTxt}>Congratulations! You Answered 4 Out Of 5 Correctly</Text>
                </ListItem>
                <ListItem>
                  <Text style={styles.ansTxt}>#1 Call 911</Text>
                </ListItem>
                <ListItem>
                <Text style={styles.resTxt}>The first thing you should always do in an emergency situation is to contact emergency services to facilitate access of patients to people with the knowledge and resources to help them.</Text>
                </ListItem>
                <ListItem >
                  <Text style={styles.ansTxt}>#2 Perform the Heimlich maneuver.</Text>
                </ListItem>
                <ListItem>
                  <Text style={styles.ansTxt}>#3 Assess the scene for potential hazards to you. You cannot help someone if you also become a patient/casualty.</Text>
                </ListItem>
                <ListItem>
                  <Text style={styles.ansTxt}>#4 When you are you are willing and able to help and the patient wants your help.</Text>
                </ListItem>
              </List>
            </Card>
          </Content>
          <Footer>
            <Content>
              <Button full large danger onPress={() => { Actions.homePage() }}><Text>Home Page</Text></Button>
            </Content>
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
  },
  congTxt: {
    fontSize: 24,
    fontWeight: 'bold',
    fontStyle: 'italic',
    textAlign: 'center'
  },
  ansTxt: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  resTxt: {
    fontSize: 12,
    fontStyle:'italic'
  }
}
