import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Jewelery.css";
import { Card, Image, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

function Jewelery() {
  const [jewel, setJewel] = useState([]);

  useEffect(() => {
    axios("https://fakestoreapi.com/products/category/jewelery").then(
      (resp) => {
        setJewel(resp.data);
        console.log("jewelery", resp.data);
      }
    );
  }, []);

  return (
    <div className="itemList__container">
      <div className="itemlist__grid">
        {jewel.map((je) => {
          return (
            <div className="Item__container">
              <Card style={{ height: 450 }}>
                <div className="Container__img">
                  <Image src={je.image} size="small" wrapped centered />
                </div>
                <Card.Content>
                  <Card.Header>{je.title}</Card.Header>
                  <Card.Meta className="date">
                    <span className="date">
                      <span>$</span>
                      {je.price}
                    </span>
                  </Card.Meta>
                  <Card.Content>
                    <Link to={`/detail/${je.id}`}>
                      <Button size="Medium" inverted color="red">
                        Details
                      </Button>
                    </Link>
                  </Card.Content>
                </Card.Content>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Jewelery;
