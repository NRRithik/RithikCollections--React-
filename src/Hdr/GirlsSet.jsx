import React, { useContext, useState } from 'react';
import { CartContext } from './CartContext';

export default function GirlsSet() {
  const { addToCart } = useContext(CartContext);
  const [purchased, setPurchased] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  const products = [
    { id: 'girlsset1', name: 'Floral Frock Set', price: 900, image: 'https://images.meesho.com/images/products/403401445/pvt4f_400.webp', description: 'A beautiful floral frock set for girls.' },
    { id: 'girlsset2', name: 'Party Princess Set', price: 1200, image: 'https://images.meesho.com/images/products/393820245/onvnx_400.webp', description: 'A stylish set for parties and special occasions.' },
    { id: 'girlsset3', name: 'Casual Play Set', price: 800, image: 'https://images.meesho.com/images/products/343741830/kjmqn_400.webp', description: 'A comfortable set for casual playtime.' },
    { id: 'girlsset4', name: 'Winter Warm Set', price: 1500, image: 'https://images.meesho.com/images/products/386719138/hj8xk_400.webp', description: 'A cozy set for winter days.' },
    { id: 'girlsset5', name: 'Summer Cool Set', price: 1000, image: 'https://images.meesho.com/images/products/266103011/x5hkw_400.webp', description: 'A lightweight set for summer.' },
    { id: 'girlsset6', name: 'Trendy Printed Set', price: 1100, image: 'https://images.meesho.com/images/products/402762891/ydvza_400.webp', description: 'A trendy set with vibrant prints.' },
    { id: 'girlsset7', name: 'School Uniform Set', price: 1300, image: 'https://images.meesho.com/images/products/395314408/fq3ob_400.webp', description: 'A durable set for school wear.' },
    { id: 'girlsset8', name: 'Festive Celebration Set', price: 1400, image: 'https://images.meesho.com/images/products/338331725/tanlu_400.webp', description: 'A festive set for special occasions.' },
    { id: 'girlsset9', name: 'Adventure Outdoor Set', price: 950, image: 'https://images.meesho.com/images/products/402783097/q8s1g_400.webp', description: 'A rugged set for outdoor adventures.' },
    { id: 'girlsset10', name: 'Smart Casual Set', price: 1100, image: 'https://images.meesho.com/images/products/402782847/pkjqx_400.webp', description: 'A smart set for casual outings.' },
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

      <h2>Girls' Sets</h2>
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