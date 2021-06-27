import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Electronics.css";
import { Card, Image, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

function Electronics() {
  const [electro, setElectro] = useState([]);

  useEffect(() => {
    axios("https://fakestoreapi.com/products/category/electronics").then(
      (resp2) => {
        setElectro(resp2.data);
        console.log("electroniccccccccc", resp2.data);
      }
    );
  }, []);

  return (
    <div className="itemList__container">
      <div className="itemlist__grid">
        {electro.map((el) => {
          return (
            <div className="Item__container">
              <Link to={`/detail/${el.id}`}>
                <Card>
                  <Image src={el.image} size="small" wrapped centered />
                  <Card.Content>
                    <Card.Header>{el.title}</Card.Header>
                    <Card.Meta className="date">
                      <span className="date">
                        <span>$</span>
                        {el.price}
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

export default Electronics;
