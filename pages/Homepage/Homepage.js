import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Dimensions} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, Header, Content, Footer, Button, Left, Right, Body, Title } from 'native-base'


import Navbar from '../../components//Navbar/Navbar'
import HomepageQuotes from '../../components/HomepageQuotes/HomepageQuotes'
import Loginpage from '../Loginpage/Loginpage'

import store from '../../Store';


export default class Homepage extends Component {
  constructor(){
    super()
    this.state = {
      quotes: [],
    }
  }

  // This is to grab quotes from the database
  async loadQuotes() {
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
    var randomQuote = json[Math.floor(Math.random() * json.length)]
    this.setState({
      ...this.state,
      quotes: randomQuote
    })
  }

  async componentDidMount() {
    this.loadQuotes()
  }

  render() {

    // const { loginStatus } = this.props
    const loginStatus = store.getState().loginStatus;

      return (
        <Container>
          <Navbar loginStatus={this.props.loginStatus}/>
          <Container>
            <HomepageQuotes quotes={this.state.quotes} author={this.state.author}/>
            <Content>
              <Button disabled={loginStatus === false} loginStatus={this.props.loginStatus} style={styles.button} full large rounded primary onPress={() => { Actions.questionsPage(); }}><Text style={styles.text}>Quiz</Text></Button>
            </Content>
          </Container>
          <Footer>
            <Content>
              <Button full large danger onPress= {() => {Actions.emergencies(); }}><Text style={styles.text}>Emergency</Text></Button>
            </Content>
          </Footer>
        </Container>
      )
    }
  }

const height = Dimensions.get('window').height

const styles = {
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: 'white',
    fontSize: 20,
    justifyContent: 'center'
  },
  button: {
    marginTop: 25,
    marginLeft: 15,
    marginRight: 15
  }
}
