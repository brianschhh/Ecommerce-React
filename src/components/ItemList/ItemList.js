import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ItemList.css";
import Item from "../Item/Item";
import Spinner from "../Spinner/Spinner";

function ItemList() {
  const [item, setItem] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://fakestoreapi.com/products");
      setItem(result.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className="itemList__container">
      <div className="itemlist__grid">
        {isLoading ? <Spinner /> : null}
        {item.map((it) => {
          return <Item item={it} key={it.id} />;
        })}
      </div>
    </div>
  );
}

export default ItemList;
