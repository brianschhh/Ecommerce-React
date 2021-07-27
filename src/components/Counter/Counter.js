import React, { useState, useContext } from "react";
import { Button } from "semantic-ui-react";
import "./Counter.css";
import { Link } from "react-router-dom";
import { CartContext } from "../../CartContex";
import { useCartContext } from "../../CartContex";

function Counter({ min, max, item }) {
  const [counter, setCounter] = useState(parseInt(min));
  const myContext = useContext(CartContext);
  const { isDarkMode } = useCartContext();

  const onAdd = (counter) => {
    myContext.addItem({ item, cantidad: counter });
  };

  const counterUp = () => {
    setCounter(counter + 1);
  };

  const counterDown = () => {
    setCounter(counter - 1);
  };

  return (
    <div>
      {isDarkMode ? (
        <div>
          <div style={{ backgroundColor: "black" }} className="SectionCounter">
            <Button color="white" disabled={counter <= 1} onClick={counterDown}>
              -
            </Button>
            <span style={{ color: "white" }} className="span">
              {" "}
              {counter}{" "}
            </span>
            <Button color="white" onClick={counterUp} disabled={counter >= max}>
              +
            </Button>

            <Link to="/cart">
              <Button
                size="Medium"
                color="white"
                onClick={() => onAdd(counter)}
              >
                Add to Cart
              </Button>
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <div className="SectionCounter">
            <Button color="black" disabled={counter <= 1} onClick={counterDown}>
              -
            </Button>
            <span className="span"> {counter} </span>
            <Button color="black" onClick={counterUp} disabled={counter >= max}>
              +
            </Button>

            <Link to="/cart">
              <Button
                size="Medium"
                color="black"
                onClick={() => onAdd(counter)}
              >
                Add to Cart
              </Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Counter;
