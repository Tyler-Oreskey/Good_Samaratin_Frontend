import React, {Component} from 'react';
import {Platform, StyleSheet, View, Text} from 'react-native';
import HomepageQuotes from '../HomepageQuotes/HomepageQuotes'

export default class HomepageQuotesList extends Component {

  render() {

    const { quotes } = this.props

    return (
      <View>
        {quotes.map((quotes, author, index) => ( <HomepageQuotes key={index}
          quotes={quotes}
          author={author}
        />))}
      </View>
    );
  }

}
