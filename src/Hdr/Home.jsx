import React, { Component } from 'react';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0, // State to track the active image index
    };
  }

  // Function to handle dot clicks
  handleDotClick = (index) => {
    this.setState({ activeIndex: index });
  };

  render() {
    const carouselStyle = { width: '800px', height: '750px', margin: 'auto' };
    const imageStyle = { width: '100%', height: '100%', objectFit: 'cover' };

    // Array of image URLs for the hide/block feature
    const images = [
      'https://www.realmenrealstyle.com/wp-content/uploads/2023/09/charcoal-gray-suit.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2_NkfOIEN_-6gelUG-Mqy2BkNzecgSz9TMbwiPGoyMmLqZ9uuiRkk4QE4wJs3xR4K80&usqp=CAU',
      'https://i.etsystatic.com/30129981/c/1024/1024/0/0/il/5c30df/5628331878/il_300x300.5628331878_8wqi.jpg',
    ];

    const dotContainerStyle = {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '10px',
    };

    const dotStyle = {
      width: '10px',
      height: '10px',
      borderRadius: '50%',
      backgroundColor: '#ccc',
      margin: '0 5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    };

    const activeDotStyle = {
      ...dotStyle,
      backgroundColor: '#000',
    };

    return (
      <div>
        {/* Carousel starts here */}
        <div id="demo" className="carousel slide" data-bs-ride="carousel" style={carouselStyle}>
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
            <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
            <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
          </div>

          <div className="carousel-inner" style={{ height: '100%' }}>
            <div className="carousel-item active" style={{ height: '100%' }}>
              <img src="https://img.freepik.com/free-photo/naughty-shopping-woman-smiling-wearing-hat-isolated-green-background_231208-4935.jpg" alt="First slide" className="d-block" style={imageStyle} />
            </div>
            <div className="carousel-item" style={{ height: '100%' }}>
              <img src="https://5.imimg.com/data5/HR/PH/MY-43691381/60-500x500.jpg" alt="Second slide" className="d-block" style={imageStyle} />
            </div>
            <div className="carousel-item" style={{ height: '100%' }}>
              <img src="https://www.cotstyle.com/cdn/shop/articles/portrait-handsome-stylish-hipster-lambersexual-model_158538-18001.jpg?v=1693385841" alt="Third slide" className="d-block" style={imageStyle} />
            </div>
          </div>

          <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </button>

          <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
        {/* Carousel ends here */}

        {/* Active Image Display with Dots Below */}
        <div style={{ textAlign: 'center', marginTop: '30px' }}>
          <div style={{ marginTop: '20px' }}>
            <img
              src={images[this.state.activeIndex]}
              alt={`Slide ${this.state.activeIndex + 1}`}
              style={{ width: '300px', height: '300px', objectFit: 'cover', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}
            />
          </div>
          <div style={dotContainerStyle}>
            {images.map((_, index) => (
              <div
                key={index}
                style={index === this.state.activeIndex ? activeDotStyle : dotStyle}
                onClick={() => this.handleDotClick(index)}
              />
            ))}
          </div>
        </div>

        
      </div>
    );
  }
}
