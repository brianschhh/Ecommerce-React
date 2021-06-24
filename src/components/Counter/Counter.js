import React, { useState } from "react";
import { Button } from "semantic-ui-react";
import "./Counter.css";

function Counter() {
  let min = 1;
  let max = 10;
  const [counter, setCounter] = useState(min);

  function counterUp() {
    const newValue = counter + 1;
    if (newValue <= max) {
      setCounter(newValue);
    }
  }

  function counterDown() {
    const newValue = counter - 1;
    if (newValue >= min) {
      setCounter(newValue);
    }
  }

  return (
    <div>
      <div className="SectionCounter">
        <Button primary onClick={counterDown}>
          -
        </Button>
        <span className="span"> {counter} </span>
        <Button primary onClick={counterUp}>
          +
        </Button>
      </div>
    </div>
  );
}

export default Counter;
