import React from 'react';
import { Calendar, Gauge, Fuel, CheckCircle2, MessageCircle, ShieldCheck, FileCheck, Banknote } from 'lucide-react';

export const IconCalendar = ({ className }: { className?: string }) => <Calendar className={className} />;
export const IconSpeed = ({ className }: { className?: string }) => <Gauge className={className} />;
export const IconFuel = ({ className }: { className?: string }) => <Fuel className={className} />;
export const IconCheck = ({ className }: { className?: string }) => <CheckCircle2 className={className} />;
export const IconWhatsApp = ({ className }: { className?: string }) => <MessageCircle className={className} />;
export const IconShield = ({ className }: { className?: string }) => <ShieldCheck className={className} />;
export const IconFileCheck = ({ className }: { className?: string }) => <FileCheck className={className} />;
export const IconBank = ({ className }: { className?: string }) => <Banknote className={className} />;