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
      selectedQuestions: new Set(),
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
      console.log('loaded: ', resJSON)
      
      this.setState({
        quiz: resJSON,
      })
    } else {
      console.log('Error:', response)
      throw new Error('GET request failed')
    }
  }


  async componentDidMount() {
    this.loadQuizzes()
  }


  toggleSelected = (id) => {
    this.setState((state) => {

      // toggle the selection
      const { selectedQuestions } = state
      if (selectedQuestions.has(id)) selectedQuestions.delete(id)
      else selectedQuestions.add(id)

      // update state

      return {
        selectedQuestions,
      }
    })
  }


  render() {
    const { quiz, selectedQuestions } = this.state
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
          <Quiz 
            quiz={quiz} 
            toggleSelected={this.toggleSelected}
            selectedQuestions={selectedQuestions}
          />
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