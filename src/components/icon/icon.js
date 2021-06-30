import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

class Icon extends Component {
  render() {
    return (
      <Link to="/cart">
        <div
          style={{
            fontSize: "2em",
            color: "rgb(224, 7, 7)",
            marginRight: "20px",
            marginTop: "10px",
          }}
        >
          <FontAwesomeIcon icon={faShoppingCart} />
        </div>
      </Link>
    );
  }
}

export default Icon;
