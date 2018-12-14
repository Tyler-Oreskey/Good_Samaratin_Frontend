import React, { Component } from 'react'
import { StyleSheet, Text, Dimensions } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { Container, Header, Content, Footer, Button, Left, Right, Body, Title } from 'native-base'


export default class Homepage extends Component {
    constructor() {
        super()
        this.state = {
            quiz: [],
        }
    }

    // This is to grab quotes from the database
    async componentDidMount() {
        const response = await fetch('https://safe-sands-98677.herokuapp.com/quizzes', {
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
        var randomQuote = json[Math.floor(Math.random() * json.length)]
        this.setState({
            ...this.state,
            quotes: randomQuote
        })
    }

    render() {
        return (            
            <Container>
                    <HomepageQuotes quotes={this.state.quotes} author={this.state.author} />
                    <Content>
                        <Button full large rounded primary onPress={() => { Actions.questionsPage(); }}><Text>Quiz</Text></Button>
                    </Content>
                </Container>
                <Footer>
                    <Content>
                        <Button full large danger onPress={() => { Actions.emergencies(); }}><Text>Emergency</Text></Button>
                    </Content>
                </Footer>
            </Container>
        );
    }
}

const height = Dimensions.get('window').height

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    }
});
