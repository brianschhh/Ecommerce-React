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
              <Card style={{ height: 450 }}>
                <div className="Container__img">
                  <Image src={men.image} size="small" wrapped centered />
                </div>
                <Card.Content>
                  <Card.Header>{men.title}</Card.Header>
                  <Card.Meta className="date">
                    <span className="date">
                      <span>us$ </span>
                      {men.price}
                    </span>
                  </Card.Meta>
                  <Card.Content>
                    <Link to={`/detail/${men.id}`}>
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

export default MenCloth;
