export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};

export const calculateInstallments = (total: number, downPayment: number): number => {
  // Simple mock logic: (Total - Entry) * Interest Factor / 60 months
  // Interest factor mock: 1.4 (total cost over time)
  const financedAmount = total - downPayment;
  if (financedAmount <= 0) return 0;
  
  const totalWithInterest = financedAmount * 1.5; 
  return Math.ceil(totalWithInterest / 60);
};

export const generateWhatsAppLink = (phone: string, text: string): string => {
  const encodedText = encodeURIComponent(text);
  return `https://wa.me/${phone}?text=${encodedText}`;
};