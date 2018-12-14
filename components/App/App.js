
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import { Container, Header, Content, Footer } from 'native-base'

// Pages
import Homepage from '../Homepage/Homepage'
import EmergencyPage from '../EmergencyPage/EmergencyPage'

// Components
import Navbar from '../Navbar/Navbar'
import CallForHelpButton from '../CallForHelpButton/CallForHelpButton'


export default class App extends Component {

  constructor(props){
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Router hideNavBar= "true">
        <Scene key="root">
          <Scene key="homePage" component={Homepage} title="Home" initial={true} />
          <Scene key="emergencies" component={EmergencyPage} title="Emergency" />
        </Scene>
      </Router>
    )
  }
}
