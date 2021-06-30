import React, { useEffect, useState } from "react";
import { Card, Image, Button } from "semantic-ui-react";
import axios from "axios";
import "./ItemDetail.css";
import Counter from "../../components/Counter/Counter";

function ItemDetail({ match }) {
  let itemID = match.params.id;

  const [items, setItems] = useState([]);

  //console.log("info", items);

  useEffect(() => {
    axios(`https://fakestoreapi.com/products/${itemID}`).then((res) =>
      setItems(res.data)
    );
  }, [itemID]);
  console.log("items", items);

  return (
    <div className="Item__container__detail">
      <div className="card__style">
        <Card>
          <Image src={items.image} size="big" wrapped centered />
          <Card.Content>
            <Card.Header>{items.title}</Card.Header>
            <Card.Description>{items.description}</Card.Description>
            <Card.Meta className="container__Date">
              <span className="date">
                <span>$</span>
                {items.price}
              </span>
            </Card.Meta>
          </Card.Content>
          <Counter min={1} max={5} item={items} />
        </Card>
      </div>
    </div>
  );
}

export default ItemDetail;
