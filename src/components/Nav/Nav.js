import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import Icon from "../icon/icon";

function Nav() {
  return (
    <div className="Nav__container">
      <Link to="/">
        <Button size="Medium" inverted color="red" style={{ marginTop: "5px" }}>
          home
        </Button>
      </Link>
      <ul>
        <li>
          <Link className="Link__Style" to="/electronics">
            electronic
          </Link>
        </li>
        <li>
          <Link className="Link__Style" to="/jewelery">
            jewelery
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
      <Icon />
    </div>
  );
}

export default Nav;
