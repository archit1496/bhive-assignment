import { create } from 'zustand';

interface Space {
  id: string;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  city: string;
  state: string;
  country: string;
  postal_code: string;
  amenities: string[] | null;
  images: string;
  day_pass_price: number;
  day_pass_discounts_percentage: Record<string, { value: number; message: string }>;
}

interface SpaceStore {
  spaces: Space[];
  setSpaces: (spaces: Space[]) => void;
}

export const useSpaceStore = create<SpaceStore>((set) => ({
  spaces: [],
  setSpaces: (spaces) => set({ spaces }),
})); 