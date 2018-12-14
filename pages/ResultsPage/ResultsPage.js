import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Dimensions} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, Header, Content, Footer, Button, Left, Right, Body, Title } from 'native-base'

export default class ResultsPage extends Component {

  render() {
      return (
        <Container>
          <Header>
            <Left>
            </Left>
            <Body>
              <Title></Title>
            </Body>
            <Right>
            </Right>
          </Header>
          <Container>
          </Container>
          <Footer>
          </Footer>
        </Container>
      );
    }
  }
