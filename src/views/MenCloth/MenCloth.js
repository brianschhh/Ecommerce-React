import axios from "axios";
import React, { useState, useEffect } from "react";
import "./MenCloth.css";
import { Card, Image, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

function MenCloth() {
  const [mencloth, setMencloth] = useState([]);

  useEffect(() => {
    axios("https://fakestoreapi.com/products/category/men's%20clothing").then(
      (resp) => {
        setMencloth(resp.data);
        console.log("MenCloth", resp.data);
      }
    );
  }, []);

  return (
    <div className="itemList__container">
      <div className="itemlist__grid">
        {mencloth.map((men) => {
          return (
            <div className="Item__container">
              <Link to={`/detail/${men.id}`}>
                <Card>
                  <Image src={men.image} size="small" wrapped centered />
                  <Card.Content>
                    <Card.Header>{men.title}</Card.Header>
                    <Card.Meta className="date">
                      <span className="date">
                        <span>$</span>
                        {men.price}
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

export default MenCloth;
