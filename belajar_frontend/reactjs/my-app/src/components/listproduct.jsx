import React, { useState } from "react";
import Childlistproduct from "./childlistproduct";

const Listproduct = () => {
  const productlist = [
    {
      id: 1,
      nama: "Roti",
      harga: 5000,
      stock: 2,
      suka: 10,
      disukai: false,
    },
    {
      id: 2,
      nama: "Laptop",
      harga: 1000000,
      stock: 5,
      suka: 2,
      disukai: false,
    },
    {
      id: 3,
      nama: "Meja",
      harga: 10000,
      stock: 2,
      suka: 7,
      disukai: false,
    },
    {
      id: 4,
      nama: "Sepatu",
      harga: 3000,
      stock: 20,
      suka: 12,
      disukai: false,
    },
    {
      id: 5,
      nama: "Tas",
      harga: 5000,
      stock: 5,
      suka: 15,
      disukai: false,
    },
  ];

  // eslint-disable-next-line
  const [product, setProduct] = useState(productlist);

  const increment = (id) => {
    setProduct([
      ...product.map((e) => {
        if (e.id === id) {
          e.stock = e.stock + 1;
          return e;
        } else {
          return e;
        }
      }),
    ]);
  };
  const decrement = (id) => {
    setProduct([
      ...product.map((e) => {
        if (e.id === id) {
          e.stock = e.stock - 1;
          return e;
        } else {
          return e;
        }
      }),
    ]);
  };
  const incrementLike = (id) => {
    setProduct([
      ...product.map((e) => {
        if (e.id === id) {
          e.suka = e.suka + 1;
          e.disukai = !e.disukai;
          return e;
        } else {
          return e;
        }
      }),
    ]);
  };
  const decrementLike = (id) => {
    setProduct([
      ...product.map((e) => {
        if (e.id === id) {
          e.suka = e.suka - 1;
          e.disukai = !e.disukai;
          return e;
        } else {
          return e;
        }
      }),
    ]);
  };
  return (
    <div>
      <Childlistproduct
        product={product}
        increment={increment}
        decrement={decrement}
        decrementLike={decrementLike}
        incrementLike={incrementLike}
      />
    </div>
  );
};

export default Listproduct;
