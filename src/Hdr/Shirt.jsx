import React, { useContext, useState } from 'react';
import { CartContext } from './CartContext';

export default function Shirt() {
  const { addToCart } = useContext(CartContext);
  const [purchased, setPurchased] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  const products = [
    { id: 'shirt1', name: 'Classic Comfort Cotton', price: 1230, image: 'https://assets.myntassets.com/w_412,q_60,dpr_2,fl-progressive/assets/images/23867034/2023/7/10/f05db304-fcab-46ee-8751-db88b87db1fa1688972728496-HERENOW-Men-Shirts-1431688972728012-1.jpg', description: 'A classic cotton shirt perfect for casual outings.' },
    { id: 'shirt2', name: 'Elegant Office Formal', price: 1500, image: 'https://images.meesho.com/images/products/375061729/0lurd_400.webp', description: 'A stylish formal shirt ideal for office wear.' },
    { id: 'shirt3', name: 'Trendy Printed Vibes', price: 2000, image: 'https://images.meesho.com/images/products/503717392/xahar_400.webp', description: 'A trendy printed shirt for a fashionable look.' },
    { id: 'shirt4', name: 'Everyday Relax Fit', price: 1800, image: 'https://images.meesho.com/images/products/2653067/1_400.webp', description: 'A comfortable shirt for everyday wear.' },
    { id: 'shirt5', name: 'Sleek Modern Edge', price: 2200, image: 'https://images.meesho.com/images/products/401395624/sdzw5_400.webp', description: 'A modern shirt with a sleek design.' },
    { id: 'shirt6', name: 'Bold Vibrant Style', price: 1900, image: 'https://images.meesho.com/images/products/312037154/tbacg_400.webp', description: 'A vibrant shirt for a bold look.' },
    { id: 'shirt7', name: 'Chic Urban Look', price: 2100, image: 'https://images.meesho.com/images/products/464601334/mxvze_400.webp', description: 'A chic shirt for a stylish appearance.' },
    { id: 'shirt8', name: 'Versatile All-Occasion', price: 1700, image: 'https://images.meesho.com/images/products/390252438/svvzb_400.webp', description: 'A versatile shirt for any occasion.' },
    { id: 'shirt9', name: 'Luxury Premium Feel', price: 2400, image: 'https://images.meesho.com/images/products/386381786/ivesd_400.webp', description: 'A premium shirt for a luxurious feel.' },
    { id: 'shirt10', name: 'Fashion Forward Trend', price: 2000, image: 'https://images.meesho.com/images/products/179192398/iiwie_400.webp', description: 'A trendy shirt for a fashionable look.' },
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
      {purchased && <h1 style={{ position: 'fixed', top: '0', left: '50%', transform: 'translateX(-50%)', color: 'green', backgroundColor: 'white', padding: '10px 20px', borderRadius: '5px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)', zIndex: 1000 }}>Purchased!</h1>}
      {addedToCart && <h1 style={{ position: 'fixed', top: '0', left: '50%', transform: 'translateX(-50%)', color: 'blue', backgroundColor: 'white', padding: '10px 20px', borderRadius: '5px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)', zIndex: 1000 }}>Added to cart!</h1>}
      <h2>Shirts</h2>
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
