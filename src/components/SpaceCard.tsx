import React from 'react';
import daypassArrow from "../assets/dayPassArrow.svg"
import direction from "../assets/direction.svg"
interface SpaceCardProps {
  space: {
    id: string;
    name: string;
    address: string;
    images: string;
    day_pass_price: number;
    day_pass_discounts_percentage: Record<string, { value: number; message: string }>;
  };
}

const SpaceCard: React.FC<SpaceCardProps> = ({ space }) => {
  return (
    <div className="space-card">
     
      <div className="space-card-content">
        <div className='spaceNameDiv'>
        <h3>{space.name}</h3>
        <div className='direction'>
          <img src={direction}></img>
          <span className='kilomiterText'>6 km</span>
        </div>
        </div>
        <div className="space-card-header">
        <span className="workspace-tag">⚡ Workspace</span>
        <span className="share-icon">⋮</span>
      </div>
      <img className="spaceImage" src={space.images} alt={space.name} />
        <div className="price-section">
          <div className="day-pass">
            <div>
            <p>Day Pass</p>
            <p className="price">₹ {space.day_pass_price}<span className='daily-pass-day'>/Day</span></p>
            </div>
            <img  src={daypassArrow}></img>
          </div>
          <div className="bulk-pass">
            <div>
            <p>Bulk Pass</p>
            <p className="price">₹ 2400<span className='daily-pass-day'>/10 Days</span></p>
            </div>
            <img  src={daypassArrow}></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpaceCard; 