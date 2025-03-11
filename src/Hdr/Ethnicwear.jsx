import React, { useContext, useState } from 'react';
import { CartContext } from './CartContext';

export default function Ethnicwear() {
  const { addToCart } = useContext(CartContext);
  const [purchased, setPurchased] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  const products = [
    { id: 'ethnic1', name: 'Silk Saree', price: 2500, image: 'https://images.meesho.com/images/products/145180171/dsqmm_400.webp', description: 'A traditional silk saree for festive occasions.' },
    { id: 'ethnic2', name: 'Lehenga Choli', price: 3500, image: 'https://images.meesho.com/images/products/508553457/ipqjy_400.webp', description: 'A stunning lehenga choli for weddings.' },
    { id: 'ethnic3', name: 'Kurta Set', price: 1800, image: 'https://images.meesho.com/images/products/508612528/eid68_400.webp', description: 'A stylish kurta set for casual and formal wear.' },
    { id: 'ethnic4', name: 'Anarkali Suit', price: 2200, image: 'https://images.meesho.com/images/products/506324659/qtdvp_400.webp', description: 'A graceful Anarkali suit for special occasions.' },
    { id: 'ethnic5', name: 'Sherwani Set', price: 4000, image: 'https://images.meesho.com/images/products/508235423/xrtpu_400.webp', description: 'A regal sherwani set for weddings.' },
    { id: 'ethnic6', name: 'Banarasi Saree', price: 3000, image: 'https://images.meesho.com/images/products/408738671/a8po6_400.webp', description: 'A luxurious Banarasi saree for traditional events.' },
    { id: 'ethnic7', name: 'Palazzo Suit', price: 1500, image: 'https://images.meesho.com/images/products/231529877/3wjgi_400.webp', description: 'A trendy palazzo suit for modern ethnic looks.' },
    { id: 'ethnic8', name: 'Designer Lehenga', price: 5000, image: 'https://images.meesho.com/images/products/498318909/f4q5z_400.webp', description: 'A designer lehenga for grand celebrations.' },
    { id: 'ethnic9', name: 'Cotton Kurta', price: 1200, image: 'https://images.meesho.com/images/products/418868344/rxprb_400.webp', description: 'A comfortable cotton kurta for daily wear.' },
    { id: 'ethnic10', name: 'Bridal Lehenga', price: 6000, image: 'https://images.meesho.com/images/products/459075178/wlxzl_400.webp', description: 'A luxurious bridal lehenga for weddings.' },
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

      <h2>Ethnicwear</h2>
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