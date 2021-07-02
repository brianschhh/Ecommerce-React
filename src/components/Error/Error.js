import React from "react";
import "./Error.css";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="Error__style">
      <div className="Button__container">
        <Link to="/">
          <Button size="big" color="black" style={{ marginTop: "5px" }}>
            the cart is empty, go shopping
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Error;
