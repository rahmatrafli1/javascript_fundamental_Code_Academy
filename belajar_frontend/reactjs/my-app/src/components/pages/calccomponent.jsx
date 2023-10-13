import React, { useState } from "react";

const Calccomponent = () => {
  // eslint-disable-next-line
  const [angka1, setAngka1] = useState(0);
  // eslint-disable-next-line
  const [angka2, setAngka2] = useState(0);
  // eslint-disable-next-line
  const [hasil, setHasil] = useState(0);

  const tambah = () => {
    setHasil(+angka1 + +angka2);
  };

  const kurang = () => {
    setHasil(+angka1 - +angka2);
  };

  const kali = () => {
    setHasil(+angka1 * +angka2);
  };

  const bagi = () => {
    setHasil(+angka1 / +angka2);
  };

  return (
    <div>
      <h1>Kalkulator</h1>
      Angka1:
      <input
        type="number"
        name="angka1"
        value={angka1}
        onChange={(e) => setAngka1(e.target.value)}
      />
      <br />
      Angka2:
      <input
        type="number"
        name="angka2"
        value={angka2}
        onChange={(e) => setAngka2(e.target.value)}
      />
      <br />
      <button onClick={tambah}>+</button>
      <button onClick={kurang}>-</button>
      <button onClick={kali}>x</button>
      <button onClick={bagi}>:</button>
      <br />
      Hasil: {hasil}
    </div>
  );
};

export default Calccomponent;
