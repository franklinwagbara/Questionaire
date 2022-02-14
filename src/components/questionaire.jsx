import React, { Component } from "react";
import "./css/questionaire.css";

class Questionaire extends Component {
  state = { correct: 0, selected: null };

  handleChange = (e) => {
    const correct = e.target.value === this.props.question.answer ? 1 : 0;
    this.setState({ correct: correct, selected: e.target.value });
  };

  handleSubmit = () => {
    if (!this.state.selected) {
      alert("You must select and option!");
      return;
    }
    this.setState({ selected: null });
    this.props.onSubmit(this.state.correct);
  };

  render() {
    const { question, number, onSubmit } = this.props;

    if (!question) return <div>We could not show any questions!</div>;

    return (
      <div className="questionaire">
        <h3>{question.question}</h3>
        <ul>
          <li>
            <input
              type="radio"
              id="a"
              name="answer"
              value={"a"}
              checked={this.state.selected === "a"}
              onChange={this.handleChange}
            />
            <label id="a" htmlFor="a">
              {question.a}
            </label>
          </li>
          <li>
            <input
              type="radio"
              id="b"
              name="answer"
              value={"b"}
              checked={this.state.selected === "b"}
              onChange={this.handleChange}
            />
            <label id="b" htmlFor="b">
              {question.b}
            </label>
          </li>
          <li>
            <input
              type="radio"
              id="c"
              name="answer"
              value={"c"}
              checked={this.state.selected === "c"}
              onChange={this.handleChange}
            />
            <label id="c" htmlFor="c">
              {question.c}
            </label>
          </li>
          <li>
            <input
              type="radio"
              id="d"
              name="answer"
              value={"d"}
              checked={this.state.selected === "d"}
              onChange={this.handleChange}
            />
            <label id="d" htmlFor="d">
              {question.d}
            </label>
          </li>
        </ul>
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}

export default Questionaire;
