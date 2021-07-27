import React, { useEffect, useState } from "react";
import { Card, Image } from "semantic-ui-react";
import "./ItemDetail.css";
import Counter from "../../components/Counter/Counter";
import Spinner from "../../components/Spinner/Spinner";
import { useCartContext } from "../../CartContex";
import { db } from "../../Firebase";

function ItemDetail({ match }) {
  let itemID = match.params.id;

  const { isDarkMode } = useCartContext();
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const docs = [];

    db.collection("items")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id });
          const filteredItem = docs.filter((x) => x.id === itemID);
          setItems(filteredItem);
        });
        setIsLoading(false);
      });
  }, [itemID]);

  return (
    <div>
      {isDarkMode ? (
        <div>
          {isLoading ? <Spinner /> : null}
          {items.map((item) => {
            return (
              <div
                key={item.id}
                style={{
                  backgroundColor: "black",
                  height: "1200px",
                }}
              >
                <div className="Item__container__DarkDetail ">
                  <Card
                    style={{
                      width: 400,
                      boxShadow: "0 5px 40px rgba(158, 0, 0, 0.5)",
                    }}
                  >
                    {" "}
                    <Image src={item.image} size="small" wrapped centered />
                    <Card.Content style={{ backgroundColor: "black" }}>
                      <Card.Header style={{ color: "white" }}>
                        {item.title}
                      </Card.Header>
                      <Card.Description style={{ color: "white" }}>
                        {item.description}
                      </Card.Description>
                      <Card.Meta className="container__Date">
                        <span style={{ color: "white" }} className="date">
                          <span style={{ color: "white" }}>us$ </span>
                          {item.price}
                        </span>
                      </Card.Meta>
                    </Card.Content>
                    <Counter min={1} max={5} item={item} />
                  </Card>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div>
          {isLoading ? <Spinner /> : null}
          {items.map((item) => {
            return (
              <div className="Item__container__detail" key={item.id}>
                <div className="card__style">
                  <Card
                    style={{
                      width: 400,
                      boxShadow: "0 5px 40px rgba(0, 0, 0, 0.5)",
                    }}
                  >
                    <Image src={item.image} size="small" wrapped centered />
                    <Card.Content>
                      <Card.Header>{item.title}</Card.Header>
                      <Card.Description>{item.description}</Card.Description>
                      <Card.Meta className="container__Date">
                        <span className="date">
                          <span>us$ </span>
                          {item.price}
                        </span>
                      </Card.Meta>
                    </Card.Content>
                    <Counter min={1} max={5} item={item} />
                  </Card>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default ItemDetail;
