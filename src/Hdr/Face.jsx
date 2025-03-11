import React, { useContext, useState } from 'react';
import { CartContext } from './CartContext';

export default function Face() {
  const { addToCart } = useContext(CartContext);
  const [purchased, setPurchased] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  const products = [
    { id: 'face1', name: 'Hydrating Face Cream', price: 1200, image: 'https://images.meesho.com/images/products/354266635/rumtr_400.webp', description: 'A hydrating cream for glowing skin.' },
    { id: 'face2', name: 'Vitamin C Serum', price: 1500, image: 'https://images.meesho.com/images/products/146490974/lc5kl_400.webp', description: 'Brightens and evens skin tone.' },
    { id: 'face3', name: 'Sunscreen SPF 50', price: 800, image: 'https://images.meesho.com/images/products/218602987/dxfsa_400.webp', description: 'Protects skin from harmful UV rays.' },
    { id: 'face4', name: 'Anti-Aging Cream', price: 1800, image: 'https://images.meesho.com/images/products/306723339/pznvm_400.webp', description: 'Reduces wrinkles and fine lines.' },
    { id: 'face5', name: 'Charcoal Face Mask', price: 900, image: 'https://images.meesho.com/images/products/394860037/gd5wr_400.webp', description: 'Deep cleanses and detoxifies skin.' },
    { id: 'face6', name: 'Aloe Vera Gel', price: 500, image: 'https://images.meesho.com/images/products/372671330/c8jqu_400.webp', description: 'Soothes and hydrates the skin.' },
    { id: 'face7', name: 'Night Repair Cream', price: 2000, image: 'https://images.meesho.com/images/products/347631025/uc4ar_400.webp', description: 'Repairs skin overnight.' },
    { id: 'face8', name: 'Exfoliating Scrub', price: 700, image: 'https://images.meesho.com/images/products/71569990/mavn9_400.webp', description: 'Removes dead skin cells for a fresh glow.' },
    { id: 'face9', name: 'Brightening Toner', price: 1000, image: 'https://images.meesho.com/images/products/423464698/cifaj_400.webp', description: 'Brightens and tightens pores.' },
    { id: 'face10', name: 'Moisturizing Lotion', price: 1200, image: 'https://images.meesho.com/images/products/400099421/in8y1_400.webp', description: 'Keeps skin hydrated and soft.' },
  ];

  const handleBuy = (product) => {
    addToCart(product);
    setPurchased(true);
    setTimeout(() => setPurchased(false), 5000);
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 5000);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', flexDirection: 'column' }}>
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
            zIndex: 1000,
          }}
        >
          Purchased!
        </h1>
      )}

      {/* Fixed "Added to cart!" message at the top of the monitor */}
      {addedToCart && (
        <h1
          style={{
            position: 'fixed',
            top: '0',
            left: '50%',
            transform: 'translateX(-50%)',
            color: 'blue',
            textAlign: 'center',
            marginBottom: '10px',
            backgroundColor: 'white',
            padding: '10px 20px',
            borderRadius: '5px',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
            zIndex: 1000,
          }}
        >
          Added to cart!
        </h1>
      )}

      <h2>Face Care</h2>
      <div style={{ display: 'flex', rowGap: '50px', columnGap: '100px', flexWrap: 'wrap', maxWidth: '800px', justifyContent: 'center' }}>
        {products.map((product) => (
          <div key={product.id} className="card" style={{ width: '300px', border: '2px solid red', borderRadius: '10px', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img className="card-img-top" src={product.image} alt="Card" style={{ width: '100%', height: '375px', objectFit: 'cover' }} />
            <div className="card-body" style={{ padding: '10px', textAlign: 'center', flex: '1', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <h4 className="card-title" style={{ fontSize: '16px', margin: '2px 0' }}>{product.name}</h4>
              <p className="card-text" style={{ fontSize: '14px', margin: '2px 0' }}>{product.description}</p>
              <h6 className="card-text" style={{ fontSize: '14px', margin: '2px 0' }}>MRP ₹{product.price}</h6>
              <button className="btn btn-danger w-100" onClick={() => handleAddToCart(product)} style={{ fontSize: '14px', padding: '5px' }}>Add to cart</button>
              <button className="btn btn-success w-100 mt-2" onClick={() => handleBuy(product)} style={{ fontSize: '14px', padding: '5px' }}>Buy</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}