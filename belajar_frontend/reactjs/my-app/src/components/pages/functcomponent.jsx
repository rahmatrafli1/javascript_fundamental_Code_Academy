import React, { useState } from "react";

const FunctionComponent = (props) => {
  // eslint-disable-next-line
  const [counter, setCounter] = useState(0); // eslint-disable-next-line
  const [name, setName] = useState("Rahmat"); // eslint-disable-next-line
  const [person, setPerson] = useState({
    nama: "Rafli",
    alamat: "Bekasi",
    usia: 26,
  });
  const changeHandler = (e) => {
    // setPerson((currPerson) => {
    //   return { ...currPerson, [e.target.name]: e.target.value };
    // });
    setPerson({ ...person, [e.target.name]: e.target.value });
  };
  //   const increment = () => {
  //     setCounter(counter + 1);
  //   };
  //   const decrement = () => {
  //     setCounter(counter - 1);
  //   };
  return (
    <div>
      <h2>Selamat Belajar React Hook {name}</h2>
      <input
        type="text"
        name={name}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h3>Counter: {counter}</h3>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => setCounter(counter - 1)}>-</button>
      <div>
        <input
          type="text"
          name="nama"
          value={person.nama}
          onChange={changeHandler}
        />
        <input
          type="text"
          name="alamat"
          value={person.alamat}
          onChange={changeHandler}
        />
        <input
          type="number"
          name="usia"
          value={person.usia}
          onChange={changeHandler}
        />
      </div>
      <p>
        <h4>Nama: {person.nama}</h4>
        <h4>Alamat: {person.alamat}</h4>
        <h4>Usia: {person.usia}</h4>
      </p>
    </div>
  );
};

export default FunctionComponent;
