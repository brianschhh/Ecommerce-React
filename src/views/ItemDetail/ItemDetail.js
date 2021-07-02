import React, { useEffect, useState } from "react";
import { Card, Image, Button } from "semantic-ui-react";
import axios from "axios";
import "./ItemDetail.css";
import Counter from "../../components/Counter/Counter";
import Spinner from "../../components/Spinner/Spinner";
import { useCartContext } from "../../CartContex";

function ItemDetail({ match }) {
  let itemID = match.params.id;
  const { isDarkMode } = useCartContext();
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //console.log("info", items);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`https://fakestoreapi.com/products/${itemID}`);
      setItems(result.data);
      setIsLoading(false);
    };
    fetchData();
  }, [itemID]);

  console.log("items", items);

  return (
    <div>
      {isDarkMode ? (
        <div
          style={{
            backgroundColor: "black",
            height: "1200px",
          }}
        >
          <div className="Item__container__DarkDetail ">
            {isLoading ? <Spinner /> : null}
            <Card
              style={{
                width: 400,
                boxShadow: "0 5px 40px rgba(158, 0, 0, 0.5)",
              }}
            >
              {" "}
              <Image src={items.image} size="big" wrapped centered />
              <Card.Content style={{ backgroundColor: "black" }}>
                <Card.Header style={{ color: "white" }}>
                  {items.title}
                </Card.Header>
                <Card.Description style={{ color: "white" }}>
                  {items.description}
                </Card.Description>
                <Card.Meta className="container__Date">
                  <span style={{ color: "white" }} className="date">
                    <span style={{ color: "white" }}>us$ </span>
                    {items.price}
                  </span>
                </Card.Meta>
              </Card.Content>
              <Counter min={1} max={5} item={items} />
            </Card>
          </div>
        </div>
      ) : (
        <div className="Item__container__detail">
          <div className="card__style">
            {isLoading ? <Spinner /> : null}
            <Card
              style={{
                width: 400,
                boxShadow: "0 5px 40px rgba(0, 0, 0, 0.5)",
              }}
            >
              <Image src={items.image} size="big" wrapped centered />
              <Card.Content>
                <Card.Header>{items.title}</Card.Header>
                <Card.Description>{items.description}</Card.Description>
                <Card.Meta className="container__Date">
                  <span className="date">
                    <span>us$ </span>
                    {items.price}
                  </span>
                </Card.Meta>
              </Card.Content>
              <Counter min={1} max={5} item={items} />
            </Card>
          </div>
        </div>
      )}
    </div>
  );
}

export default ItemDetail;
