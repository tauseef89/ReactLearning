import React, { useState } from "react";
const Home = () => {
  const [color, setColor] = useState("red");
  const colorValue = "green";
  const handleClick = () => {
    setColor(colorValue);
  };
  const handleChange = (e) => {
    setColor(e?.target?.value);
  };
  return (
    <>
      <input type="color" onChange={handleChange} />
      <button onClick={handleClick}>Change Color</button>
      <h1 style={{ color: color }}>Color state learning</h1>
    </>
  );
};

export default Home;
