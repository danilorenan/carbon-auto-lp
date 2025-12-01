import React, { useMemo } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { FinancingCard } from './components/FinancingCard';
import { TrustBadges } from './components/TrustBadges';
import { StickyFooter } from './components/StickyFooter';
import { CARS_CONFIG, DEFAULT_CAR_KEY, DEFAULT_PRICE, DEFAULT_STORE_NAME } from './constants';
import { calculateInstallments, generateWhatsAppLink } from './services/utils';

const App: React.FC = () => {
  // Parse URL Parameters
  // Note: In React 18 / standard SPA, we check window.location.search
  // This allows links like ?carro=hilux&preco=250000&loja=Toyota+Sul&wpp=5511999999999
  const searchParams = useMemo(() => new URLSearchParams(window.location.search), []);

  const storeName = searchParams.get('loja') || DEFAULT_STORE_NAME;
  const carKey = searchParams.get('carro')?.toLowerCase() || DEFAULT_CAR_KEY;
  const totalParam = searchParams.get('preco');
  const downPaymentParam = searchParams.get('entrada');
  
  // 1. CAPTURA O WHATSAPP DA URL
  const whatsappParam = searchParams.get('wpp');

  // Resolve Car Data (Fallback to default if key doesn't exist)
  const car = CARS_CONFIG[carKey] || CARS_CONFIG[DEFAULT_CAR_KEY];

  // Resolve Financials
  const totalPrice = totalParam ? Number(totalParam) : DEFAULT_PRICE;
  // If no down payment specified, assume 30%
  const downPayment = downPaymentParam ? Number(downPaymentParam) : totalPrice * 0.3;
  
  const monthlyPayment = calculateInstallments(totalPrice, downPayment);

  // Handle CTA Click
  const handleCtaClick = () => {
    // 2. USA O NÚMERO DA URL (Ou um fallback de segurança se não vier nada)
    const phoneNumber = whatsappParam || "5511999999999"; 
    
    const message = `Olá *${storeName}*, vi o *${car.name}* no site especial e quero simular financiamento.`;
    
    const link = generateWhatsAppLink(phoneNumber, message);
    window.open(link, '_blank');
  };

  return (
    <div className="min-h-screen bg-carbon-pattern font-sans text-gray-100 selection:bg-action-DEFAULT selection:text-white">
      <Header storeName={storeName} />
      
      {/* Added pb-48 to prevent Sticky Footer from covering content */}
      <main className="flex flex-col items-center w-full pb-48">
        <HeroSection car={car} />
        
        <FinancingCard 
          downPayment={downPayment} 
          monthlyPayment={monthlyPayment} 
        />
        
        <TrustBadges />
      </main>

      <StickyFooter 
        price={totalPrice} 
        onCtaClick={handleCtaClick} 
      />
    </div>
  );
};

export default App;