import React from 'react';
import { CarConfig } from '../types';
import { IconCalendar, IconSpeed, IconFuel } from './Icons';

interface HeroSectionProps {
  car: CarConfig;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ car }) => {
  return (
    <section className="relative pt-24 pb-8 px-4 overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-64 h-64 bg-action-DEFAULT/20 blur-[100px] rounded-full -z-10" />

      <div className="max-w-md mx-auto flex flex-col items-center text-center">
        
        {/* Badge */}
        <div className="inline-block bg-action-DEFAULT text-white text-[10px] font-bold px-3 py-1 rounded-sm tracking-wider uppercase mb-6 shadow-glow animate-pulse">
          Oportunidade Única
        </div>

        {/* Car Image - Designed to look like it's floating */}
        <div className="relative w-full aspect-[4/3] mb-6 group">
          <img 
            src={car.image} 
            alt={car.name} 
            className="w-full h-full object-cover rounded-xl shadow-float transform transition-transform duration-700 group-hover:scale-105"
          />
          {/* Asphalt Shadow Sim - if image was transparent PNG, we would use a flat oval shadow. Since it's a photo, we use box shadow. */}
        </div>

        {/* Car Name */}
        <h2 className="text-sm text-gray-400 uppercase tracking-[0.2em] mb-1">{car.category}</h2>
        <h1 className="text-3xl font-black text-white leading-tight mb-8 font-sans">
          {car.name}
        </h1>

        {/* Specs Grid */}
        <div className="grid grid-cols-3 gap-3 w-full">
          {car.specs.map((spec, index) => {
            const Icon = spec.iconType === 'calendar' ? IconCalendar : spec.iconType === 'speed' ? IconSpeed : IconFuel;
            return (
              <div key={index} className="glass-panel p-3 rounded-lg flex flex-col items-center justify-center gap-2 border border-white/5 bg-gradient-to-br from-white/5 to-transparent">
                <Icon className="w-5 h-5 text-action-DEFAULT" />
                <div className="flex flex-col">
                  <span className="text-white font-bold text-sm">{spec.value}</span>
                  <span className="text-[10px] text-gray-500 uppercase">{spec.label}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};