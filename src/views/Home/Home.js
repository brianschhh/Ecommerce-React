import React from "react";
import ItemList from "../../components/ItemList/ItemList";
import { useCartContext } from "../../CartContex";

function Home() {
  const { isDarkMode } = useCartContext();

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
