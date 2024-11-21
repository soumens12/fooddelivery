import React from 'react';

function Checkout() {
  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <form>
        <div className="form-group">
          <label>Name</label>
          <input type="text" className="form-control" placeholder="Enter your name" />
        </div>
        <div className="form-group">
          <label>Address</label>
          <input type="text" className="form-control" placeholder="Enter your address" />
        </div>
        <button type="submit" className="btn btn-primary">Place Order</button>
      </form>
    </div>
  );
}

export default Checkout;
