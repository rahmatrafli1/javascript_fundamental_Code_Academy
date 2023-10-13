import React, { useState } from "react";
import Child from "./child";

const Parent = () => {
  // eslint-disable-next-line
  const [bunga, setBunga] = useState("Melati");
  // eslint-disable-next-line
  const [nama, setNama] = useState("Budi");

  const ubahNamaBunga = (nb) => {
    setBunga(nb);
  };
  return (
    <div>
      <Child nmbunga={bunga} nm={nama} fungsi={ubahNamaBunga} />
    </div>
  );
};

export default Parent;
