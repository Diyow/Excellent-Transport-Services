'use client'

import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const CurrencyContext = createContext(null);

// Static conversion rates, IDR base
// Update these as needed or plug an API later.
const IDR_PER_USD = 16000; // approx
const IDR_PER_AUD = 10500; // approx

export const CURRENCIES = {
  IDR: 'IDR',
  USD: 'USD',
  AUD: 'AUD',
};

function convertAmount(amount, fromCurrency, toCurrency) {
  if (toCurrency === fromCurrency) return amount;
  // Normalize via IDR
  let amountInIDR = amount;
  if (fromCurrency === CURRENCIES.USD) amountInIDR = amount * IDR_PER_USD;
  if (fromCurrency === CURRENCIES.AUD) amountInIDR = amount * IDR_PER_AUD;

  if (toCurrency === CURRENCIES.IDR) return amountInIDR;
  if (toCurrency === CURRENCIES.USD) return amountInIDR / IDR_PER_USD;
  if (toCurrency === CURRENCIES.AUD) return amountInIDR / IDR_PER_AUD;
  return amountInIDR; // fallback
}

function formatCurrency(amount, currency) {
  switch (currency) {
    case CURRENCIES.IDR:
      return `Rp${Math.round(amount).toLocaleString('id-ID')}`;
    case CURRENCIES.USD:
      return `$${(Math.round(amount * 100) / 100).toFixed(2)}`;
    case CURRENCIES.AUD:
      return `A$${(Math.round(amount * 100) / 100).toFixed(2)}`;
    default:
      return String(amount);
  }
}

export function CurrencyProvider({ children }) {
  const [currency, setCurrency] = useState(CURRENCIES.IDR);

  useEffect(() => {
    const saved = typeof window !== 'undefined' ? window.localStorage.getItem('selectedCurrency') : null;
    if (saved && [CURRENCIES.IDR, CURRENCIES.USD, CURRENCIES.AUD].includes(saved)) {
      setCurrency(saved);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('selectedCurrency', currency);
    }
  }, [currency]);

  const value = useMemo(() => ({
    currency,
    setCurrency,
    convertAmount,
    formatCurrency,
    IDR_PER_USD,
    IDR_PER_AUD,
  }), [currency]);

  return (
    <CurrencyContext.Provider value={value}>{children}</CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const ctx = useContext(CurrencyContext);
  if (!ctx) throw new Error('useCurrency must be used within CurrencyProvider');
  return ctx;
}