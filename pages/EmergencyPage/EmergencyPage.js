import React, { Component } from 'react';
import { View, Text, Image, Card, ListItem, Icon, StyleSheet, FlatList, TouchableOpacity, Dimensions } from 'react-native'
import { Container, Header, Content, Footer, Left, Right, Body, Title, Button } from 'native-base'
import { Actions } from 'react-native-router-flux';
import EmergencyList from '../../components/EmergencyList/EmergencyList'
import Emergency from '../../components/Emergency/Emergency'

export default class EmergencyPage extends Component {
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

  renderItem = item => {
    console.log("ITEM >>>>> ", item)
    return (
      <TouchableOpacity
        onPress={ () => console.log('item >>>', item) }
        style={styles.container}
      >
        <Text>
          { item.emergency_name }
        </Text>
      </TouchableOpacity>
    )
  }

    render() {
      return (
        <View>
          <Header>
            <Left>
              <Button onPress= {() => {Actions.homePage(); }}>
                <Text>Back</Text>
              </Button>
            </Left>
            <Body>
              <Title>Good Samaritan</Title>
            </Body>
            <Right />
          </Header>
          <FlatList
            data={ this.state.emergencies }
            keyExtractor={ (item, index) => index.toString() }
            renderItem={ ({item}) => this.renderItem(item) }
            horizontal={false}
            numColumns={3}
          />
        </View>
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

  }
});
