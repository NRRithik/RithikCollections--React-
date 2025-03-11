import React, { useContext, useState } from 'react';
import { CartContext } from './CartContext';

export default function Pants() {
  const { addToCart } = useContext(CartContext);
  const [purchased, setPurchased] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  const products = [
    { id: 'pants1', name: 'Classic Comfort Jeans', price: 1500, image: 'https://images.meesho.com/images/products/303005549/pi4je_400.webp', description: 'A classic pair of jeans perfect for casual outings.' },
    { id: 'pants2', name: 'Elegant Office Trousers', price: 1800, image: 'https://images.meesho.com/images/products/310668182/sjuog_400.webp', description: 'A stylish pair of trousers ideal for office wear.' },
    { id: 'pants3', name: 'Trendy Printed Pants', price: 2000, image: 'https://images.meesho.com/images/products/216340952/anqx8_400.webp', description: 'A trendy pair of printed pants for a fashionable look.' },
    { id: 'pants4', name: 'Everyday Relax Fit', price: 1700, image: 'https://images.meesho.com/images/products/378856354/y1q31_400.webp', description: 'A comfortable pair of pants for everyday wear.' },
    { id: 'pants5', name: 'Sleek Modern Chinos', price: 2200, image: 'https://images.meesho.com/images/products/320243437/ncmgx_400.webp', description: 'A modern pair of chinos with a sleek design.' },
    { id: 'pants6', name: 'Casual Denim Fit', price: 1600, image: 'https://images.meesho.com/images/products/357221864/z7mfz_400.webp', description: 'A stylish denim for everyday casual looks.' },
    { id: 'pants7', name: 'Formal Slim Fit', price: 2000, image: 'https://images.meesho.com/images/products/185380921/xj0c0_400.webp', description: 'A slim fit formal trouser for a sleek look.' },
    { id: 'pants8', name: 'Trendy Pattern Pants', price: 2100, image: 'https://images.meesho.com/images/products/347591116/tzv6n_400.webp', description: 'A stylish pattern-designed pant for a unique look.' },
    { id: 'pants9', name: 'Relaxed Lounge Pants', price: 1800, image: 'https://images.meesho.com/images/products/404886094/b2lkd_400.webp', description: 'A super comfortable pant for lounging and relaxation.' },
    { id: 'pants10', name: 'Classic Black Trousers', price: 1900, image: 'https://images.meesho.com/images/products/58034956/8kokz_400.webp', description: 'A classic black trouser suitable for all occasions.' }
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
      {purchased && (
        <h1 style={{ position: 'fixed', top: '0', left: '50%', transform: 'translateX(-50%)', color: 'green', textAlign: 'center', backgroundColor: 'white', padding: '10px 20px', borderRadius: '5px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)', zIndex: 1000 }}>Purchased!</h1>
      )}
      {addedToCart && (
        <h1 style={{ position: 'fixed', top: '0', left: '50%', transform: 'translateX(-50%)', color: 'blue', textAlign: 'center', backgroundColor: 'white', padding: '10px 20px', borderRadius: '5px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)', zIndex: 1000 }}>Added to cart!</h1>
      )}
      <h2>Pants</h2>
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
