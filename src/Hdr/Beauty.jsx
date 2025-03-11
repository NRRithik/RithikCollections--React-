import React, { Component } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

export default class Beauty extends Component {
  render() {
    return (
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <h1 style={{ textAlign: 'center', color: '#fff', marginBottom: '20px' }}>Beauty Section</h1>

        {/* Navigation Links */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '30px' }}>
          <Link to="/Beauty/Face" style={linkStyle}>Face</Link>
          <Link to="/Beauty/Lips" style={linkStyle}>Lips</Link>
          <Link to="/Beauty/Nails" style={linkStyle}>Nails</Link>
        </div>

        {/* Image Section - Only visible in the Beauty component */}
        <BeautyImage />

        {/* Outlet for Child Components */}
        <Outlet />
      </div>
    );
  }
}

// Functional component to handle conditional rendering of the image
const BeautyImage = () => {
  const location = useLocation();
  const isBeautyComponent = location.pathname === '/Beauty';

  const imageStyle = {
    width: '100%',
    maxWidth: '800px',
    borderRadius: '10px',
    boxShadow: '10px 20px 50px black',
    margin: '20px auto',
    display: 'block',
  };

  return (
    <>
      {isBeautyComponent && (
        <div style={{ marginBottom: '50px' }}>
          <img
            src="https://d3lzcn6mbbadaf.cloudfront.net/media/details/kar_covraug6_wxHt2eC.jpg"
            alt="Beauty Products"
            style={imageStyle}
          />
        </div>
      )}

      <center>
        {isBeautyComponent && (
          <div style={{ marginBottom: '50px' }}>
            <img
              src="https://www.bizkl.com/coverimgs/default.jpg"
              alt="Beauty Products"
            />
          </div>
        )}
      </center>

    </>
  );
};

// Style for the links
const linkStyle = {
  textDecoration: 'none',
  color: '#0ff', // Neon cyan color
  backgroundColor: '#000', // Black background
  padding: '10px 20px',
  borderRadius: '5px',
  border: '2px solid #0ff', // Neon border
  boxShadow: '0 0 10px #0ff, 0 0 20px #0ff', // Neon glow effect
  transition: 'all 0.3s ease',
  fontSize: '18px',
  fontWeight: 'bold',
  ':hover': {
    color: '#000', // Black text on hover
    backgroundColor: '#0ff', // Neon cyan background on hover
    boxShadow: '0 0 20px #0ff, 0 0 40px #0ff', // Enhanced glow on hover
  },
};