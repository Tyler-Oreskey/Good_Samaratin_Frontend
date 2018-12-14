import React, {Component} from 'react'
import { View, Text } from 'react-native'

export default class HomepageQuotes extends Component {

  render() {

  const { quotes: { quote, author}} = this.props

    return (
      <View>
        <Text style={{fontSize: 20}}>"{quote}"</Text>
        <Text style={{ fontSize: 20, fontStyle: 'italic'}}>-{author}</Text>
      </View>
    )
  }

}
