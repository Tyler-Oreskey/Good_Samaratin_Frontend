import React from 'react'
import { TouchableHighlight, Button, View, StyleSheet } from 'react-native'
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
                <TouchableHighlight style={styles.button} onPress={this.callForHelp}>
                    <Button title={'Help'} onPress={this.callForHelp}/>
                </TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    buttonContainer: {
        paddingHorizontal: 10,
        paddingVertical: 30,
    },
    button: {
        backgroundColor: '#DDDDDD',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 50
    },
})