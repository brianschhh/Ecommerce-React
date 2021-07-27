import "./Cart.css";
import { useCartContext } from "../../CartContex";
import { Button } from "semantic-ui-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import Error from "../../components/Error/Error";
import FormCart from "../../components/Form/Form";

const Cart = () => {
  const { cart, removeItem, clearCart, isDarkMode } = useCartContext();
  let Total = 0;

  return (
    <div>
      {isDarkMode ? (
        <div style={{ height: "800px", backgroundColor: "black" }}>
          <div>
            <div className="container__h4 backGround__Img__Black ">
              <h4 className="h4__Style">Cart</h4>
            </div>
            <Button
              size="Medium"
              color="black"
              style={{
                marginTop: "5px",
              }}
              onClick={clearCart}
            >
              Clear Cart
            </Button>
            {cart.length === 0 && <Error />}
          </div>

          <div style={{ backgroundColor: "black" }} className="grid__Cart">
            <div>
              {cart.map((item) => {
                return (
                  <div
                    key={item.id}
                    style={{ backgroundColor: "black" }}
                    className="Container__all__Black"
                  >
                    <div className="Container__Card">
                      <img src={item.item.image} alt="" />
                      <div className="style__text_black">{item.item.title}</div>
                      <div className="style__text_black">
                        x {item.cantidad}{" "}
                      </div>
                      <div className="style__text_black">
                        total: us$ {item.cantidad * item.item.price}
                      </div>
                      <div className="Container__Icon">
                        <button
                          style={{ cursor: "pointer" }}
                          onClick={() =>
                            removeItem(item.item.id, item.cantidad)
                          }
                        >
                          <FontAwesomeIcon icon={faTimesCircle} />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div>{cart.length !== 0 && <FormCart />}</div>
          </div>
          <div style={{ backgroundColor: "black" }} className="container__">
            {cart.length !== 0 && (
              <div className="Total__Style">
                <span style={{ color: "white" }} className="Total_Style_Black">
                  {cart.forEach((obj) => {
                    Total = obj.item.price * obj.cantidad + Total;
                  })}
                  Total: us$ {Total.toFixed(2)}
                </span>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div>
          <div className="backGround__Img">
            <div className="container__h4">
              <h4 className="h4__Style">Cart</h4>
            </div>
            <Button
              size="Medium"
              color="black"
              style={{
                marginTop: "5px",
              }}
              onClick={clearCart}
            >
              Clear Cart
            </Button>
            {cart.length === 0 && <Error />}
          </div>

          <div className="grid__Cart">
            <div>
              {cart.map((item) => {
                return (
                  <div className="Container__all" key={item.id}>
                    <div className="Container__Card">
                      <img src={item.item.image} alt="" />
                      <div className="style__text">{item.item.title}</div>
                      <div className="style__text">x {item.cantidad} </div>
                      <div className="style__text">
                        total: us$ {item.cantidad * item.item.price}
                      </div>
                      <div className="Container__Icon">
                        <button
                          style={{ cursor: "pointer" }}
                          onClick={() =>
                            removeItem(item.item.id, item.cantidad)
                          }
                        >
                          <FontAwesomeIcon icon={faTimesCircle} />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div>
              <div>{cart.length !== 0 && <FormCart />}</div>
            </div>
          </div>
          <div className="container__">
            {cart.length !== 0 && (
              <div className="Total__Style">
                <span>
                  {cart.forEach((obj) => {
                    Total = obj.item.price * obj.cantidad + Total;
                  })}
                  Total: us$ {Total.toFixed(2)}
                </span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
