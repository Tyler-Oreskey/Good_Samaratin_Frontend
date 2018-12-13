import React from 'react'
import { View, Button, Text, StyleSheet } from 'react-native'
import call from 'react-native-phone-call'


const args = {
    number: '2036133326', // String value with the number to call
    prompt: false // Optional boolean property. Determines if the user should be prompt prior to the call 
}

export default class CallForHelpButton extends React.Component {

    callForHelp = () => {
        call(args).catch(console.error)
    }

    render() {
        return (
            <View style={styles.buttonContainer}>
                <Button
                    title={'Help'}
                    onPress={this.callForHelp} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    buttonContainer: {
        margin: 60,
    },
})