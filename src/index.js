import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "font-awesome/css/font-awesome.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// // setInterval(tick, 1000);

// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { date: new Date() };
//   }

//   componentDidMount() {
//     this.timerId = setInterval(() => this.tick(), 100);
//   }

//   componentWillUnmount() {
//     clearInterval(this.timerId);
//   }

//   tick() {
//     this.setState((this.state = { date: new Date() }));
//   }
//   render() {
//     return (
//       <div>
//         <h1>Time: {this.state.date.toLocaleTimeString()}</h1>
//       </div>
//     );
//   }
// }

// export default Clock;

// reactDom.render(
//   <React.StrictMode>
//     <Clock />
//     <Game />
//   </React.StrictMode>,
//   document.getElementById("root")
// );
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
