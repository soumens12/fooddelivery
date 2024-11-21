import React from 'react';


function Cart() {
  const cartItems = [
    { id: 1, name: 'Pizza', price: 10 },
    { id: 2, name: 'Burger', price: 8 },
  ];
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>{item.name} - ${item.price}</li>
        ))}
      </ul>
      <h3>Total: ${total}</h3>
      <button className="btn btn-success">Proceed to Checkout</button>
     
    </div>

    
  );
}

export default Cart;
