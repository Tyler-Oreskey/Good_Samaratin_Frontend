import React, {Component} from 'react';
import {Platform, StyleSheet, Image, View, Dimensions, AsyncStorage, FlatList} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, Header, Content, Footer, Button, Left, Right, Body, Title, Card, CardItem, Text } from 'native-base'
import CallForHelpButton from '../../components/CallForHelpButton/CallForHelpButton'


export default class StepsPage extends Component {
  constructor(props){
      super(props)
      this.state = {
        emergencies: [],
        emergencies_steps: [],
        steps: [],
        currentEmergency: AsyncStorage.getItem('emergency')
      }
    }

  // Request to get all the tables
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

    const response2 = await fetch('https://safe-sands-98677.herokuapp.com/emergencies_steps', {
      method: 'GET',
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        'Accept': 'application/JSON',
        'Content-Type': 'application/json'
      }
    })
    const json2 = await response2.json()
    this.setState({
      ...this.state,
      emergencies_steps: json2
    })

    const response3 = await fetch('https://safe-sands-98677.herokuapp.com/steps', {
      method: 'GET',
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        'Accept': 'application/JSON',
        'Content-Type': 'application/json'
      }
    })
    const json3 = await response3.json()
    this.setState({
      ...this.state,
      steps: json3
    })

  }



  renderItem = item => {
    if(!item) {
      return (
        console.log("Error, no item in renderItem")
      )
    }

    //console.log("Emergencies >>> ", this.state.emergencies)
    //console.log("Emergencies_Steps >>> ", this.state.emergencies_steps)
    //console.log("Steps >>> ", this.state.steps)
    console.log("fakjjlfkas", this.state.currentEmergency)

    return (
      <Card>
        <CardItem>
          <Body>
            <Text style={{fontWeight: 'bold'}}>{item.key}</Text>
          </Body>
        </CardItem>
        <CardItem>
          <Text>{item.step}</Text>
        </CardItem>
      </Card>
    )
  }

  render() {

    //const filterEmergency = this.state.currentEmergency
    //const emergencyObject = this.state.emergencies.filter((emergency) => emergency.emergency_name === filterEmergency)

    //console.log('filter>>> ', filterEmergency)
    //console.log('emegerncyObjec>>> ', emergencyObject)

    return (
      <Container>
        <Header style={styles.header}>
          <Left>
            <Button
              style={styles.button}
              onPress={() => {Actions.emergencies()}}>
              <Text style={styles.text}>Back</Text>
            </Button>
          </Left>
          <Body>
            <Image
              style={styles.logo}
              source={require('../../Logo/logo.png')}
            />
          </Body>
          <Right>
          </Right>
        </Header>
        <Content>
          <FlatList
            data={ this.state.steps }
            keyExtractor={ (item, index) => index.toString() }
            renderItem={ ({item}) => this.renderItem(item) }
          />
        </Content>
        <Footer>
          <CallForHelpButton />
        </Footer>
      </Container>
    );
  }
}

  const height = Dimensions.get('window').height
  const width = Dimensions.get('window').width

  const styles = StyleSheet.create({
    container: {
      borderRadius: 4,
      width: 125,
      height: height * 0.15,
      borderWidth: 2,
      fontSize: 20,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'firebrick'
    },
    containerOdd: {
      borderRadius: 4,
      width: 124,
      height: height * 0.15,
      borderWidth: 2,
      fontSize: 20,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'whitesmoke',
      color: 'white'
    },
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
    }
  });
