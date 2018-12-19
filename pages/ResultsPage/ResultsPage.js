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
                  <Text style={styles.ansTxt}>#1 Call 911.</Text>
                </ListItem>
                <ListItem>
                  <Text style={styles.resTxt}>The first thing you should always do in an emergency situation is to contact emergency services to facilitate access of patients to people with the knowledge and resources to help them.</Text>
                </ListItem>
                <ListItem>
                  <Text style={styles.ansTxt}>#2 Shock</Text>
                </ListItem>
                <ListItem>
                  <Text style={styles.resTxt}>This is a classic presentation of shock because of blood loss, and is a medical emergency. Other causes of shock include infection, severe allergic reactions, severe dehydration, and heart problems.</Text>
                </ListItem>
                <ListItem >
                  <Text style={styles.ansTxt}>#3 Deliver back blows and chest thrusts</Text>
                </ListItem>
                <ListItem>
                  <Text style={styles.resTxt}>Do not perform a blind finger sweep, as it may push the foreign body father into the airway. CPR is not indicated at this point.</Text>
                </ListItem>
                <ListItem>
                  <Text style={styles.ansTxt}>#4 Assess the scene for potential hazards to you.</Text>
                </ListItem>
                <ListItem>
                  <Text style={styles.resTxt}>You cannot help someone if you also become a patient/casualty.</Text>
                </ListItem>
                <ListItem>
                  <Text style={styles.ansTxt}>#5 Deliver 30 chest compressions</Text>
                </ListItem>
                <ListItem>
                  <Text style={styles.resTxt}>Do not leave the child. Beginning chest compressions is critical.</Text>
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
