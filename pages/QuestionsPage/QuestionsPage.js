import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Dimensions} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, Header, Content, Footer, Button, Left, Right, Body, Title } from 'native-base'

export default class QuestionsPage extends Component {

  render() {
      return (
        <Container>
          <Header>
            <Left>
            </Left>
            <Body>
              <Title>Quiz Goes Here</Title>
              
            </Body>
            <Right>
            </Right>
          </Header>
          <Container>
            <Button full large rounded primary onPress= {() => {Actions.resultsPage(); }}><Text>Submit</Text></Button>
          </Container>
          <Footer>
          </Footer>
        </Container>
      );
    }
  }
