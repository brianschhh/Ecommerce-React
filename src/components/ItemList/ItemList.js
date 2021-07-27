import React, { useState, useEffect } from "react";
import "./ItemList.css";
import Item from "../Item/Item";
import Spinner from "../Spinner/Spinner";
import { db } from "../../Firebase";

function ItemList() {
  const [item, setItem] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const docs = [];
    db.collection("items")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id });
        });
        setItem(docs);
        setIsLoading(false);
      });
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
