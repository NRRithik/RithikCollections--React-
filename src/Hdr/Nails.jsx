import React, { useContext, useState } from 'react';
import { CartContext } from './CartContext';

export default function Nails() {
  const { addToCart } = useContext(CartContext);
  const [purchased, setPurchased] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  const products = [
    { id: 'nails1', name: 'Nail Polish Set', price: 500, image: 'https://images.meesho.com/images/products/11475794/acpvc_400.webp', description: 'A set of vibrant nail polishes.' },
    { id: 'nails2', name: 'Nail Art Kit', price: 800, image: 'https://images.meesho.com/images/products/372961077/ceemf_400.webp', description: 'Everything you need for nail art.' },
    { id: 'nails3', name: 'Nail Strengthener', price: 600, image: 'https://images.meesho.com/images/products/240732915/tvk2w_400.webp', description: 'Strengthens and protects nails.' },
    { id: 'nails4', name: 'Gel Nail Polish', price: 700, image: 'https://images.meesho.com/images/products/436196464/koogy_400.webp', description: 'Long-lasting gel nail polish.' },
    { id: 'nails5', name: 'Nail Care Kit', price: 900, image: 'https://images.meesho.com/images/products/496957495/h0dtt_400.webp', description: 'Complete nail care solution.' },
    { id: 'nails6', name: 'Matte Nail Polish', price: 550, image: 'https://images.meesho.com/images/products/201682490/qm7eg_400.webp', description: 'Matte finish nail polish.' },
    { id: 'nails7', name: 'Nail Stickers', price: 300, image: 'https://images.meesho.com/images/products/338430796/1urvd_400.webp', description: 'Decorative nail stickers.' },
    { id: 'nails8', name: 'Nail File Set', price: 200, image: 'https://images.meesho.com/images/products/354839300/ruwbu_400.webp', description: 'A set of durable nail files.' },
    { id: 'nails9', name: 'Nail Polish Remover', price: 250, image: 'https://images.meesho.com/images/products/401923749/chdeu_400.webp', description: 'Gentle nail polish remover.' },
    { id: 'nails10', name: 'Nail Buffer', price: 150, image: 'https://images.meesho.com/images/products/251983776/ybwzd_400.webp', description: 'Smooths and shines nails.' },
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

      <h2>Nail Care</h2>
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