import axios from "axios";
import React, { useState, useEffect } from "react";
import "./MenCloth.css";
import { Card, Image, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../CartContex";
import Spinner from "../../components/Spinner/Spinner";

function MenCloth() {
  const { isDarkMode } = useCartContext();
  const [mencloth, setMencloth] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://fakestoreapi.com/products/category/men's%20clothing"
      );
      setMencloth(result.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div>
      {isDarkMode ? (
        <div
          style={{ backgroundColor: "black", height: "700px" }}
          className="itemList__container"
        >
          <div className="itemlist__grid">
            {isLoading ? <Spinner /> : null}
            {mencloth.map((mc) => {
              return (
                <div className="Item__container">
                  <Card style={{ height: 450 }}>
                    <div
                      style={{ backgroundColor: "black" }}
                      className="Container__img"
                    >
                      <Image src={mc.image} size="small" wrapped centered />
                    </div>
                    <Card.Content style={{ backgroundColor: "black" }}>
                      <Card.Header
                        style={{ backgroundColor: "black" }}
                        style={{ color: "white" }}
                      >
                        {mc.title}
                      </Card.Header>
                      <Card.Meta className="date">
                        <span style={{ color: "white" }} className="date">
                          <span style={{ color: "white" }}>us$ </span>
                          {mc.price}
                        </span>
                      </Card.Meta>
                      <Card.Content>
                        <Link to={`/detail/${mc.id}`}>
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
            {mencloth.map((mc) => {
              return (
                <div className="Item__container">
                  <Card style={{ height: 450 }}>
                    <div className="Container__img">
                      <Image src={mc.image} size="small" wrapped centered />
                    </div>
                    <Card.Content>
                      <Card.Header>{mc.title}</Card.Header>
                      <Card.Meta className="date">
                        <span className="date">
                          <span>us$ </span>
                          {mc.price}
                        </span>
                      </Card.Meta>
                      <Card.Content>
                        <Link to={`/detail/${mc.id}`}>
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

export default MenCloth;
