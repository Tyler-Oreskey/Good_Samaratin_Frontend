import React, { Component } from 'react';
import { View, Text, Image, Card, ListItem, Button, Icon, StyleSheet, FlatList } from 'react-native'
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
        <TouchableOpacity>
          <Text>
            {emergencies.map((emergency_name, index) => (
              <Emergency key={ index } emergency_name={emergency_name} />
            ))}
            {console.log("fdsfds", emergencies.emergency_name)}
          </Text>
        </TouchableOpacity>
      )
    }

    render() {
      console.log(this.state.emergencies)

      return (
        <View>
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


          //<EmergencyList emergencies={this.state.emergencies} />
