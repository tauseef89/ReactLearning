import React, { useState } from "react";
import Products from "./page/products";
// create a function which will create table of input value
function App() {
  const [inp, setInp] = useState(0);
  const handelChange = (e) => {
    setInp(e.target.value);
  };

  return (
    <>
      {/* <input type="text" value={inp} onChange={handelChange} />
      {inp >= 18 ? <div>you are adult</div> : <div>you are not atult</div>} */}
      <Products />
    </>
  );
}

export default App;
