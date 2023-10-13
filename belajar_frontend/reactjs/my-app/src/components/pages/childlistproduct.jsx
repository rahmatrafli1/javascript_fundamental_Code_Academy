import React from "react";

const Childlistproduct = ({
  product,
  increment,
  decrement,
  decrementLike,
  incrementLike,
}) => {
  return (
    <div>
      <h1>Product List</h1>
      {product &&
        product.map((item) => {
          return (
            <ul key={item.id}>
              <li>
                <p>Nama Produk: {item.nama}</p>
                <p>Harga Produk: {item.harga}</p>
                <p>Stok: {item.stock}</p>
                <button onClick={() => increment(item.id)}>+</button>
                <button onClick={() => decrement(item.id)}>-</button>
                <p>Suka: {item.suka}</p>
                <button
                  onClick={() => {
                    item.disukai
                      ? decrementLike(item.id)
                      : incrementLike(item.id);
                  }}
                >
                  {item.disukai ? "Batal Suka" : "Suka"}
                </button>
              </li>
            </ul>
          );
        })}
    </div>
  );
};

export default Childlistproduct;
