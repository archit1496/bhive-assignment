import React from 'react';
import { useSpaceStore } from '../store/useSpaceStore';
import SpaceCard from './SpaceCard';

const SpaceList: React.FC = () => {
  const spaces = useSpaceStore((state) => state.spaces);

  return (
    <div className="space-list">
      {spaces.map((space) => (
        <SpaceCard key={space.id} space={space} />
      ))}
    </div>
  );
};

export default SpaceList; 