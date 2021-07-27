import React, { useState, useEffect } from "react";
import "./WomenCloth.css";
import { Card, Image, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../CartContex";
import Spinner from "../../components/Spinner/Spinner";
import { db } from "../../Firebase";

function WomenCloth() {
  const { isDarkMode } = useCartContext();
  const [womencloth, setWomencloth] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const docs = [];

    db.collection("items")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          docs.push({
            ...doc.data(),
            id: doc.id,
            category: doc.data().category,
          });
          const filteredItem = docs.filter((x) => x.category === "Women-Cloth");
          setWomencloth(filteredItem);
        });
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      {isDarkMode ? (
        <div
          style={{ backgroundColor: "black" }}
          className="itemList__container"
        >
          <div className="itemlist__grid">
            {isLoading ? <Spinner /> : null}
            {womencloth.map((wc) => {
              return (
                <div className="Item__container__Dark" key={wc.id}>
                  <Card style={{ height: 450, width: 350 }}>
                    <div
                      style={{ backgroundColor: "black" }}
                      className="Container__img"
                    >
                      <Image src={wc.image} size="small" wrapped centered />
                    </div>
                    <Card.Content style={{ backgroundColor: "black" }}>
                      <Card.Header
                        style={{ backgroundColor: "black", color: "white" }}
                      >
                        {wc.title}
                      </Card.Header>
                      <Card.Meta className="date">
                        <span style={{ color: "white" }} className="date">
                          <span style={{ color: "white" }}>us$ </span>
                          {wc.price}
                        </span>
                      </Card.Meta>
                      <Card.Content>
                        <Link to={`/detail/${wc.id}`}>
                          <Button size="Medium" color="black">
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
      ) : (
        <div className="itemList__container">
          <div className="itemlist__grid">
            {isLoading ? <Spinner /> : null}
            {womencloth.map((wc) => {
              return (
                <div className="Item__container" key={wc.id}>
                  <Card style={{ height: 450, width: 350 }}>
                    <div className="Container__img">
                      <Image src={wc.image} size="small" wrapped centered />
                    </div>
                    <Card.Content>
                      <Card.Header>{wc.title}</Card.Header>
                      <Card.Meta className="date">
                        <span className="date">
                          <span>us$ </span>
                          {wc.price}
                        </span>
                      </Card.Meta>
                      <Card.Content>
                        <Link to={`/detail/${wc.id}`}>
                          <Button size="Medium" color="black">
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
      )}
    </div>
  );
}

export default WomenCloth;
