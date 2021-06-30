import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ItemList.css";
import Item from "../Item/Item";

function ItemList() {
  const [item, setItem] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setItem(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <div className="itemList__container">
      <div className="itemlist__grid">
        {item.map((it) => {
          return <Item item={it} key={it.id} />;
        })}
      </div>
    </div>
  );
}

export default ItemList;
