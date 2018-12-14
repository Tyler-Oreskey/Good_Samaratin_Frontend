import React, {Component} from 'react';
import { Image, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, Header, Footer, Button, Left, Right, Body } from 'native-base'

export default class QuestionsPage extends Component {

  render() {
      return (
        <Container>
          <Header style={styles.header}>
            <Left>
              <Button
              style={styles.button} 
              onPress={() => { Actions.homePage()
              }}>
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
              <Button
                style={styles.button}
                onPress={() => console.log('GoodBye')}>
                <Text style={styles.text}>Logout</Text>
              </Button>
            </Right>
          </Header>
          <Container>
            <Button full large rounded primary onPress={() => { Actions.resultsPage(); }}><Text style={styles.text}>Submit</Text></Button>
          </Container>
          <Footer>
          </Footer>
        </Container>
      );
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