import React, {Component} from 'react'
import { View, Text } from 'react-native'

export default class HomepageQuotes extends Component {

  render() {

  const { quotes: { quote, author}} = this.props

    return (
      <View>
        <Text style={styles.quote}>"{quote}"</Text>
        <Text style={styles.author}>-{author}</Text>
      </View>
    )
  }
}
const styles = {
  quote: {
    fontSize: 25,
    marginTop: 10,
    marginLeft: 15,
    marginRight: 15
  },
  author: {
    fontWeight: 'bold',
    marginTop: 5,
    fontStyle: 'italic',
    fontSize: 20,
    textAlign: 'center'
  }
}
