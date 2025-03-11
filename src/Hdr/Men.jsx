import { Link, Outlet, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function Men() {
  const location = useLocation();
  const isMenComponent = location.pathname === '/Men';

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
      <h1 style={{ textAlign: 'center', color: '#fff', marginBottom: '20px' }}>Men's Section</h1>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '30px' }}>
        <Link to="/Men/Shirt" style={linkStyle}>Shirts</Link>
        <Link to="/Men/Tshirt" style={linkStyle}>Tshirts</Link>
        <Link to="/Men/Pants" style={linkStyle}>Pants</Link>
      </div>

      {isMenComponent && (
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '50px' }}>
          <img
            src="https://wwd.com/wp-content/uploads/2024/07/Ralph_Lauren_RTW_SS25_Runway_ARS_0001.jpg?crop=0px%2C624px%2C2037px%2C1143px&resize=1000%2C563"
            alt="Ralph Lauren runway fashion"
            style={{ width: '100%', maxWidth: '800px', borderRadius: '10px', boxShadow: '10px 20px 50px black' }}
          />
        </div>
      )}

      {isMenComponent && (
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '50px' }}>
          <video
            autoPlay
            loop
            muted
            style={{ width: '100%', maxWidth: '800px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}
          >
            <source src="https://image.hm.com/content/dam/global_campaigns/season_01/men/start-page-assets/w10/MS21E1_15A_GFX_MASTERv2-16-9.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}

      

      {/* Additional Images Section */}
      {isMenComponent && (
        <div style={{ display: 'flex', justifyContent: 'center', gap: '50px', marginTop: '50px', marginBottom: '50px' }}>
          <img
            src="https://static01.nyt.com/images/2013/09/16/business/adco/adco-articleLarge.jpg?quality=75&auto=webp&disable=upscale"
            alt="Men's fashion advertisement"
            style={{ width: '45%', maxWidth: '50%',maxHeight: '1100px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}
          />
          <img
            src="https://i.pinimg.com/736x/3a/1e/0c/3a1e0c96820f3ec971401b7f6afa134b.jpg"
            alt="Trendy men's outfit"
            style={{ width: '45%', maxWidth: '50%',maxHeight: '1100px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}
          />
        </div>
      )}

      {isMenComponent && (
        <div id="demo" className="carousel slide" data-bs-ride="carousel" style={carouselStyle}>
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
            <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
            <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
          </div>

          <div className="carousel-inner" style={{ height: '100%' }}>
            <div className="carousel-item active" style={{ height: '100%' }}>
              <img
                src="https://successmenswear.com/cdn/shop/files/DSC01040aax_d0a127f3-752b-4099-8f78-3cdff9fdf6e0_533x.jpg?v=1738310823"
                alt="Men's formal wear collection"
                className="d-block"
                style={imageStyle}
              />
            </div>
            <div className="carousel-item" style={{ height: '100%' }}>
              <img
                src="https://www.candere.com/static/version1741346621/frontend/Codilar/candere_mobile/en_US/Magento_Cms/images/mens_collection/banner.jpg"
                alt="Men's fashion banner"
                className="d-block"
                style={imageStyle}
              />
            </div>
            <div className="carousel-item" style={{ height: '100%' }}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk6cNMC5RF1LZ-oOvV53KfmH5457EkMjymhg&s"
                alt="Stylish men's outfit"
                className="d-block"
                style={imageStyle}
              />
            </div>
          </div>

          <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
      )}

      <Outlet />
    </div>
  );
}

const linkStyle = {
  textDecoration: 'none',
  color: '#0ff',
  backgroundColor: '#000',
  padding: '10px 20px',
  borderRadius: '5px',
  border: '2px solid #0ff',
  boxShadow: '0 0 10px #0ff, 0 0 20px #0ff',
  transition: 'all 0.3s ease',
  fontSize: '18px',
  fontWeight: 'bold',
};