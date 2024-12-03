import React from 'react';
import './Gallery.css';

import BackgroundVideo from './g_pic/BackgroundVideo.mp4'; // Original background video path
import NewVideo from './g_pic/new.mp4'; // New video path

import gallery2 from './g_pic/gallery2.png';
import gallery3 from './g_pic/gallery3.png';
import gallery6 from './g_pic/gallery6.png';
import gallery7 from './g_pic/gallery7.png';
import gallery8 from './g_pic/gallery8.png';
import gallery9 from './g_pic/gallery9.png';
import gallery10 from './g_pic/gallery11.png';
import gallery11 from './g_pic/gallery12.png';
import gallery12 from './g_pic/gallery13.png';


const Gallery = () => {
  const images = [
    { src: gallery2, alt: 'Description of Gallery 2', className: 'image-medium' },
    { src: gallery3, alt: 'Description of Gallery 3', className: 'image-small' },
    { src: gallery6, alt: 'Description of Gallery 6', className: 'image-large' },
    { src: gallery7, alt: 'Description of Gallery 7', className: 'image-medium' },
    { src: gallery8, alt: 'Description of Gallery 8', className: 'image-small' },
    { src: gallery9, alt: 'Description of Gallery 9', className: 'image-large' },
    { src: gallery10, alt: 'Description of Gallery 10', className: 'image-small' },
    { src: gallery11, alt: 'Description of Gallery 11', className: 'image-medium' },
    { src: gallery12, alt: 'Description of Gallery 12', className: 'image-large' },
    
  ];

  return (
    <div className="gallery-page">
      {/* Background Video Section */}
      <div className="video-container background-video-container">
        <video className="background-video" autoPlay loop muted>
          <source src={BackgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* New Video Section on top of the background video */}
      <div className="video-container new-video-container">
        <video className="new-video" autoPlay loop muted>
          <source src={NewVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      <div className="gallery-content">
        <h1 className="gallery-title"></h1>
        <div className="gallery-grid">
          {images.map((image, index) => (
            <div key={index} className="gallery-item">
              <img src={image.src} alt={image.alt} className={`gallery-image ${image.className}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
