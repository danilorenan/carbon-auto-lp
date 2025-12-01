import React from 'react';
import { IconBank, IconCheck } from './Icons';
import { formatCurrency } from '../services/utils';

interface FinancingCardProps {
  downPayment: number;
  monthlyPayment: number;
}

export const FinancingCard: React.FC<FinancingCardProps> = ({ downPayment, monthlyPayment }) => {
  return (
    <section className="px-4 py-4 w-full">
      <div className="max-w-md mx-auto">
        {/* Container updated for "Bank Simulator" look */}
        <div className="glass-panel rounded-xl p-[1px] relative overflow-hidden group shadow-2xl shadow-black/50">
          
          <div className="bg-[#121212] backdrop-blur-xl rounded-xl p-6 border border-white/10 relative z-10">
            
            {/* Header: Bank Approval Look */}
            <div className="flex items-center gap-4 mb-6 border-b border-white/5 pb-5">
              <div className="p-3 bg-white/5 rounded-xl border border-white/10 shadow-inner">
                <IconBank className="w-8 h-8 text-green-400" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg leading-tight">Crédito Pré-Aprovado</h3>
                <div className="flex items-center gap-1.5 text-green-400 text-xs font-bold uppercase tracking-wider mt-1">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span>Disponível agora</span>
                </div>
              </div>
            </div>

            {/* Financial Details */}
            <div className="space-y-5">
              <div className="flex justify-between items-end">
                <span className="text-gray-400 text-sm font-medium">Entrada Sugerida</span>
                <span className="text-white font-mono font-bold text-lg tracking-tight">{formatCurrency(downPayment)}</span>
              </div>
              
              {/* Highlight Box */}
              <div className="p-4 bg-white/[0.03] rounded-xl border border-white/10 flex flex-col items-center text-center shadow-inner">
                <span className="text-[10px] text-gray-400 uppercase font-bold tracking-[0.2em] mb-2">Parcelas a partir de</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-xl text-gray-500 font-medium">60x</span>
                  {/* Neon Green Highlight */}
                  <span className="text-3xl font-black text-lime-400 drop-shadow-[0_0_8px_rgba(163,230,53,0.3)]">
                    {formatCurrency(monthlyPayment)}
                  </span>
                </div>
              </div>
            </div>

            {/* Secondary CTA - Updated to match the Vibrancy */}
            <button className="w-full mt-6 py-4 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 rounded-xl text-white font-bold transition-all shadow-lg shadow-orange-500/20 flex justify-center items-center gap-2 active:scale-[0.98]">
               Simular com meu CPF
            </button>
            
            <p className="text-center text-[10px] text-gray-600 mt-3">
              *Sujeito à análise de crédito e disponibilidade.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};