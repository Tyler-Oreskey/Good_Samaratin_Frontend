import React, { Component } from 'react';
import { View, Text, Image, Card, ListItem, Icon, StyleSheet, FlatList, TouchableOpacity, Dimensions, AsyncStorage } from 'react-native'
import { Container, Header, Content, Footer, Left, Right, Body, Title, Button } from 'native-base'
import { Actions } from 'react-native-router-flux';
import CallForHelpButton from '../../components/CallForHelpButton/CallForHelpButton'

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

  async onPressHandler(item){
    await AsyncStorage.setItem('emergency', item.emergency_name)
    //console.log("item >>>", item.emergency_name)
    Actions.stepsPage()
  }

  renderItem = item => {
    if((item.id % 2) === 0) {
      return (
        <TouchableOpacity
          onPress={()=>this.onPressHandler(item)}
          style={styles.container}
        >
          <Text style={{color: 'whitesmoke'}}>
            { item.emergency_name }
          </Text>
        </TouchableOpacity>
      )
    }
    if ((item.id % 2)) {
     return (
       <TouchableOpacity
        onPress={()=>this.onPressHandler(item)}
        style={styles.containerOdd}
       >
         <Text style={{color: 'firebrick'}}>
           { item.emergency_name }
         </Text>
       </TouchableOpacity>
     )
  }
}

    render() {
      const { loginStatus } = this.props
      return (
        <Container>
          <Header style={styles.header}>
            <Left>
              <Button
                style={styles.button}
                onPress={() => {Actions.homePage(this.props.loginStatus)}}>
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
          <Content padding>
            <FlatList
              data={ this.state.emergencies }
              keyExtractor={ (item, index) => index.toString() }
              renderItem={ ({item}) => this.renderItem(item) }
              horizontal={false}
              numColumns={3}
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
    width: width * 0.333,
    height: height * 0.15,
    borderWidth: 2,
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'firebrick'
  },
  containerOdd: {
    borderRadius: 4,
    width: width * 0.333,
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
})

// onPress={ () => console.log('item >>>', item) }
