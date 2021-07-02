import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Jewelery.css";
import { Card, Image, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../CartContex";
import Spinner from "../../components/Spinner/Spinner";

function Jewelery() {
  const { isDarkMode } = useCartContext();
  const [jewel, setJewel] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://fakestoreapi.com/products/category/jewelery"
      );
      setJewel(result.data);
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
            {jewel.map((jel) => {
              return (
                <div className="Item__container">
                  <Card style={{ height: 450 }}>
                    <div
                      style={{ backgroundColor: "black" }}
                      className="Container__img"
                    >
                      <Image src={jel.image} size="small" wrapped centered />
                    </div>
                    <Card.Content style={{ backgroundColor: "black" }}>
                      <Card.Header
                        style={{ backgroundColor: "black" }}
                        style={{ color: "white" }}
                      >
                        {jel.title}
                      </Card.Header>
                      <Card.Meta className="date">
                        <span style={{ color: "white" }} className="date">
                          <span style={{ color: "white" }}>us$ </span>
                          {jel.price}
                        </span>
                      </Card.Meta>
                      <Card.Content>
                        <Link to={`/detail/${jel.id}`}>
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
            {jewel.map((jew) => {
              return (
                <div className="Item__container">
                  <Card style={{ height: 450 }}>
                    <div className="Container__img">
                      <Image src={jew.image} size="small" wrapped centered />
                    </div>
                    <Card.Content>
                      <Card.Header>{jew.title}</Card.Header>
                      <Card.Meta className="date">
                        <span className="date">
                          <span>us$ </span>
                          {jew.price}
                        </span>
                      </Card.Meta>
                      <Card.Content>
                        <Link to={`/detail/${jew.id}`}>
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

export default Jewelery;
