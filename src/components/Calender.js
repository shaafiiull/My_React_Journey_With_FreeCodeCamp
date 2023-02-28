import React, { Component } from "react";
import CurrentDate from "./CurrentDate";

class Calender extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>What date it is??</h3>
        <CurrentDate date={Date()}></CurrentDate>
      </div>
    );
  }
}

export default Calender;
