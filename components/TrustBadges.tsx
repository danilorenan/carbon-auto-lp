import React from 'react';
import { IconCheck, IconShield, IconFileCheck } from './Icons';

export const TrustBadges: React.FC = () => {
  const badges = [
    { icon: IconFileCheck, text: "Laudo Cautelar Aprovado", sub: "100% de Integridade" },
    { icon: IconShield, text: "Garantia de 3 Meses", sub: "Motor e Câmbio" },
    { icon: IconCheck, text: "IPVA 2025 Grátis", sub: "Condição Especial" },
  ];

  return (
    <section className="px-4 py-6 w-full mb-32">
      <div className="max-w-md mx-auto space-y-3">
        {badges.map((badge, idx) => {
          const Icon = badge.icon;
          return (
            <div key={idx} className="flex items-center gap-4 p-3 rounded-lg border-l-2 border-action-DEFAULT bg-gradient-to-r from-white/5 to-transparent">
              <div className="bg-carbon-900 p-2 rounded-full border border-white/10">
                <Icon className="w-5 h-5 text-gray-300" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-white">{badge.text}</span>
                <span className="text-xs text-gray-500">{badge.sub}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};