import axios from "axios";
import React, { useState, useEffect } from "react";
import "./WomenCloth.css";
import { Card, Image, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

function WomenCloth() {
  const [womencloth, setWomencloth] = useState([]);

  useEffect(() => {
    axios("https://fakestoreapi.com/products/category/women's%20clothing").then(
      (resp) => {
        setWomencloth(resp.data);
        console.log("WomenCloth", resp.data);
      }
    );
  }, []);

  return (
    <div className="itemList__container">
      <div className="itemlist__grid">
        {womencloth.map((wo) => {
          return (
            <div className="Item__container">
              <Card style={{ height: 450 }}>
                <div className="Container__img">
                  <Image src={wo.image} size="small" wrapped centered />
                </div>
                <Card.Content>
                  <Card.Header>{wo.title}</Card.Header>
                  <Card.Meta className="date">
                    <span className="date">
                      <span>$</span>
                      {wo.price}
                    </span>
                  </Card.Meta>
                  <Card.Content>
                    <Link to={`/detail/${wo.id}`}>
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

export default WomenCloth;
