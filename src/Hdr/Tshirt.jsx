import React, { useContext, useState } from 'react';
import { CartContext } from './CartContext';

export default function Tshirt() {
  const { addToCart } = useContext(CartContext);
  const [purchased, setPurchased] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  const products = [
    { id: 'tshirt1', name: 'Classic Comfort Cotton', price: 130, image: 'https://images.meesho.com/images/products/338351098/tna3n_400.webp', description: 'A classic cotton t-shirt perfect for casual outings.' },
    { id: 'tshirt2', name: 'Elegant Office Formal', price: 100, image: 'https://images.meesho.com/images/products/292427153/wbiwx_400.webp', description: 'A stylish formal t-shirt ideal for office wear.' },
    { id: 'tshirt3', name: 'Trendy Printed Vibes', price: 200, image: 'https://images.meesho.com/images/products/386786829/udtwi_400.webp', description: 'A trendy printed t-shirt for a fashionable look.' },
    { id: 'tshirt4', name: 'Everyday Relax Fit', price: 180, image: 'https://images.meesho.com/images/products/316209144/0fxts_400.webp', description: 'A comfortable t-shirt for everyday wear.' },
    { id: 'tshirt5', name: 'Sleek Modern Edge', price: 220, image: 'https://images.meesho.com/images/products/507365919/hydyc_400.webp', description: 'A modern t-shirt with a sleek design.' },
    { id: 'tshirt6', name: 'Bold Vibrant Style', price: 190, image: 'https://images.meesho.com/images/products/507792736/jcw5t_400.webp', description: 'A vibrant t-shirt for a bold look.' },
    { id: 'tshirt7', name: 'Chic Urban Look', price: 200, image: 'https://images.meesho.com/images/products/328301556/q1xrf_400.webp', description: 'A chic t-shirt for a stylish appearance.' },
    { id: 'tshirt8', name: 'Versatile All-Occasion', price: 100, image: 'https://images.meesho.com/images/products/368136162/va6up_400.webp', description: 'A versatile t-shirt for any occasion.' },
    { id: 'tshirt9', name: 'Luxury Premium Feel', price: 200, image: 'https://images.meesho.com/images/products/502423829/e49ej_400.webp', description: 'A premium t-shirt for a luxurious feel.' },
    { id: 'tshirt10', name: 'Fashion Forward Trend', price: 200, image: 'https://images.meesho.com/images/products/402223327/uu2ef_400.webp', description: 'A trendy t-shirt for a fashionable look.' },
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

      <h2>T-shirts</h2>
      <div style={{ display: 'flex', rowGap : '50px', columnGap : '100px' , flexWrap: 'wrap', maxWidth: '800px', justifyContent: 'center' }}>
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