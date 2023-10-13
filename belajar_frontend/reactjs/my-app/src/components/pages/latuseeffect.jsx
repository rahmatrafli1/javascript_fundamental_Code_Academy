import React, { useEffect, useState } from "react";

const Latuseeffect = () => {
  // eslint-disable-next-line
  const [counter, setCounter] = useState(0);
  const [status, setStatus] = useState(true);
  //   const increment = () => {
  // };
  useEffect(() => {
    // setTimeout(() => {
    //   setCounter(counter + 1);
    // }, 1000);
    console.log("Hello");
  }, [counter]);
  return (
    <div>
      <h2>Counter: {counter}</h2>
      <button onClick={() => setStatus(!status)}>Klik</button>
      <button onClick={() => setCounter(counter + 1)}>Hitung</button>
    </div>
  );
};

export default Latuseeffect;
