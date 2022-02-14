import React, { Component } from "react";
import "./App.css";
import Questionaire from "./components/questionaire";
import { getQuestions } from "./questions";

class App extends Component {
  state = { questions: [], number: 0, score: 0 };

  componentDidMount = () => {
    const questions = getQuestions();
    this.setState({ questions });
    document.body.style.backgroundColor = "#DBD5E7";
  };

  handleSubmit = (correct) => {
    this.setState({
      number: this.state.number + 1,
      score: this.state.score + correct,
    });
  };

  render() {
    const { questions, number } = this.state;

    if (
      this.state.number &&
      this.state.number === this.state.questions.length
    ) {
      //alert("You have finished the questionaire!");
      return (
        <div className="container">
          <h1 className="text-danger">You have finished the questionaire!</h1>
          <h2>Your Score is</h2>
          <h4>
            {this.state.score}/{this.state.questions.length}
          </h4>
        </div>
      );
    }
    return (
      <div className="container">
        <Questionaire
          question={questions[number]}
          number={number}
          onSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default App;
