import React, { useContext, useState } from 'react';
import { CartContext } from './CartContext';

export default function Tops() {
  const { addToCart } = useContext(CartContext);
  const [purchased, setPurchased] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  const products = [
    { id: 'top1', name: 'Classic Comfort Top', price: 1200, image: 'https://images.meesho.com/images/products/396258469/0jxmr_400.webp', description: 'A classic cotton top perfect for casual outings.' },
    { id: 'top2', name: 'Elegant Office Blouse', price: 1500, image: 'https://images.meesho.com/images/products/374625651/5b7sx_400.webp', description: 'A stylish blouse ideal for office wear.' },
    { id: 'top3', name: 'Trendy Printed Top', price: 1800, image: 'https://images.meesho.com/images/products/479221583/gxhhs_400.webp', description: 'A trendy printed top for a fashionable look.' },
    { id: 'top4', name: 'Everyday Relax Fit', price: 1300, image: 'https://images.meesho.com/images/products/178638113/htxzl_400.webp', description: 'A comfortable top for everyday wear.' },
    { id: 'top5', name: 'Sleek Modern Crop Top', price: 1600, image: 'https://images.meesho.com/images/products/496130490/wygou_400.webp', description: 'A modern crop top with a sleek design.' },
    { id: 'top6', name: 'Bold Vibrant Style', price: 1400, image: 'https://images.meesho.com/images/products/404271174/cqayw_400.webp', description: 'A vibrant top for a bold look.' },
    { id: 'top7', name: 'Chic Urban Look', price: 1700, image: 'https://images.meesho.com/images/products/494641769/gqv96_400.webp', description: 'A chic top for a stylish appearance.' },
    { id: 'top8', name: 'Versatile All-Occasion', price: 1500, image: 'https://images.meesho.com/images/products/222928558/n1cs8_400.webp', description: 'A versatile top for any occasion.' },
    { id: 'top9', name: 'Luxury Premium Feel', price: 2000, image: 'https://images.meesho.com/images/products/316364561/hdzlg_400.webp', description: 'A premium top for a luxurious feel.' },
    { id: 'top10', name: 'Fashion Forward Trend', price: 1800, image: 'https://images.meesho.com/images/products/315797371/dp8hr_400.webp', description: 'A trendy top for a fashionable look.' },
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

      <h2>Tops</h2>
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