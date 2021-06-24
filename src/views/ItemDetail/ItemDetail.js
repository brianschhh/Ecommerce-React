import React, { useEffect, useState } from "react";
import { Card, Image, Button } from "semantic-ui-react";
import axios from "axios";
import "./ItemDetail.css";

function ItemDetail({ match }) {
  console.log("matchhhh", match);
  let itemID = match.params.id;

  const [items, setItems] = useState([]);
  console.log("info", items);

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
        <Button
          size="Medium"
          color="black"
          inverted
          color="red"
        >
          BUY
        </Button>
      </Card>
    </div>
  );
}

export default ItemDetail;
