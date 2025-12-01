import React from 'react';
import { IconWhatsApp } from './Icons';

interface HeaderProps {
  storeName: string;
}

export const Header: React.FC<HeaderProps> = ({ storeName }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 py-3 glass-panel border-b border-white/5 bg-black/50 backdrop-blur-xl">
      <div className="max-w-md mx-auto flex justify-between items-center">
        <div className="flex flex-col">
          <span className="text-[10px] text-gray-400 tracking-widest uppercase">Loja Verificada</span>
          <h1 className="text-lg font-bold text-white tracking-wide">{storeName}</h1>
        </div>
        <button className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-full transition-all border border-white/10">
          <IconWhatsApp className="w-4 h-4 text-[#25D366]" />
          <span className="text-xs font-medium">Fale Conosco</span>
        </button>
      </div>
    </header>
  );
};