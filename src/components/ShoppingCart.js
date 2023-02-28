import React, { Component } from "react";
import Items from "./Items";

class ShoppingCart extends Component {
  render() {
    return (
      <div>
        <Items quantity={20}></Items>
      </div>
    );
  }
}

export default ShoppingCart;
