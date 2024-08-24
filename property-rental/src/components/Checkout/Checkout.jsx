import React from "react";
import "./Checkout.css";

const Checkout = ({ cartItems }) => {
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + parseFloat(item.price), 0);
  };

  return (
    <div className="checkout">
      <h2>Order Summary</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cartItems.map(item => (
            <div key={item.id} className="checkout-item">
              <img src={item.image} alt={item.title} />
              <div>
                <h3>{item.title}</h3>
                <p>${item.price}</p>
              </div>
            </div>
          ))}
          <h3>Total: ${calculateTotal().toFixed(2)}</h3>
        </div>
      )}
    </div>
  );
};

export default Checkout;
