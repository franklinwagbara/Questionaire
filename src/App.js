import React, { Component } from "react";
import "./App.css";
import Questionaire from "./components/questionaire";
import { getQuestions } from "./questions";

class App extends Component {
  state = { questions: [], number: 1 };

  componentDidMount = () => {
    const questions = getQuestions();
    this.setState({ questions });
    document.body.style.backgroundColor = "#DBD5E7";
  };
  render() {
    const { questions, number } = this.state;
    return (
      <div className="container">
        <Questionaire question={questions[number]} number={number} />
      </div>
    );
  }
}

export default App;
