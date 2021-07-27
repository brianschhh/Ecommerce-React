import React from "react";
import { Card, Image, Button } from "semantic-ui-react";
import "./Item.css";
import { Link } from "react-router-dom";
import { useCartContext } from "../../CartContex";

function Item({ item }) {
  const { isDarkMode } = useCartContext();
  return (
    <div>
      {isDarkMode ? (
        <div className="Item__container__Dark">
          <Card style={{ height: 450, width: 350 }}>
            <div
              style={{ backgroundColor: "black" }}
              className="Container__img"
            >
              <Image src={item.image} size="small" wrapped centered />
            </div>
            <Card.Content style={{ backgroundColor: "black" }}>
              <Card.Header style={{ backgroundColor: "black", color: "white" }}>
                {item.title}
              </Card.Header>
              <Card.Meta className="date">
                <span style={{ color: "white" }} className="date">
                  <span style={{ color: "white" }}>us$ </span>
                  {item.price}
                </span>
              </Card.Meta>
              <Card.Content>
                <Link to={`/detail/${item.id}`}>
                  <Button size="medium" color="black">
                    Details
                  </Button>
                </Link>
              </Card.Content>
            </Card.Content>
          </Card>
        </div>
      ) : (
        <div className="Item__container">
          <Card style={{ height: 450, width: 350 }}>
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
                  <Button size="medium" color="black">
                    Details
                  </Button>
                </Link>
              </Card.Content>
            </Card.Content>
          </Card>
        </div>
      )}
    </div>
  );
}

export default Item;
