import React from 'react';
import affordable from '../assets/affordable.svg';
import gymFacility from '../assets/gymFacility.svg'
import highSpeed from '../assets/highSpeed.svg'
import cafeAndTea from '../assets/cafeAndTea.svg'
import comfortLounge from '../assets/comfortLounge.svg'
import quickBooking from '../assets/quickBooking.svg'
import sportsArea from '../assets/sportsArea.svg'
import communityEvents from '../assets/communityEvents.svg'
const Features = () => {
  const features = [
    { src: communityEvents, title: 'Community Events' },
    { src: gymFacility, title: 'Gym Facilities' },
    { src: highSpeed, title: 'High-Speed WiFi' },
    { src: cafeAndTea, title: 'Cafe & Tea Bar' },
    { src: affordable, title: 'Affordable' },
    { src: comfortLounge, title: 'Comfort Lounges' },
    { src: quickBooking, title: 'Quick Booking' },
    { src: sportsArea, title: 'Sports Area' },
  ];

  return (
    <section className="features">
      <h2>Why Choose us?</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-item">
            {/* <span className="feature-icon">{feature.icon}</span> */}
            <img src={feature.src} alt={feature.title} className="logo" />
            <p className="feature-title">{feature.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features; 