import React, { useState } from "react";
import { Button } from "semantic-ui-react";
import "./Counter.css";
import { Link } from "react-router-dom";

function Counter({ min, max, onAdd }) {
  const [counter, setCounter] = useState(parseInt(min));

  const counterUp = () => {
    setCounter(counter + 1);
  };

  const counterDown = () => {
    setCounter(counter - 1);
  };

  return (
    <div>
      <div className="SectionCounter">
        <Button primary disabled={counter <= 1} onClick={counterDown}>
          -
        </Button>
        <span className="span"> {counter} </span>
        <Button primary onClick={counterUp} disabled={counter >= max}>
          +
        </Button>
        <Link to="/cart">
          <Button
            size="Medium"
            inverted
            color="red"
            onClick={() => onAdd(counter)}
          >
            Add to Cart
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Counter;
