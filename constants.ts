import { CarConfig } from './types';

// In a real scenario, images would be transparent PNGs of the specific cars.
// Using Unsplash/placeholder URLs for demo purposes.
export const CARS_CONFIG: Record<string, CarConfig> = {
  civic: {
    id: 'civic',
    name: 'Honda Civic 1.5 Touring Turbo',
    category: 'Sedan Premium',
    image: 'https://images.unsplash.com/photo-1605812860427-4024433a70fd?q=80&w=1000&auto=format&fit=crop', 
    specs: [
      { iconType: 'calendar', value: '2021/2022', label: 'Ano' },
      { iconType: 'speed', value: '45.000km', label: 'Quilometragem' },
      { iconType: 'fuel', value: 'Gasolina', label: 'Combustível' },
    ]
  },
  hilux: {
    id: 'hilux',
    name: 'Toyota Hilux 2.8 SRX 4x4 Diesel',
    category: 'Off-Road',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1000&auto=format&fit=crop',
    specs: [
      { iconType: 'calendar', value: '2022/2023', label: 'Ano' },
      { iconType: 'speed', value: '12.500km', label: 'Quilometragem' },
      { iconType: 'fuel', value: 'Diesel', label: 'Combustível' },
    ]
  },
  compass: {
    id: 'compass',
    name: 'Jeep Compass 1.3 T270 Longitude',
    category: 'SUV',
    image: 'https://i.ibb.co/BHNzLqb3/jeep-compass-serie-s-2025-3.webp',
    specs: [
      { iconType: 'calendar', value: '2023/2023', label: 'Ano' },
      { iconType: 'speed', value: '0km', label: 'Zero Km' },
      { iconType: 'fuel', value: 'Flex', label: 'Combustível' },
    ]
  },
  porsche: {
    id: 'porsche',
    name: 'Porsche 911 Carrera S',
    category: 'Superesportivo',
    image: 'https://images.unsplash.com/photo-1503376763036-066120622c74?q=80&w=1000&auto=format&fit=crop',
    specs: [
      { iconType: 'calendar', value: '2020/2021', label: 'Ano' },
      { iconType: 'speed', value: '18.000km', label: 'Quilometragem' },
      { iconType: 'fuel', value: 'Gasolina', label: 'Combustível' },
    ]
  }
};

export const DEFAULT_STORE_NAME = 'Premium Motors';
export const DEFAULT_CAR_KEY = 'civic';
export const DEFAULT_PRICE = 159900;