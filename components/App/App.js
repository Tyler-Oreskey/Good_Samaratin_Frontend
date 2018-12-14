import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Navbar from '../Navbar/Navbar'
import CallForHelpButton from '../CallForHelpButton/CallForHelpButton'
import Home from '../Home/Home'
import EmergencyPage from '../EmergencyPage/EmergencyPage'
import { Container, Header, Content, Footer } from 'native-base'

export default class App extends Component {

  constructor(props){
    super(props)
    this.state = {

    }
  }

   render() {
      return (
        <Container>
            <Navbar />
          <Content>
           <EmergencyPage />
            <Home />
          </Content>
          <Footer>
            <CallForHelpButton />
          </Footer>
        </Container>
      )
    }
  }

