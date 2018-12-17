import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Container, CheckBox, Text, Body, ListItem } from 'native-base'



class Question extends Component {
    constructor(props) {
        super(props);
        this.state = {
            incorrectAnswer: false,
            correctAnswer: false,
            showNextQuestionButton: false,
            endQuiz: false,
            currentQuestionIndex: 0,
            buttons: {},
            buttonClasses: {},
            correct: [],
            incorrect: [],
            checked: false,
        }
    }

    onCheckboxSelect = () => {
        const { toggleSelected, message } = this.props
        const { id } = message
        toggleSelected(id)
    }

    // checkAnswer = (index, correctAnswer) => {
    //     const { correct, incorrect, currentQuestionIndex } = this.state
    //     if (index == correctAnswer) {
    //         if (incorrect.indexOf(currentQuestionIndex) < 0 && correct.indexOf(currentQuestionIndex) < 0) {
    //             correct.push(currentQuestionIndex)
    //         }

    //         this.setState({
    //             correctAnswer: true,
    //             incorrectAnswer: false,
    //             showNextQuestionButton: true,
    //             correct: correct
    //         })

    //         let disabledAll = {
    //             0: { disabled: true },
    //             1: { disabled: true },
    //             2: { disabled: true },
    //             3: { disabled: true }
    //         }

    //         this.setState((prevState) => {
    //             const buttons = Object.assign(
    //                 {},
    //                 prevState.buttons,
    //                 {
    //                     ...disabledAll,
    //                     [index - 1]: {
    //                         className: (index == correctAnswer) ? "correct" : ""
    //                     },
    //                 }
    //             );
    //             return { buttons };
    //         })
    //     } else {
    //         if (correct.indexOf(currentQuestionIndex) < 0 && incorrect.indexOf(currentQuestionIndex) < 0) {
    //             incorrect.push(currentQuestionIndex)
    //         }

    //         this.setState({
    //             incorrectAnswer: true,
    //             correctAnswer: false,
    //             incorrect: incorrect
    //         })
    //         this.setState((prevState) => {
    //             const buttons = Object.assign(
    //                 {},
    //                 prevState.buttons,
    //                 {
    //                     [index - 1]: {
    //                         disabled: !prevState.buttons[index - 1]
    //                     }
    //                 }
    //             );
    //             return { buttons };
    //         });
    //     }
    // }

    // nextQuestion = (currentQuestionIndex) => {
    //     const { quiz } = this.props

    //     var initState = {
    //         incorrectAnswer: false,
    //         correctAnswer: false,
    //         showNextQuestionButton: false,
    //         buttons: {},
    //     }

    //     if (currentQuestionIndex + 1 == quiz.length) {
    //         this.setState({
    //             ...initState,
    //             endQuiz: true
    //         })
    //     } else {
    //         this.setState({
    //             ...initState,
    //             currentQuestionIndex: currentQuestionIndex + 1,
    //         })
    //     }
    // }

    render() {
        const { quiz, selected } = this.props
        const { question } = quiz
        console.log('Question.js: quiz', quiz)
        console.log('Question.js: question', question)

        return (
            <Body>
                {quiz.map(question => 
                    <Body key={question.id}>
                        <Text key={question.id} question={question.question} style={styles.questions}> {question.question}</Text>
                        <ListItem onPress={() => this.setState({ checked: !this.state.checked })}>
                            <CheckBox style={styles.checkBox} checked={this.state.checked} onChange={this.onCheckboxSelect} />
                            <Text style={styles.answers}>{question.correct_answer}</Text>
                        </ListItem>
                        <ListItem onPress={() => this.setState({ checked: !this.state.checked })}>
                            <CheckBox style={styles.checkBox} checked={this.state.checked} />
                            <Text style={styles.answers}>{question.wrong_answer_one}</Text>
                        </ListItem>
                        <ListItem onPress={() => this.setState({ checked: !this.state.checked })}>
                            <CheckBox style={styles.checkBox} checked={this.state.checked} />
                            <Text style={styles.answers}>{question.wrong_answer_two}</Text>
                        </ListItem>
                        <ListItem onPress={() => this.setState({ checked: !this.state.checked })}>
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