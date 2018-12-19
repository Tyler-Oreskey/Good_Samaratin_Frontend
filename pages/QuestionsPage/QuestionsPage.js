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
          <Content>

          <Card>
            <ListItem>
              <Body>
                <Text style={{ fontWeight: 'bold' }}>What should you do if someone is having a seizure</Text>
              </Body>
            </ListItem>
            <List>
              <ListItem>
                <CheckBox checked={this.state.checked17} onPress={() => this.setState({ checked17: !this.state.checked17 })} />
                <Text style={styles.ansText}>Roll them on their stomach.</Text>
              </ListItem>
              <ListItem>
                <CheckBox checked={this.state.checked18} onPress={() => this.setState({ checked18: !this.state.checked18 })} />
                <Text style={styles.ansText}>Hold their head still.</Text>
              </ListItem>
              <ListItem>
                <CheckBox checked={this.state.checked19} onPress={() => this.setState({ checked19: !this.state.checked19 })} />
                <Text style={styles.ansText}>Start recording them with your phone.</Text>
              </ListItem>
              <ListItem>
                <CheckBox checked={this.state.checked20} onPress={() => this.setState({ checked20: !this.state.checked20 })} />
                <Text style={styles.ansText}>Call 911.</Text>
              </ListItem>
            </List>
          </Card>

          <Card>
            <ListItem>
              <Body>
                  <Text style={{ fontWeight: 'bold' }}>You notice that a person has experienced a significant amount of blood loss, has pale skin color, and is becoming confused. What is most likely the cause?</Text>
              </Body>
            </ListItem>
            <List>
                <ListItem onPress={() => this.setState({ checked1: !this.state.checked1 })}>
                <CheckBox checked={this.state.checked1} onPress={() => this.setState({ checked1: !this.state.checked1 })} />
                <Text style={styles.ansText}>Seizure</Text>
              </ListItem>
                <ListItem onPress={() => this.setState({ checked2: !this.state.checked2 })}>
                <CheckBox checked={this.state.checked2} onPress={() => this.setState({ checked2: !this.state.checked2 })} />
                <Text style={styles.ansText}>Stroke</Text>
              </ListItem>
                <ListItem onPress={() => this.setState({ checked3: !this.state.checked3 })}>
                <CheckBox checked={this.state.checked3} onPress={() => this.setState({ checked3: !this.state.checked3 })} />
                <Text style={styles.ansText}>Low Blood Sugar</Text>
              </ListItem>
                <ListItem onPress={() => this.setState({ checked4: !this.state.checked4 })}>
                <CheckBox checked={this.state.checked4} onPress={() => this.setState({ checked4: !this.state.checked4 })} />
                <Text style={styles.ansText}>Shock</Text>
              </ListItem>
            </List>
          </Card>

          <Card>
            <ListItem>
              <Body>
                  <Text style={{ fontWeight: 'bold' }}>You are eating in a restaurant when a woman cries out. Her six-month-old child is turning blue around the mouth. He appears to be gagging but is not able to cry or take a breath. An older child had just given him some marbles to play with. What is the next step?</Text>
              </Body>
            </ListItem>
            <List>
              <ListItem onPress={() => this.setState({ checked5: !this.state.checked5 })}>
                <CheckBox checked={this.state.checked5} onPress={() => this.setState({ checked5: !this.state.checked5 })} />
                <Text style={styles.ansText}>Begin CPR</Text>
              </ListItem>
              <ListItem onPress={() => this.setState({ checked6: !this.state.checked6 })}>
                <CheckBox checked={this.state.checked6} onPress={() => this.setState({ checked6: !this.state.checked6 })} />
                  <Text style={styles.ansText}>Attempt rescue breaths then compressions</Text>
              </ListItem>
              <ListItem onPress={() => this.setState({ checked7: !this.state.checked7 })}>
                <CheckBox checked={this.state.checked7} onPress={() => this.setState({ checked7: !this.state.checked7 })} />
                <Text style={styles.ansText}>Deliver back blows and chest thrusts</Text>
              </ListItem>
              <ListItem onPress={() => this.setState({ checked8: !this.state.checked8 })}>
                <CheckBox checked={this.state.checked8} onPress={() => this.setState({ checked8: !this.state.checked8 })} />
                <Text style={styles.ansText}>Blind finger Sweep</Text>
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
                <Text style={styles.ansText}>Give the patient a sternum rub to check their responsiveness, even if he/she is making noise.</Text>
              </ListItem>
              <ListItem onPress={() => this.setState({ checked10: !this.state.checked10 })}>
                <CheckBox checked={this.state.checked10} onPress={() => this.setState({ checked10: !this.state.checked10 })} />
                <Text style={styles.ansText}>Take a photo to send to your friends.</Text>
              </ListItem>
              <ListItem onPress={() => this.setState({ checked11: !this.state.checked11 })}>
                <CheckBox checked={this.state.checked11} onPress={() => this.setState({ checked11: !this.state.checked11 })} />
                <Text style={styles.ansText}>Assess the scene for potential hazards to you. You cannot help someone if you also become a patient/casualty.</Text>
              </ListItem>
              <ListItem onPress={() => this.setState({ checked12: !this.state.checked12 })}>
                <CheckBox checked={this.state.checked12} onPress={() => this.setState({ checked12: !this.state.checked12 })} />
                <Text style={styles.ansText}>Run to the patient.</Text>
              </ListItem>
            </List>
          </Card>

          <Card>
            <ListItem>
              <Body>
                  <Text style={{ fontWeight: 'bold' }}>You find a child that is unresponsive. After yelling for help, you check and find the child is not breathing. What is the next step?</Text>
              </Body>
            </ListItem>
            <List>
              <ListItem onPress={() => this.setState({ checked13: !this.state.checked13 })}>
                <CheckBox checked={this.state.checked13} onPress={() => this.setState({ checked13: !this.state.checked13 })} />
                <Text style={styles.ansText}>Leave the child and search for an AED</Text>
              </ListItem>
              <ListItem onPress={() => this.setState({ checked14: !this.state.checked14 })}>
                <CheckBox checked={this.state.checked14} onPress={() => this.setState({ checked14: !this.state.checked14 })} />
                <Text style={styles.ansText}>Deliver rescue breaths as most cardiac arrest occur due to breathing problems</Text>
              </ListItem>
              <ListItem onPress={() => this.setState({ checked15: !this.state.checked15 })}>
                <CheckBox checked={this.state.checked15} onPress={() => this.setState({ checked15: !this.state.checked15 })} />
                <Text style={styles.ansText}>Begin back blows and chest thrusts</Text>
              </ListItem>
              <ListItem onPress={() => this.setState({ checked16: !this.state.checked16 })}>
                <CheckBox checked={this.state.checked16} onPress={() => this.setState({ checked16: !this.state.checked16 })} />
                  <Text style={styles.ansText}>Deliver 30 chest compressions.</Text>
              </ListItem>
            </List>
          </Card>

          </Content>
          
          {/* <Quiz 
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
  },
  ansText: {
    fontSize: 14,
    marginRight: 10,
    marginLeft:10,
  },
}
