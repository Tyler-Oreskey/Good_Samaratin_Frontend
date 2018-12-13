import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Navbar from '../Navbar/Navbar'
import CallForHelpButton from '../CallForHelpButton/CallForHelpButton'
import Home from '../Home/Home'
import EmergencyList from '../EmergencyList/EmergencyList'
import { Container, Header, Content, Footer } from 'native-base'



export default class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      emergencies: [],
    }
  }

  //make get request to display emergencies on emergencies page
  async componentDidMount() {
    const response = await fetch('https://safe-sands-98677.herokuapp.com/emergencies', {
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
      emergencies: json
    })
  }


   render() {
      return (
        <Container>
          <Header>
            <Navbar />
          </Header>
          <Content>
            <EmergencyList emergencies={this.state.emergencies} />
            <Home />
          </Content>
          <Footer>
            <CallForHelpButton />
          </Footer>
        </Container>
      )
    }
  }

const styles = StyleSheet.create({

})
