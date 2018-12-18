import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Container, CheckBox, Text, Body, ListItem } from 'native-base'



class Question extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false,
        }
    this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({ checked: !this.state.checked });
    }


    render() {
        const { quiz } = this.props
        const { checked } = this.state
        const questions = []
        quiz.forEach(question => questions.push(question))
        console.log('Question.js: quiz', quiz)
        console.log('Question.js: question', questions)

        return (
            <Body>
                {quiz.map(question => 
                    <Body key={question.id}>
                        <Text question={question.question} style={styles.questions}> {question.question}</Text>
                        <ListItem onPress={this.toggle}>
                            <CheckBox style={styles.checkBox} checked={this.state.checked} />
                            <Text style={styles.answers}>{question.correct_answer}</Text>
                        </ListItem>
                        <ListItem onPress={this.toggle}>
                            <CheckBox style={styles.checkBox} checked={this.state.checked} />
                            <Text style={styles.answers}>{question.wrong_answer_one}</Text>
                        </ListItem>
                        <ListItem onPress={this.toggle}>
                            <CheckBox style={styles.checkBox} checked={this.state.checked} />
                            <Text style={styles.answers}>{question.wrong_answer_two}</Text>
                        </ListItem>
                        <ListItem onPress={this.toggle}>
                            <CheckBox style={styles.checkBox} checked={this.state.checked} />
                            <Text style={styles.answers}>{question.wrong_answer_three}</Text>
                        </ListItem>
                    </Body>
                )}
            </Body>
        )
    }
}


export default Question


const styles = {
    questions: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 14,
    },
    answers: {
        textAlign: 'center',
        fontSize: 14,
        marginTop: 10,
    },
    checkBox: {
        marginRight: 20,
    }
}