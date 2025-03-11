import React, { useContext, useState } from 'react';
import { CartContext } from './CartContext';

export default function Dresses() {
  const { addToCart } = useContext(CartContext);
  const [purchased, setPurchased] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  const products = [
    { id: 'dress1', name: 'Classic Comfort Dress', price: 2000, image: 'https://images.meesho.com/images/products/122796457/kla9k_400.webp', description: 'A classic dress perfect for casual outings.' },
    { id: 'dress2', name: 'Elegant Evening Gown', price: 3500, image: 'https://images.meesho.com/images/products/269838992/on8rv_400.webp', description: 'A stylish evening gown ideal for special occasions.' },
    { id: 'dress3', name: 'Trendy Printed Dress', price: 2500, image: 'https://images.meesho.com/images/products/507410380/tvcvz_400.webp', description: 'A trendy printed dress for a fashionable look.' },
    { id: 'dress4', name: 'Everyday Relax Fit', price: 1800, image: 'https://images.meesho.com/images/products/396900145/reocm_400.webp', description: 'A comfortable dress for everyday wear.' },
    { id: 'dress5', name: 'Sleek Modern Dress', price: 2800, image: 'https://images.meesho.com/images/products/304245987/w2b3u_400.webp', description: 'A modern dress with a sleek design.' },
    { id: 'dress6', name: 'Bold Vibrant Style', price: 2200, image: 'https://images.meesho.com/images/products/42186835/cvtum_400.webp', description: 'A vibrant dress for a bold look.' },
    { id: 'dress7', name: 'Chic Urban Look', price: 3000, image: 'https://images.meesho.com/images/products/399774959/rqjop_400.webp', description: 'A chic dress for a stylish appearance.' },
    { id: 'dress8', name: 'Versatile All-Occasion', price: 2600, image: 'https://images.meesho.com/images/products/304524419/hmriu_400.webp', description: 'A versatile dress for any occasion.' },
    { id: 'dress9', name: 'Luxury Premium Feel', price: 4000, image: 'https://images.meesho.com/images/products/275133110/impca_400.webp', description: 'A premium dress for a luxurious feel.' },
    { id: 'dress10', name: 'Fashion Forward Trend', price: 3200, image: 'https://images.meesho.com/images/products/501771810/w3d8a_400.webp', description: 'A trendy dress for a fashionable look.' },
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

      <h2>Dresses</h2>
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