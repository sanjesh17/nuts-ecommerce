import React from "react";

const Cart = ({ cartItems, handleRemoveFromCart }) => {
  return (
    <div className="cart">
      <h2 className="text-xl font-bold">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li
              key={index}
              className="flex justify-between items-center border-b py-2"
            >
              <p>{item.name}</p>
              <p>{item.price}</p>
              <button
                onClick={() => handleRemoveFromCart(index)}
                className="text-red-600 hover:underline"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
