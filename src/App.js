import React from 'react';
import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import Beauty from './Hdr/Beauty';
import Kids from './Hdr/Kids';
import Men from './Hdr/Men';
import Women from './Hdr/Women';
import Home from './Hdr/Home';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import Footer from './Footer';
import Searchbar from './Searchbar';

function App() {
  return (
    <div>
      <div id="hdr">
        <div className="header-content">
          <Link to="/">
            <img src="https://yt3.googleusercontent.com/Ub82oVs7TuqHki5LechxBBs2f4Uldl_6R0PAK5HbwJxucp_dPr-w5MGaxU3gnTx9IVs0e8Kg=s900-c-k-c0x00ffffff-no-rj" alt="Logo" style={{ width: '100px' }}/>
          </Link>

          <span className="nav-links">
            <Link to="/">Home</Link>&nbsp;
            <Link to="/Men">Men</Link>&nbsp;
            <Link to="/Women">Women</Link>&nbsp;
            <Link to="/Kids">Kids</Link>&nbsp;
            <Link to="/Beauty">Beauty</Link>
          </span>

          <Searchbar />
        </div>
      </div>

      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Men" element={<Men />} />
          <Route path="/Women" element={<Women />} />
          <Route path="/Kids" element={<Kids />} />
          <Route path="/Beauty" element={<Beauty />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;