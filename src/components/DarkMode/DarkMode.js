import React, { useState, useContext, useEffect } from "react";
import DarkModeToggle from "react-dark-mode-toggle";
import { CartContext } from "../../CartContex";

function DarkMode() {
  const myContext = useContext(CartContext);
  const [isDarkMode, setIsDarkMode] = useState(() => false);
  const Change = () => {
    myContext.changeState(isDarkMode);
  };
  useEffect(() => {
    Change();
  });

  return (
    <DarkModeToggle onChange={setIsDarkMode} checked={isDarkMode} size={80} />
  );
}

export default DarkMode;
