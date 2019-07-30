import React, { Component } from 'react';
import Quiz from './components/Quiz.js';
import quizQuestions from './api/quizQuestions';
import Result from './components/Result'

import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      counter: 0,
      questionId: 1,
      question: '',
      answerOptions: [],
      answer: '',
      answersCount: {
        Academics: {
          Accounting: 0,
          Anthropology: 0,
          ArtHistory: 0,
          Biochemistry: 0,
          Biology: 0,
          Chemistry: 0,
          CommStudies: 0,
          ComputerSci: 0,
          Dance: 0,
          Economics: 0,
          Education: 0,
          Engineering: 0,
          English: 0,
          ExerciseSci: 0,
          EnvironmentalPolicy: 0,
          EnvironmentalSci: 0,
          FilmDigitalMedia: 0,
          Finance: 0,
          ForensicSci: 0,
          History: 0,
          Geography: 0,
          GraphicDesign: 0,
          InfoTech: 0,
          Journalism: 0,
          Latin: 0,
          Marketing: 0,
          Mathematics: 0,
          Music: 0,
          Nursing: 0,
          Philosophy: 0,
          Physics: 0,
          PoliticalSci: 0,
          PreLaw: 0,
          Psychology: 0,
          ReligiousStudies: 0,
          SocialWork: 0,
          Sociology: 0,
          Statistics: 0,
          StudioArt: 0,
          Theater: 0,
          WomenGenderStudies: 0
        }
      },
      result: ''
    };

    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
  }

  componentDidMount() {
    const answerOptions = quizQuestions.map(question => question.answers);  
  
    this.setState({
      question: quizQuestions[0].question,
      answerOptions: answerOptions[0]
    });
  }

  setUserAnswer(answer) {
    const answersCount = this.state.answersCount
    let applyAnswer = answer => {
      const answer_array = answer.split(",")

      if (answer_array.length === 1) {
        console.log("reply of no")

      } else if (answer_array.length === 2) {
        let first_answer = answer_array[0]
        let second_answer = answer_array[1]
        answersCount['Academics'][first_answer] += 1
        answersCount['Academics'][second_answer] += 1

      } else if (answer_array.length === 3) {
        let first_answer = answer_array[0]
        let second_answer = answer_array[1]
        let third_answer = answer_array[2]
        answersCount['Academics'][first_answer] += 1
        answersCount['Academics'][second_answer] += 1
        answersCount['Academics'][third_answer] += 1

      } else if (answer_array.length === 4) {
        let first_answer = answer_array[0]
        let second_answer = answer_array[1]
        let third_answer = answer_array[2]
        let fourth_answer = answer_array[3]
        answersCount['Academics'][first_answer] += 1
        answersCount['Academics'][second_answer] += 1
        answersCount['Academics'][third_answer] += 1
        answersCount['Academics'][fourth_answer] += 1

      } else if (answer_array.length === 5) {
        let first_answer = answer_array[0]
        let second_answer = answer_array[1]
        let third_answer = answer_array[2]
        let fourth_answer = answer_array[3]
        let fifth_answer = answer_array[4]
        answersCount['Academics'][first_answer] += 1
        answersCount['Academics'][second_answer] += 1
        answersCount['Academics'][third_answer] += 1
        answersCount['Academics'][fourth_answer] += 1
        answersCount['Academics'][fifth_answer] += 1
        
      } else if (answer_array.length === 6) {
        let first_answer = answer_array[0]
        let second_answer = answer_array[1]
        let third_answer = answer_array[2]
        let fourth_answer = answer_array[3]
        let fifth_answer = answer_array[4]
        let sixth_answer = answer_array[5]
        answersCount['Academics'][first_answer] += 1
        answersCount['Academics'][second_answer] += 1
        answersCount['Academics'][third_answer] += 1
        answersCount['Academics'][fourth_answer] += 1
        answersCount['Academics'][fifth_answer] += 1
        answersCount['Academics'][sixth_answer] += 1

      }  else if (answer_array.length === 7) {
        let first_answer = answer_array[0]
        let second_answer = answer_array[1]
        let third_answer = answer_array[2]
        let fourth_answer = answer_array[3]
        let fifth_answer = answer_array[4]
        let sixth_answer = answer_array[5]
        let seventh_answer = answer_array[6]
        answersCount['Academics'][first_answer] += 1
        answersCount['Academics'][second_answer] += 1
        answersCount['Academics'][third_answer] += 1
        answersCount['Academics'][fourth_answer] += 1
        answersCount['Academics'][fifth_answer] += 1
        answersCount['Academics'][sixth_answer] += 1
        answersCount['Academics'][seventh_answer] += 1
      } 

      return answersCount
    }

    this.setState({
      answersCount: applyAnswer(answer),
      answer: answer
    })

    console.log("this.state: " + JSON.stringify(this.state));
    console.log("this.state.answer: " + JSON.stringify(this.state.answer));
  }

  handleAnswerSelected(event) {
    this.setUserAnswer(event.currentTarget.value);
    if (this.state.questionId < quizQuestions.length) {
        setTimeout(() => this.setNextQuestion(), 500);
      } else {
        setTimeout(() => this.setResults(this.getResults()), 500);
      }
  }

  setNextQuestion() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;
    this.setState({
      counter: counter,
      questionId: questionId,
      question: quizQuestions[counter].question,
      answerOptions: quizQuestions[counter].answers,
      answer: ''
    });
  }

  getResults() {
    const answersCount = this.state.answersCount;
    console.log(answersCount);
    const academicAnswer = answersCount['Academics'];
    console.log(academicAnswer);
    const answersCountKeys = Object.keys(academicAnswer);
    console.log(answersCountKeys);
    const answersCountValues = answersCountKeys.map((key) => academicAnswer[key]);
    console.log(answersCountValues);
    const maxAnswerCount = Math.max.apply(null, answersCountValues);
    console.log(maxAnswerCount);
    console.log("x194x: " + answersCountKeys.filter((key) => academicAnswer[key] === maxAnswerCount));
  
    return answersCountKeys.filter((key) => academicAnswer[key] === maxAnswerCount);
  }

  setResults (result) {
    if (result.length >= 1) {
      this.setState({ result: result[0] });
    } else {
      this.setState({ result: 'Undetermined' });
    }
  }

  renderQuiz() {
    return (
      <Quiz
        answer={this.state.answer}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        question={this.state.question}
        questionTotal={quizQuestions.length}
        onAnswerSelected={this.handleAnswerSelected}
      />
    );
  }

  renderResult() {
    return <Result quizResult={this.state.result} />;
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Quiz</h2>
        </div>
        {this.state.result ? this.renderResult() : this.renderQuiz()}
      </div>
    );
  }
}

export default App;
