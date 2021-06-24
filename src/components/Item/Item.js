import React from "react";
import { Card, Image, Button } from "semantic-ui-react";
import "./Item.css";

const Item = ({ item }) => (
  <div className="Item__container">
    <Card>
      <Image src={item.image} size="small" wrapped centered />
      <Card.Content>
        <Card.Header>{item.title}</Card.Header>
        <Card.Meta>
          <span className="date">
            <span>$</span>
            {item.price}
          </span>
        </Card.Meta>
        <Card.Content >
          <Button size="Medium" color="black" inverted color="red">
            Details
          </Button>
        </Card.Content>
      </Card.Content>
    </Card>
  </div>
);

export default Item;
