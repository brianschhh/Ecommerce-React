import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./icon.css";
import { useCartContext } from "../../CartContex";

function Icon() {
  const { cantItems } = useCartContext();

  return (
    <div className="Icon__Cont">
      <Link className="Icon__Styles" to="/cart">
        <FontAwesomeIcon icon={faShoppingCart} />
      </Link>
      <div className="Amount__container">
        <span> {cantItems}</span>
      </div>
    </div>
  );
}

export default Icon;
