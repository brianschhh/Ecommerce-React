import React from "react";
import ItemList from "../../components/ItemList/ItemList";
import { useCartContext } from "../../CartContex";
import { db } from "../../Firebase";

function Home() {
  const { isDarkMode } = useCartContext();

  db.collection("BocaShop")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(doc.data());
      });
    });

  return (
    <div>
      {isDarkMode ? (
        <div style={{ backgroundColor: "black" }}>
          <ItemList />
        </div>
      ) : (
        <div>
          <ItemList />
        </div>
      )}
    </div>
  );
}

export default Home;
