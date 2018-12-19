import React, {Component} from 'react';
import { Image, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, Header, Footer, Button, Left, Right, Body, Content, Card, ListItem, List, CheckBox } from 'native-base'
import Quiz from '../../components/Quiz/Quiz'

import store from '../../Store';

export default class QuestionsPage extends Component {

  functionCombined = () => {
      // console.log("Navbar::functionCombined(), this.props.handleLogoutStatusCB:", this.props.handleLogoutStatusCB);
      // this.props.handleLogoutStatusCB();
      console.log("Navbar::functionCombined(), store.getState().handleLogoutStatus:", store.getState().handleLogoutStatus);
      store.getState().handleLogoutStatus();
      { Actions.homePage(); }
  }

  constructor(props) {
    super(props)
    this.state = {
      quiz: [],
      selectedAnswers: new Set(),
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
    console.log('id', id)
    console.log('selectedAnswers', selectedAnswers)
    this.setState((state) => {

      // toggle the selection
      const { selectedAnswers } = state
      if (selectedAnswers.has(id)) selectedAnswers.delete(id)
      else selectedAnswers.add(id)

      // update state

      return {
        selectedAnswers,
      }
    })
  }


  render() {
    const { quiz, selectedAnswers } = this.state
    correctAnswers = []
    wrongAnswers = []
    quiz.forEach(question => correctAnswers.push(question.correct_answer))
    quiz.forEach(question => wrongAnswers.push(question.wrong_answer_one, question.wrong_answer_two, question.wrong_answer_three))
    console.log('correctAnswers', correctAnswers)
    console.log('wrongAnswers', wrongAnswers)

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
                onPress={this.functionCombined}>
                <Text style={styles.text}>Logout</Text>
              </Button>
            </Right>
          </Header>
<<<<<<< HEAD
          <Quiz
=======
          <Content>

          <Card>
            <ListItem>
              <Body>
                <Text style={{ fontWeight: 'bold' }}>You find a person who is unresponsive and not breathing, what is the first thing you should do?</Text>
              </Body>
            </ListItem>
            <List>
                <ListItem onPress={() => this.setState({ checked1: !this.state.checked1 })}>
                <CheckBox checked={this.state.checked1} onPress={() => this.setState({ checked1: !this.state.checked1 })} />
                <Text>    Call 911.</Text>
              </ListItem>
                <ListItem onPress={() => this.setState({ checked2: !this.state.checked2 })}>
                <CheckBox checked={this.state.checked2} onPress={() => this.setState({ checked2: !this.state.checked2 })} />
                <Text>    Check for a pulse.</Text>
              </ListItem>
                <ListItem onPress={() => this.setState({ checked3: !this.state.checked3 })}>
                <CheckBox checked={this.state.checked3} onPress={() => this.setState({ checked3: !this.state.checked3 })} />
                <Text>    Start CPR.</Text>
              </ListItem>
                <ListItem onPress={() => this.setState({ checked4: !this.state.checked4 })}>
                <CheckBox checked={this.state.checked4} onPress={() => this.setState({ checked4: !this.state.checked4 })} />
                <Text>    Check for ID.</Text>
              </ListItem>
            </List>
          </Card>

          <Card>
            <ListItem>
              <Body>
                <Text style={{ fontWeight: 'bold' }}>Your best friend is chowing down on a bratwurst, when he/she grabs his neck and starts hacking, you know they’re is choking, what is the first thing you should do?</Text>
              </Body>
            </ListItem>
            <List>
              <ListItem onPress={() => this.setState({ checked5: !this.state.checked5 })}>
                <CheckBox checked={this.state.checked5} onPress={() => this.setState({ checked5: !this.state.checked5 })} />
                <Text>    Try to pull the bratwurst out of their throat.</Text>
              </ListItem>
              <ListItem onPress={() => this.setState({ checked6: !this.state.checked6 })}>
                <CheckBox checked={this.state.checked6} onPress={() => this.setState({ checked6: !this.state.checked6 })} />
                <Text>    Try to burp him/her.</Text>
              </ListItem>
              <ListItem onPress={() => this.setState({ checked7: !this.state.checked7 })}>
                <CheckBox checked={this.state.checked7} onPress={() => this.setState({ checked7: !this.state.checked7 })} />
                <Text>    Perform the Heimlich maneuver.</Text>
              </ListItem>
              <ListItem onPress={() => this.setState({ checked8: !this.state.checked8 })}>
                <CheckBox checked={this.state.checked8} onPress={() => this.setState({ checked8: !this.state.checked8 })} />
                <Text>    Give him/her some water.</Text>
              </ListItem>
            </List>
          </Card>

          <Card>
            <ListItem>
              <Body>
                <Text style={{ fontWeight: 'bold' }}>What is the first thing you should do when attempting to help someone else.</Text>
              </Body>
            </ListItem>
            <List>
              <ListItem onPress={() => this.setState({ checked9: !this.state.checked9 })}>
                <CheckBox checked={this.state.checked9} onPress={() => this.setState({ checked9: !this.state.checked9 })} />
                <Text>    Give the patient a sternum rub to check their responsiveness, even if he/she is making noise.</Text>
              </ListItem>
              <ListItem onPress={() => this.setState({ checked10: !this.state.checked10 })}>
                <CheckBox checked={this.state.checked10} onPress={() => this.setState({ checked10: !this.state.checked10 })} />
                <Text>    Take a photo to send to your friends.</Text>
              </ListItem>
              <ListItem onPress={() => this.setState({ checked11: !this.state.checked11 })}>
                <CheckBox checked={this.state.checked11} onPress={() => this.setState({ checked11: !this.state.checked11 })} />
                <Text>    Assess the scene for potential hazards to you. You cannot help someone if you also become a patient/casualty.</Text>
              </ListItem>
              <ListItem onPress={() => this.setState({ checked12: !this.state.checked12 })}>
                <CheckBox checked={this.state.checked12} onPress={() => this.setState({ checked12: !this.state.checked12 })} />
                <Text>    Run to the patient.</Text>
              </ListItem>
            </List>
          </Card>

          <Card>
            <ListItem>
              <Body>
                <Text style={{ fontWeight: 'bold' }}>When should you help a patient.</Text>
              </Body>
            </ListItem>
            <List>
              <ListItem onPress={() => this.setState({ checked13: !this.state.checked13 })}>
                <CheckBox checked={this.state.checked13} onPress={() => this.setState({ checked13: !this.state.checked13 })} />
                <Text>    Never.</Text>
              </ListItem>
              <ListItem onPress={() => this.setState({ checked14: !this.state.checked14 })}>
                <CheckBox checked={this.state.checked14} onPress={() => this.setState({ checked14: !this.state.checked14 })} />
                <Text>    Whenever you want.</Text>
              </ListItem>
              <ListItem onPress={() => this.setState({ checked15: !this.state.checked15 })}>
                <CheckBox checked={this.state.checked15} onPress={() => this.setState({ checked15: !this.state.checked15 })} />
                <Text>    Only on Tuesdays.</Text>
              </ListItem>
              <ListItem onPress={() => this.setState({ checked16: !this.state.checked16 })}>
                <CheckBox checked={this.state.checked16} onPress={() => this.setState({ checked16: !this.state.checked16 })} />
                <Text>    When you are the most qualified person there and you are willing to help.</Text>
              </ListItem>
            </List>
          </Card>

          <Card>
            <ListItem>
              <Body>
                <Text style={{ fontWeight: 'bold' }}>What should you do if someone is having a seizure</Text>
              </Body>
            </ListItem>
            <List>
              <ListItem>
                <CheckBox checked={this.state.checked17} onPress={() => this.setState({ checked17: !this.state.checked17 })} />
                <Text>    Roll them on their stomach.</Text>
              </ListItem>
              <ListItem>
                <CheckBox checked={this.state.checked18} onPress={() => this.setState({ checked18: !this.state.checked18 })} />
                <Text>    Hold their head still.</Text>
              </ListItem>
              <ListItem>
                <CheckBox checked={this.state.checked19} onPress={() => this.setState({ checked19: !this.state.checked19 })} />
                <Text>    Start recording them with your phone.</Text>
              </ListItem>
              <ListItem>
                <CheckBox checked={this.state.checked20} onPress={() => this.setState({ checked20: !this.state.checked20 })} />
                <Text>    Call 911.</Text>
              </ListItem>
            </List>

          </Card>
          </Content>
          
          {/* <Quiz 
>>>>>>> 14-for-presentation
            quiz={quiz}
            correctAnswers={this.correctAnswers}
            wrongAnswers={this.wrongAnswers}
            toggleSelected={this.toggleSelected}
            selectedAnswers={selectedAnswers}
          /> */}

          <Footer>
              <Content>
                <Button full large onPress={() => { Actions.resultsPage() }} style={styles.submitButton}><Text style={styles.text} >Submit Quiz</Text></Button>
              </Content>
            {/* <Content>
              <Button full large danger onPress={() => { Actions.homePage() }}><Text>Home Page</Text></Button>
            </Content> */}
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
  submitButton: {
    justifyContent: 'center',
  },
  text: {
    color: 'white'
  }
}
