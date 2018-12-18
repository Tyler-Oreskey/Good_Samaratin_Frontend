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

import store from './Store';

export default class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      loginStatus: store.getState().loginStatus,
    }
  }

  componentDidMount() {

    // hook up callback from store when it's changed
    this.unsubscribe = store.onChange(() => {
      this.setState({
        loginStatus: store.getState().loginStatus,
      })
    });

    store.setState({ handleLogoutStatus: this.handleLogoutStatus });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  //set user login status to true
  handleLoginStatus = () => {
     console.log('App::handleLoginStatus()');
     store.setState({
       loginStatus: true
     });
   }

   //set user login status to false when user logs out
   handleLogoutStatus = () => {
      console.log('App::handleLogoutStatus()');
      store.setState({
        loginStatus: false
      });
    }

  render() {
    return (
      <Router>
        <Scene key="root" hideNavBar= "false">
          <Scene key="navbar" component={Navbar} handleLogoutStatusCB={this.handleLogoutStatus} XXloginStatus={this.state.loginStatus} loginStatus={this.state.loginStatus}  title="X Navbar" />
          <Scene key="homePage" component={Homepage} loginStatus={this.state.loginStatus} title="X Home" initial={true} />
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
