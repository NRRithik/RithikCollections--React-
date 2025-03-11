import React from 'react';
import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import Beauty from './Hdr/Beauty';
import Kids from './Hdr/Kids';
import Men from './Hdr/Men';
import Women from './Hdr/Women';
import Home from './Hdr/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';
import Searchbar from './Searchbar';
import Shirt from './Hdr/Shirt';
import Tshirt from './Hdr/Tshirt';
import Pants from './Hdr/Pants';
import Cart from './Hdr/Cart';
import { CartProvider } from './Hdr/CartContext'; // Import the CartProvider
import Tops from './Hdr/Tops';
import Dresses from './Hdr/Dresses';
import Jeans from './Hdr/Jeans';
import BoysSet from './Hdr/BoysSet';
import Ethnicwear from './Hdr/Ethnicwear';
import GirlsSet from './Hdr/GirlsSet';
import Face from './Hdr/Face';
import Lips from './Hdr/Lips';
import Nails from './Hdr/Nails';


function App() {
  return (
    <CartProvider>
      <div>
        <div id="hdr">
          <div className="header-content">
            <Link to="/">
              <img
                src="https://thumbs.dreamstime.com/b/gold-letter-r-elegant-graceful-logo-calligraphic-beautiful-style-ornate-monogram-vintage-emblem-book-design-brand-name-gold-344875091.jpg"
                alt="Logo"
                style={{ width: '100px' }}
              />
            </Link>

            <span className="nav-links">
              <Link to="/">Home</Link>&nbsp;  
              <Link to="/Men">Men</Link>&nbsp;
              <Link to="/Women">Women</Link>&nbsp;
              <Link to="/Kids">Kids</Link>&nbsp;
              <Link to="/Beauty">Beauty</Link>
            </span>

            <Searchbar />
            <Link to="/cart" style={{ marginLeft: '10px', textDecoration: 'none', color: 'inherit' }}>
              <i className="fa fa-shopping-cart" aria-hidden="true"></i> Cart
            </Link>
          </div>
        </div>

        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/Men" element={<Men />}>
              <Route path="Shirt" element={<Shirt />} />
              <Route path="Tshirt" element={<Tshirt />} />
              <Route path="Pants" element={<Pants />} />
            </Route>

            <Route path="/Women" element={<Women />}>
              <Route path="Tops" element={<Tops />} />
              <Route path="Dresses" element={<Dresses />} />
              <Route path="Jeans" element={<Jeans />} />
            </Route>

            <Route path="/Kids" element={<Kids />} >
              <Route path="BoysSet" element={<BoysSet />} />
              <Route path="GirlsSet" element={<GirlsSet/>} />
              <Route path="EthnicWear" element={<Ethnicwear />} />
            </Route>

            <Route path="/Beauty" element={<Beauty/>}>
              <Route path="Face" element={<Face />} />
              <Route path="Lips" element={<Lips/>} />
              <Route path="Nails" element={<Nails />}/>
            </Route>
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;