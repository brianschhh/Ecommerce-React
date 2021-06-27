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
              <Link to={`/detail/${je.id}`}>
                <Card>
                  <Image src={je.image} size="small" wrapped centered />
                  <Card.Content>
                    <Card.Header>{je.title}</Card.Header>
                    <Card.Meta className="date">
                      <span className="date">
                        <span>$</span>
                        {je.price}
                      </span>
                    </Card.Meta>
                    <Card.Content>
                      <Button size="Medium" inverted color="red">
                        Details
                      </Button>
                    </Card.Content>
                  </Card.Content>
                </Card>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Jewelery;
