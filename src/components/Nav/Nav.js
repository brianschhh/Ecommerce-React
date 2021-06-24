import React, { useState, useEffect } from "react";
import "./Nav.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import Icon from "../icon/icon"

function Nav() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios("https://fakestoreapi.com/products/categories").then((resp) => {
      setCategories(resp.data);
      console.log("cateories", resp.data);
    });
  }, []);
  return (
    <div className="Nav__container">
      <Link to="/">
        <Button
          size="Medium"
          color="black"
          inverted
          color="red"
          style={{marginTop:"5px" }}
        >
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
      <Icon/>
    </div>
  );
}

export default Nav;
