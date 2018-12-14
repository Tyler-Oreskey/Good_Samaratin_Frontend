
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import { Container, Header, Content, Footer } from 'native-base'

// Pages
import Homepage from './pages/Homepage/Homepage'
import EmergencyPage from './pages/EmergencyPage/EmergencyPage'
import LoginPage from './pages/Loginpage/Loginpage'

// Components
import Navbar from './components/Navbar/Navbar'
import CallForHelpButton from './components/CallForHelpButton/CallForHelpButton'


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
          <Scene key="login" component={LoginPage} title="Login" />
        </Scene>
      </Router>
    )
  }
}
