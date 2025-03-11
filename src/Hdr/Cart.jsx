import React, { useContext, useState } from 'react';
import { CartContext } from './CartContext';

export default function Cart() {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);
  const [purchased, setPurchased] = useState(false);

  const handleBuy = (productId) => {
    setPurchased(true);
    setTimeout(() => setPurchased(false), 5000);
    // Optionally, you can clear the cart or perform other actions after purchase
  };

  const cartItems = Object.keys(cart);

  return (
    <div className="container mt-5">
      {/* Fixed "Purchased!" message at the top of the monitor */}
      {purchased && (
        <h1
          style={{
            position: 'fixed',
            top: '0',
            left: '50%',
            transform: 'translateX(-50%)',
            color: 'green',
            textAlign: 'center',
            marginBottom: '10px',
            backgroundColor: 'white',
            padding: '10px 20px',
            borderRadius: '5px',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
            zIndex: 1000, // Ensure it appears above other content
          }}
        >
          Purchased!
        </h1>
      )}

      <h4>Your Cart</h4>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
        {cartItems.length === 0 ? (
          <p>Cart is empty.</p>
        ) : (
          cartItems.map((productId) => (
            <div
              key={productId}
              className="card"
              style={{
                width: '350px',
                height: '450px',
                padding: '10px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderRadius: '10px',
                boxShadow: `
                  0 2.8px 2.2px rgba(0, 0, 0, 0.02),
                  0 6.7px 5.3px rgba(0, 0, 0, 0.028),
                  0 12.5px 10px rgba(0, 0, 0, 0.035),
                  0 22.3px 17.9px rgba(0, 0, 0, 0.042),
                  0 41.8px 33.4px rgba(0, 0, 0, 0.05),
                  0 100px 80px rgba(0, 0, 0, 0.07)
                `,
                transition: 'box-shadow 0.3s ease-in-out',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `
                  0 4px 6px rgba(0, 0, 0, 0.1),
                  0 10px 15px rgba(0, 0, 0, 0.1),
                  0 20px 25px rgba(0, 0, 0, 0.1)
                `;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = `
                  0 2.8px 2.2px rgba(0, 0, 0, 0.02),
                  0 6.7px 5.3px rgba(0, 0, 0, 0.028),
                  0 12.5px 10px rgba(0, 0, 0, 0.035),
                  0 22.3px 17.9px rgba(0, 0, 0, 0.042),
                  0 41.8px 33.4px rgba(0, 0, 0, 0.05),
                  0 100px 80px rgba(0, 0, 0, 0.07)
                `;
              }}
            >
              <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                <img
                  className="card-img-top"
                  src={cart[productId].image}
                  alt={cart[productId].name}
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
              </div>
              <div className="card-body" style={{ padding: '10px', flex: '0 0 auto' }}>
                <h4 className="card-title" style={{ fontSize: '16px', margin: '5px 0' }}>{cart[productId].name}</h4>
                <p className="card-text" style={{ fontSize: '14px', margin: '5px 0' }}>Price: ₹{cart[productId].price}</p>
                <div className="cart-actions" style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <button className="btn btn-sm btn-success" onClick={() => addToCart(cart[productId])}>+</button>
                  <span style={{ fontSize: '14px' }}>Qty: {cart[productId].quantity}</span>
                  <button className="btn btn-sm btn-warning" onClick={() => removeFromCart(productId)}>-</button>
                  <button className="btn btn-sm btn-danger" onClick={() => removeFromCart(productId, true)}>Remove</button>
                  {/* Buy button for individual product */}
                  <button
                    className="btn btn-sm btn-primary"
                    onClick={() => handleBuy(productId)}
                    style={{ marginLeft: 'auto' }} // Align to the right
                  >
                    Buy
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      {cartItems.length > 0 && (
        <>
          <h5 style={{ marginTop: '20px' }}>Total Amount: ₹{Object.values(cart).reduce((total, item) => total + item.price * item.quantity, 0)}</h5>
          <button className="btn btn-success mt-2" style={{ width: '150px' }} onClick={() => handleBuy('all')}>Buy All</button>
        </>
      )}
    </div>
  );
}