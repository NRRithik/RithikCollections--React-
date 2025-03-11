import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Kids = () => {
  const location = useLocation();
  const isKidsComponent = location.pathname === '/Kids';

  const carouselStyle = {
    width: '100%',
    maxWidth: '800px',
    margin: '0 auto',
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  };

  const imageStyle = {
    width: '100%',
    height: '400px',
    objectFit: 'cover',
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center', color: '#fff', marginBottom: '20px' }}>Kids' Section</h1>

      {/* Navigation Links */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '30px' }}>
        <Link to="/Kids/BoysSet" style={linkStyle}>BoysSet</Link>
        <Link to="/Kids/GirlsSet" style={linkStyle}>GirlsSet</Link>
        <Link to="/Kids/EthnicWear" style={linkStyle}>Ethnic Wear</Link>
      </div>

      {isKidsComponent && (
        <div style={{ marginBottom: '50px' }}>
          <img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/b86a7c22671541.571b887c1806b.jpg"
            alt="Kids Fashion"
            style={imageStyle}
          />
        </div>
      )}

      {/* Carousel Section - Only visible in the Kids component */}
      {isKidsComponent && (
        <div style={{ marginBottom: '50px' }}>
          <div id="kidsCarousel" className="carousel slide" data-bs-ride="carousel" style={carouselStyle}>
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#kidsCarousel" data-bs-slide-to="0" className="active"></button>
              <button type="button" data-bs-target="#kidsCarousel" data-bs-slide-to="1"></button>
              <button type="button" data-bs-target="#kidsCarousel" data-bs-slide-to="2"></button>
              <button type="button" data-bs-target="#kidsCarousel" data-bs-slide-to="3"></button>
            </div>

            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4qJGCT4yfZFwZxIscirmFIbM4Uaxvxbx-DA&s"
                  alt="Kids Fashion 1"
                  style={imageStyle}
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQD5F7hb2kLH5-2FBQJl8hpB4kPycufAlF8g&s"
                  alt="Kids Fashion 2"
                  style={imageStyle}
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvS664aAn7MPlz7hlGVgObUbCEqK4EJc2G7g&s"
                  alt="Kids Fashion 3"
                  style={imageStyle}
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwOSKCA-iADWV-qzLJTgjktDE1jb8y8hXVvg&s"
                  alt="Kids Fashion 4"
                  style={imageStyle}
                />
              </div>
            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#kidsCarousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#kidsCarousel" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      )}

      {/* Outlet for Child Components */}
      <Outlet />
    </div>
  );
};

export default Kids;

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