import React, { useState, useContext } from "react";
import DarkModeToggle from "react-dark-mode-toggle";
import { CartContext } from "../../CartContex";

function DarkMode() {
  const myContext = useContext(CartContext);
  const [isDarkMode, setIsDarkMode] = useState(() => false);
  console.log("isDarkMode", isDarkMode);
  const Change = () => {
    myContext.changeState(isDarkMode);
  };
  Change();
  return (
    <DarkModeToggle onChange={setIsDarkMode} checked={isDarkMode} size={80} />
  );
}

export default DarkMode;
