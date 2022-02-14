import React, { Component } from "react";
import "./css/questionaire.css";

class Questionaire extends Component {
  state = {};
  render() {
    const { question, number } = this.props;

    if (!question) return <div>We could show any questions!</div>;
    return (
      <div className="questionaire">
        <h3>{question.question}</h3>
        <input type="radio" id={number} name="number" value="HTML" />
        <label htmlFor="html">{question.a}</label>
        <br />
      </div>
    );
  }
}

export default Questionaire;
