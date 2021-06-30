import React, { useContext } from "react";
import "./Cart.css";
import { useCartContext } from "../../CartContex";
import { Button } from "semantic-ui-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import Error from "../../components/Error/Error";

const Cart = () => {
  const { cart, removeItem, clearCart } = useCartContext();
  console.log("cart en cart", cart);
  let Total = 0;
  return (
    <>
      <div>
        <div>
          <div className="container__TotalCLear">
            <Button
              size="Medium"
              inverted
              color="red"
              style={{ marginTop: "5px" }}
              onClick={clearCart}
            >
              Clear Cart
            </Button>
            <h4 className="h4__Style">Cart</h4>
            <span className="Total__Style">
              {cart.map((obj) => {
                Total = obj.item.price * obj.cantidad + Total;
              })}
              Total: $ {Total}
            </span>
          </div>

          {cart.length === 0 && <Error />}
        </div>
        {cart.map((item) => {
          return (
            <div className="Container__all">
              <div className="Container__Card">
                <img src={item.item.image} alt="" />
                <div className="style__text">{item.item.title}</div>
                <div className="style__text">x {item.cantidad} </div>
                <div className="style__text">
                  total : {item.cantidad * item.item.price}
                </div>
                <div className="Container__Icon">
                  <button
                    onClick={() => removeItem(item.item.id, item.cantidad)}
                  >
                    <FontAwesomeIcon icon={faTimesCircle} />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Cart;
