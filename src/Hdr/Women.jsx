import { Link, Outlet, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function Women() {
  const location = useLocation();
  const isWomenComponent = location.pathname === '/Women';

  const marqueeContainerStyle = {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    marginBottom: '20px',
  };

  const marqueeStyleLeft = {
    display: 'inline-block',
    paddingLeft: '100%',
    animation: 'womenMarqueeLeft 10s linear infinite',
  };

  const marqueeStyleRight = {
    display: 'inline-block',
    paddingRight: '100%',
    animation: 'womenMarqueeRight 10s linear infinite',
  };

  const imageStyle = {
    height: '150px',
    width: '150px',
    margin: '0 20px',
  };

  const largeImageStyle = {
    width: '100%',
    maxWidth: '800px',
    borderRadius: '10px',
    boxShadow: '10px 20px 50px black',
  };

  // Inject styles only for this component
  const styleSheet = document.createElement('style');
  styleSheet.type = 'text/css';
  styleSheet.innerHTML = `
    @keyframes womenMarqueeLeft {
      0% { transform: translateX(0); }
      100% { transform: translateX(-100%); }
    }
    @keyframes womenMarqueeRight {
      0% { transform: translateX(0); }
      100% { transform: translateX(100%); }
    }
  `;
  document.head.appendChild(styleSheet);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center', color: '#fff', marginBottom: '20px' }}>Women's Section</h1>

      {/* Navigation Links */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '30px' }}>
        <Link to="/Women/Tops" style={linkStyle}>Tops</Link>
        <Link to="/Women/Dresses" style={linkStyle}>Dresses</Link>
        <Link to="/Women/Jeans" style={linkStyle}>Jeans</Link>
      </div>

      {/* Marquee Section */}
      {isWomenComponent && (
        <div style={{ marginBottom: '30px' }}>
          {/* First Image - Left to Right */}
          <div style={marqueeContainerStyle}>
            <div style={marqueeStyleLeft}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX5e6AahRRHpCiScw8JzYbNo3NMZkrr59VNA&s"
                alt="Fashion 1"
                style={imageStyle}
              />
            </div>
          </div>

          {/* Second Image - Right to Left */}
          <div style={marqueeContainerStyle}>
            <div style={marqueeStyleRight}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQinCsBeb-BPXLRgGTsIvPeWdeu7rbN4CS4wQ&s"
                alt="Fashion 2"
                style={imageStyle}
              />
            </div>
          </div>
        </div>
      )}


      <hr/>

      {/* Large Image Section */}
      {isWomenComponent && (
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '50px' }}>
          <img
            src="https://theimpression.com/wp-content/uploads/2023/04/tom-ford-fall-23-womens-collectionthe-impression-001.jpg"
            alt="Tom Ford Women's Collection"
            style={largeImageStyle}
          />
        </div>
      )}


      {isWomenComponent && (
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '50px' }}>
          <video
            autoPlay
            loop
            muted
            style={{ width: '100%', maxWidth: '80%', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}
          >
            <source src="https://mediastorage.livestory.io/armani/posts/optimized/67c45435d0902949e238f034.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}

      {/* Outlet for Child Components */}
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
  ':hover': {
    color: '#000',
    backgroundColor: '#0ff',
    boxShadow: '0 0 20px #0ff, 0 0 40px #0ff',
  },
};