import React from 'react';
import spaceImage1 from '../assets/spaceImage1.svg'
interface SpaceCardProps {
  space: {
    id: string;
    name: string;
    address: string;
    images: string[];
    day_pass_price: number;
    day_pass_discounts_percentage: Record<string, { value: number; message: string }>;
  };
}

const SpaceCard: React.FC<SpaceCardProps> = ({ space }) => {
  return (
    <div className="space-card">
      <div className="space-card-header">
        <span className="workspace-tag">⚡ Workspace</span>
        <span className="share-icon">⋮</span>
      </div>
      <img src={space.images} alt={space.name} />
      <div className="space-card-content">
        <h3>{space.name}</h3>
        <p className="address">{space.address}</p>
        <div className="price-section">
          <div className="day-pass">
            <p>Day Pass</p>
            <p className="price">₹ {space.day_pass_price}/Day</p>
          </div>
          <div className="bulk-pass">
            <p>Bulk Pass</p>
            <p className="price">₹ 2400/10 Days</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpaceCard; 