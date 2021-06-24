import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

class Icon extends Component {
  render() {
    return (
      <div
        style={{ fontSize: "2em", color:"rgb(131, 37, 37)", marginRight:"20px", marginTop:"10px" }}
      >
        <FontAwesomeIcon icon={faShoppingCart} />
      </div>
    );
  }
}

export default Icon;
