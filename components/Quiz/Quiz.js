import React, { Component } from 'react'
import { Actions } from 'react-native-router-flux'
import { Container, Content, Button, Text } from 'native-base'
import Question from './Question'


export default class Quiz extends Component {
    

    render() {
        let { quiz, toggleSelected, selectedAnswers, correctAnswers, wrongAnswers} = this.props
        
        
        console.log('Quiz.js: quiz', this.props.quiz)


        if (!this.props.quiz[0]) {
            return (
                <Container>
                    <Text>Loading Quiz...</Text>
                </Container>
            )
        }

        return (
        <Container>          
            <Container>
                <Content>
                    <Text style={styles.header}>{quiz.quizTitle}</Text>
                    <Question 
                        quiz={quiz}
                        correctAnswers={correctAnswers}
                        wrongAnswers={wrongAnswers}
                        toggleSelected={toggleSelected}
                        selected={selectedAnswers.has(quiz.id)} 
                    />
                </Content>
                    <Button style={styles.submitButton} full large rounded primary onPress={() => { Actions.resultsPage() }}><Text style={styles.text}>Submit {quiz.length} Questions</Text></Button>
            </Container>
        </Container> 
        )
    }
}

const styles = {
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 24,
    },
    text: {
        color: 'white'
    },
    submitButton: {
        marginTop: 5, 
        marginBottom: 20,
        marginRight: 20,
        marginLeft: 20,   
    }
}
