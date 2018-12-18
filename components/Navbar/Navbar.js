import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View, Image } from 'react-native';
import NavigationBar from 'react-native-navbar';
import { Button, Body, Header, Left, Right, Title } from 'native-base'
import { Actions } from 'react-native-router-flux';

import store from '../../Store';

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    console.log('Navbar::constructor(), props', props);
  }

  functionCombined = () => {
      // console.log("Navbar::functionCombined(), this.props.handleLogoutStatusCB:", this.props.handleLogoutStatusCB);
      // this.props.handleLogoutStatusCB();
      console.log("Navbar::functionCombined(), store.getState().handleLogoutStatus:", store.getState().handleLogoutStatus);
      store.getState().handleLogoutStatus();
      { Actions.homePage(); }
  }

  render() {

    // const { loginStatus, handleLogoutStatus } = this.props
    const { handleLogoutStatus } = this.props
    const loginStatus = store.getState().loginStatus;

    var display;
    //hide login button if user is logged in
    if (loginStatus === true) {
      display = loginStatus ? "none" : "flex";
    }

    var type = 'none'
    //logout button if user is not logged in
    if (loginStatus === true) {
      type = 'flex'
    }

      return (
        <Header style={styles.header}>

          <Left>
            <Button
              style={[styles.button, {display}]}
              onPress={() => { Actions.login() }}>
              <Text style={styles.text}>Login</Text>
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
              style={[styles.button, {display: type}]}
              onPress={this.functionCombined}>
              <Text style={styles.text}>Logout</Text>
            </Button>
          </Right>

        </Header>
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
  }
