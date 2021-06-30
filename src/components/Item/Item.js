import React from "react";
import { Card, Image, Button } from "semantic-ui-react";
import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ item }) => (
  <div className="Item__container">
    <Card style={{ height: 450 }}>
      <div className="Container__img">
        <Image src={item.image} size="small" wrapped centered />
      </div>
      <Card.Content>
        <Card.Header>{item.title}</Card.Header>
        <Card.Meta className="date">
          <span className="date">
            <span>us$ </span>
            {item.price}
          </span>
        </Card.Meta>
        <Card.Content>
          <Link to={`/detail/${item.id}`}>
            <Button size="medium" inverted color="red">
              Details
            </Button>
          </Link>
        </Card.Content>
      </Card.Content>
    </Card>
  </div>
);

export default Item;
