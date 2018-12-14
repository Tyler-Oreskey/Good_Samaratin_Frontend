import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Dimensions} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, Header, Content, Footer, Button, Left, Right, Body, Title } from 'native-base'


import Navbar from '../../components//Navbar/Navbar'
import HomepageQuotesList from '../../components/HomepageQuotesList/HomepageQuotesList'

export default class Homepage extends Component {
  constructor(props){
    super(props)
    this.state = {
      quotes: [],
      loginStatus: false
    }
  }

  // This is to grab quotes from the database
  async componentDidMount() {
    const response = await fetch('https://safe-sands-98677.herokuapp.com/quotes', {
      method: 'GET',
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        'Accept': 'application/JSON',
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()
    this.setState({
      ...this.state,
      quotes: json
    })
  }

  render() {
      return (
        <Container>
          <Header>
            <Left>
              <Button onPress= {() => {Actions.login(); }}>
                <Text>Login</Text>
              </Button>
            </Left>
            <Body>
              <Title>Good Samaritan</Title>
            </Body>
            <Right />
            </Header>
          <Container>
            <HomepageQuotesList quotes={this.state.quotes} author={this.state.author}/>
            <Content>
              <Button full large rounded primary onPress= {() => {Actions.questionsPage(); }}><Text>Quiz</Text></Button>
            </Content>
          </Container>
          <Footer>
            <Content>
              <Button full large danger onPress= {() => {Actions.emergencies(); }}><Text>Emergency</Text></Button>
            </Content>
          </Footer>
        </Container>
      );
    }
  }

const height = Dimensions.get('window').height

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});
