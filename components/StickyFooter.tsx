import React from 'react';
import { IconWhatsApp } from './Icons';
import { formatCurrency } from '../services/utils';

interface StickyFooterProps {
  price: number;
  onCtaClick: () => void;
}

export const StickyFooter: React.FC<StickyFooterProps> = ({ price, onCtaClick }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-carbon-900/95 backdrop-blur-lg border-t border-white/10 pb-8 sm:pb-4 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.8)]">
      <div className="max-w-md mx-auto flex flex-col gap-3">
        
        <div className="flex justify-between items-end px-1">
          <div className="flex flex-col">
            <span className="text-[10px] text-gray-400 uppercase font-semibold tracking-wider">Preço à vista</span>
            <span className="text-2xl font-black text-white tracking-tight">{formatCurrency(price)}</span>
          </div>
          <span className="text-xs text-gray-400 mb-1 font-medium">ou financiado</span>
        </div>

        <button 
          onClick={onCtaClick}
          className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white font-bold py-4 rounded-xl shadow-lg shadow-orange-500/20 flex items-center justify-center gap-3 transition-all active:scale-[0.98] border border-white/10"
        >
          <IconWhatsApp className="w-6 h-6 fill-white/20" />
          <span className="tracking-wide text-lg uppercase">QUERO FINANCIAR AGORA</span>
        </button>
      </div>
    </div>
  );
};