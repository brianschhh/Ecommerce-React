import "./Nav.css";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import Icon from "../icon/icon";
import { useCartContext } from "../../CartContex";
import DarkMode from "../DarkMode/DarkMode";

function Nav() {
  const { cantItems } = useCartContext();
  return (
    <div className="Nav__container">
      <Link to="/">
        <Button
          size="Medium"
          inverted
          color="white"
          style={{ marginTop: "5px" }}
        >
          Home
        </Button>
      </Link>
      <div className="DarkMode__Style">
        <DarkMode />
      </div>
      <ul>
        <li></li>
        <li>
          <Link className="Link__Style" to="/electronics">
            Electronic
          </Link>
        </li>
        <li>
          <Link className="Link__Style" to="/jewelery">
            Jewelery
          </Link>
        </li>
        <li>
          <Link className="Link__Style" to="/MenCloth">
            Men-Cloth
          </Link>
        </li>
        <li>
          <Link className="Link__Style" to="/womencloth">
            Women-Cloth
          </Link>
        </li>
      </ul>
      {cantItems !== 0 ? <Icon /> : null}
    </div>
  );
}

export default Nav;
