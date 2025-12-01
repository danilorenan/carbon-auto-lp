export interface CarSpec {
  iconType: 'calendar' | 'speed' | 'fuel';
  value: string;
  label: string;
}

export interface CarConfig {
  id: string;
  name: string;
  image: string; // URL to image
  category: string;
  specs: CarSpec[];
}

export interface FinancingSimulation {
  price: number;
  downPayment: number;
  installments: number;
  installmentValue: number;
}