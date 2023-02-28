import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

class ParentComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>I am the parent component</h1>
        <ChildComponent></ChildComponent>
      </div>
    );
  }
}

export default ParentComponent;
