import React from "react";
import PropTypes from "prop-types";

const Items = (props) => {
  return (
    <div>
      <h1>Current quantity of items in cart: {props.quantity}</h1>
    </div>
  );
};

Items.defaultProps = {
  quantity: 0,
};

Items.propTypes = {
  quantity: PropTypes.number.isRequired,
};
export default Items;
