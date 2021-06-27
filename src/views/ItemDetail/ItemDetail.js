import React, { useEffect, useState } from "react";
import { Card, Image } from "semantic-ui-react";
import axios from "axios";
import "./ItemDetail.css";
import Counter from "../../components/Counter/Counter";

function ItemDetail({ match }) {
  const onAdd = (counter) => {
    console.log("agregar al carrito", counter);
  };
  //console.log("matchhhh", match);
  let itemID = match.params.id;

  const [items, setItems] = useState([]);

  //console.log("info", items);

  useEffect(() => {
    axios(`https://fakestoreapi.com/products/${itemID}`).then((res) =>
      setItems(res.data)
    );
  }, [itemID]);

  return (
    <div className="Item__container">
      <Card>
        <Image src={items.image} size="big" wrapped centered />
        <Card.Content>
          <Card.Header>{items.title}</Card.Header>
          <Card.Description>{items.description}</Card.Description>
          <Card.Meta>
            <span className="date">
              <span>$</span>
              {items.price}
            </span>
          </Card.Meta>
        </Card.Content>
        <Counter min={1} max={5} onAdd={onAdd} />
      </Card>
    </div>
  );
}

export default ItemDetail;
