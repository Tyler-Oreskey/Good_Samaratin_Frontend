import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, AsyncStorage} from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import { Container, Header, Content, Footer } from 'native-base'

// Pages
import Homepage from './pages/Homepage/Homepage'
import EmergencyPage from './pages/EmergencyPage/EmergencyPage'
import LoginPage from './pages/Loginpage/Loginpage'
import QuestionsPage from './pages/QuestionsPage/QuestionsPage'
import ResultsPage from './pages/ResultsPage/ResultsPage'
import StepsPage from './pages/StepsPage/StepsPage'
import Navbar from './components/Navbar/Navbar'

export default class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      loginStatus: false,
    }
  }
  //set user login status to true
  handleLoginStatus = () => {
     this.setState({
       ...this.state,
       loginStatus: true
     });
   }
   //set user login status to false when user logs out
   handleLogoutStatus = () => {
      this.setState({
        ...this.state,
        loginStatus: false
      });
    }



  render() {
    console.log('login status app.js', this.state.loginStatus);
    return (
      <Router>
        <Scene key="root" hideNavBar= "false">
        <Scene key="navbar" component={Navbar} handleLogoutStatusCB={this.handleLogoutStatus} loginStatus={this.state.loginStatus} title="Navbar" />
          <Scene key="homePage" component={Homepage} loginStatus={this.state.loginStatus} title="Home" initial={true} />
          <Scene key="emergencies" component={EmergencyPage} title="Emergency" />
          <Scene key="login" handleLoginStatusCB={this.handleLoginStatus} component={LoginPage} loginStatus={this.state.loginStatus} title="Login" />
          <Scene key="questionsPage" component={QuestionsPage} title="Quiz" />
          <Scene key="resultsPage" component={ResultsPage} title="Results" />
          <Scene key="stepsPage" component={StepsPage} title="Steps" />
        </Scene>
      </Router>
    )
  }
}
