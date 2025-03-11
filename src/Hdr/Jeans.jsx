import React, { useContext, useState } from 'react';
import { CartContext } from './CartContext';

export default function Jeans() {
  const { addToCart } = useContext(CartContext);
  const [purchased, setPurchased] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  const products = [
    { id: 'jeans1', name: 'Classic Comfort Jeans', price: 1500, image: 'https://images.meesho.com/images/products/406090318/fgv7g_400.webp', description: 'A classic pair of jeans perfect for casual outings.' },
    { id: 'jeans2', name: 'Elegant Office Jeans', price: 1800, image: 'https://images.meesho.com/images/products/313719770/6dqxg_400.webp', description: 'A stylish pair of jeans ideal for office wear.' },
    { id: 'jeans3', name: 'Trendy Printed Jeans', price: 2000, image: 'https://images.meesho.com/images/products/456505560/p1de4_400.webp', description: 'A trendy pair of printed jeans for a fashionable look.' },
    { id: 'jeans4', name: 'Everyday Relax Fit', price: 1700, image: 'https://images.meesho.com/images/products/505186165/8klce_400.webp', description: 'A comfortable pair of jeans for everyday wear.' },
    { id: 'jeans5', name: 'Sleek Modern Jeans', price: 2200, image: 'https://images.meesho.com/images/products/389631439/lcniu_400.webp', description: 'A modern pair of jeans with a sleek design.' },
    { id: 'jeans6', name: 'Bold Vibrant Style', price: 1900, image: 'https://images.meesho.com/images/products/298604793/a5xge_400.webp', description: 'A vibrant pair of jeans for a bold look.' },
    { id: 'jeans7', name: 'Chic Urban Look', price: 2100, image: 'https://images.meesho.com/images/products/162666727/ayf0d_400.webp', description: 'A chic pair of jeans for a stylish appearance.' },
    { id: 'jeans8', name: 'Versatile All-Occasion', price: 1600, image: 'https://images.meesho.com/images/products/126587955/dzz2p_400.webp', description: 'A versatile pair of jeans for any occasion.' },
    { id: 'jeans9', name: 'Luxury Premium Feel', price: 2400, image: 'https://images.meesho.com/images/products/497067378/sm2dq_400.webp', description: 'A premium pair of jeans for a luxurious feel.' },
    { id: 'jeans10', name: 'Fashion Forward Trend', price: 2000, image: 'https://images.meesho.com/images/products/496720942/eq1kx_400.webp', description: 'A trendy pair of jeans for a fashionable look.' },
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

      <h2>Jeans</h2>
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