import React, {Component} from 'react';
import { Image, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, Header, Footer, Button, Left, Right, Body, Content } from 'native-base'
import Quiz from '../../components/Quiz/Quiz'

export default class QuestionsPage extends Component {

  constructor(props) {
    super(props) 
    this.state = {
      quiz: [],
    }
  }

  async loadQuizzes() {
    console.log('App: loadQuizzes()')
    const response = await fetch('https://safe-sands-98677.herokuapp.com/quizzes',
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-type': 'application/json',
        }
      }
    )

    console.log('App: loadMessages(): response', response)
    if (response.status === 200) {
      const resJSON = await response.json()
      const quizData = {
        'quizTitle': 'Good Samaritan General Quiz',
        'questions': [
          {
            'id': '1',
            'question': 'You find a person who is unresponsive and not breathing, what is the first thing you should do?',
            'questionType': 'text',
            'questionCategory': 'basic_quiz',
            'answers': [
              'Check for a pulse.',
              'Start CPR.',
              'Call 911.',
              'Check for ID.'
            ],
            'correctAnswer': '3'
          },
          {
            'id': '2',
            'question': 'Your best friend is chowing down on a bratwurst, when he/she grabs his neck and starts hacking, you know they’re is choking, what is the first thing you should do?',
            'questionType': 'text',
            'questionCategory': 'basic_quiz',
            'answers': [
              'Try to pull the bratwurst out of their throat.',
              'Perform the Heimlich maneuver.',
              'Try to burp him/her.',
              'Give him/her some water.'
            ],
            'correctAnswer': '2'
          },
          {
            'id': '3',
            'question': 'What is the first thing you should do when attempting to help someone else.',
            'questionType': 'text',
            'questionCategory': 'basic_quiz',
            'answers': [
              'Assess the scene for potential hazards to you. You cannot help someone if you also become a patient/casualty.',
              'Run to the patient.',
              'Give the patient a sternum rub to check their responsiveness, even if he/she is making noise.',
              'Take a photo to send to your friends.'
            ],
            'correctAnswer': '1'
          },
          {
            'id': '4',
            'question': 'When should you help a patient.',
            'questionType': 'text',
            'questionCategory': 'basic_quiz',
            'answers': [
              'Call 911',
              'Never',
              'When you are the most qualified person there and you are willing to help.',
            ],
            'correctAnswer': '3'
          },
        ]
      }

      console.log('loaded: ', resJSON)
      console.log('quizData', quizData)
      this.setState({
        quiz: quizData,
      })
    } else {
      console.log('Error:', response)
      throw new Error('GET request failed')
    }
  }


  async componentDidMount() {
    this.loadQuizzes()
  }

  render() {
    const { quiz } = this.state
    // console.log('QuestionsPage: quiz', quiz)
      return (
        <Container>
          <Header style={styles.header}>
            <Left>
              <Button
              style={styles.button} 
              onPress={() => { Actions.homePage()
              }}>
                <Text style={styles.text}>Back</Text>
              </Button>
            </Left>
            <Body>
              <Image
                style={styles.logo}
                source={require('../../Logo/logo.png')}
              />
            </Body>
            <Right>
              <Button
                style={styles.button}
                onPress={() => console.log('GoodBye')}>
                <Text style={styles.text}>Logout</Text>
              </Button>
            </Right>
          </Header>
            <Quiz quiz={quiz} />
          <Footer>
            <Content>
              <Button full large danger onPress={() => { Actions.homePage() }}><Text>Home Page</Text></Button>
            </Content>
          </Footer>
          </Container>        
      )
    }
  }

const styles = {
  header: {
    marginTop: 20,
    height: 120
  },
  logo: {
    width: 70,
    height: 80,
  },
  button: {
    marginLeft: 10,
    marginRight: 10,
    width: 70,
    justifyContent: 'center',
  },
  text: {
    color: 'white'
  }
}