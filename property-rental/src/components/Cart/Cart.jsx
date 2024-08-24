import React from "react";
import "./Cart.css";

const Cart = ({ cartItems, onRemove }) => {

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + parseFloat(item.price), 0);
  };

  return (
    <div className="cart">
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} />
              <div>
                <h3>{item.title}</h3>
                <p>${item.price}</p>
                <button onClick={() => onRemove(item)}>Remove</button>
              </div>
            </div>
          ))}
          <h2>Total: ${calculateTotal().toFixed(2)}</h2>
        </div>
      )}
    </div>
  );
};

export default Cart;
