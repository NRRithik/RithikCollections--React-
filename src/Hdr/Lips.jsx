import React, { useContext, useState } from 'react';
import { CartContext } from './CartContext';

export default function Lips() {
  const { addToCart } = useContext(CartContext);
  const [purchased, setPurchased] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  const products = [
    { id: 'lips1', name: 'Matte Lipstick', price: 600, image: 'https://images.meesho.com/images/products/282726691/vfc6s_400.webp', description: 'Long-lasting matte lipstick.' },
    { id: 'lips2', name: 'Lip Balm', price: 300, image: 'https://images.meesho.com/images/products/490085615/txbrk_400.webp', description: 'Moisturizing lip balm.' },
    { id: 'lips3', name: 'Lip Gloss', price: 400, image: 'https://images.meesho.com/images/products/399867942/gawsf_400.webp', description: 'Shiny lip gloss for a glamorous look.' },
    { id: 'lips4', name: 'Lip Scrub', price: 350, image: 'https://images.meesho.com/images/products/395909448/1iptw_400.webp', description: 'Exfoliates and softens lips.' },
    { id: 'lips5', name: 'Lip Stain', price: 500, image: 'https://images.meesho.com/images/products/230937616/u7vg5_400.webp', description: 'Long-lasting lip stain.' },
    { id: 'lips6', name: 'Lip Liner', price: 250, image: 'https://images.meesho.com/images/products/258999678/7zqwc_400.webp', description: 'Defines and shapes lips.' },
    { id: 'lips7', name: 'Tinted Lip Balm', price: 400, image: 'https://images.meesho.com/images/products/81793116/uah74_400.webp', description: 'Adds a hint of color while moisturizing.' },
    { id: 'lips8', name: 'Lip Plumper', price: 700, image: 'https://images.meesho.com/images/products/481157675/boaqc_400.webp', description: 'Enhances lip volume.' },
    { id: 'lips9', name: 'Lip Mask', price: 600, image: 'https://images.meesho.com/images/products/312869748/inm7y_400.webp', description: 'Overnight treatment for soft lips.' },
    { id: 'lips10', name: 'Lip Oil', price: 450, image: 'https://images.meesho.com/images/products/353361864/sawom_400.webp', description: 'Hydrates and nourishes lips.' },
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

      <h2>Lip Care</h2>
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