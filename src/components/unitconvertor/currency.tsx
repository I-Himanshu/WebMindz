"use client";
import React, { useState } from 'react';

const CurrencyConverter: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [fromCurrency, setFromCurrency] = useState<string>('USD');
  const [toCurrency, setToCurrency] = useState<string>('EUR');
  const [result, setResult] = useState<string>('');

  const currencies = [
    { label: 'US Dollar (USD)', value: 'USD' },
    { label: 'Euro (EUR)', value: 'EUR' },
    { label: 'British Pound (GBP)', value: 'GBP' },
    { label: 'Japanese Yen (JPY)', value: 'JPY' },
    { label: 'Indian Rupee (INR)', value: 'INR' },
    // Add more currencies here
  ];

  const handleConvert = () => {
    const input = parseFloat(inputValue);

    if (!isNaN(input)) {
      let convertedValue: number;

      // Define currency conversion rates here
      const usdToEur = 0.85;
      const usdToGbp = 0.73;
      const usdToJpy = 112.25;
      const usdToInr = 75.0;

      // Additional conversion rates
      const eurToInr = 88.24;
      const eurToJpy = 132.05;
      const eurToGbp = 0.85;
      const gbpToEur = 1.17;
      const gbpToJpy = 149.61;
      const gbpToInr = 101.75;
      const jpyToInr = 0.77;
      const jpyToGbp = 0.0067;
      const jpyToEur = 0.0076;
      const inrToEur = 0.0113;
      const inrToGbp = 0.0098;
      const inrToJpy = 1.29;

      // Handle currency conversions
      if (fromCurrency === 'USD' && toCurrency === 'EUR') {
        convertedValue = input * usdToEur;
      } else if (fromCurrency === 'USD' && toCurrency === 'GBP') {
        convertedValue = input * usdToGbp;
      } else if (fromCurrency === 'USD' && toCurrency === 'JPY') {
        convertedValue = input * usdToJpy;
      } else if (fromCurrency === 'USD' && toCurrency === 'INR') {
        convertedValue = input * usdToInr;
      } else if (fromCurrency === 'EUR' && toCurrency === 'USD') {
        convertedValue = input / usdToEur;
      } else if (fromCurrency === 'GBP' && toCurrency === 'USD') {
        convertedValue = input / usdToGbp;
      } else if (fromCurrency === 'JPY' && toCurrency === 'USD') {
        convertedValue = input / usdToJpy;
      } else if (fromCurrency === 'INR' && toCurrency === 'USD') {
        convertedValue = input / usdToInr;
      } else if (fromCurrency === 'EUR' && toCurrency === 'INR') {
        convertedValue = input * eurToInr;
      } else if (fromCurrency === 'EUR' && toCurrency === 'JPY') {
        convertedValue = input * eurToJpy;
      } else if (fromCurrency === 'EUR' && toCurrency === 'GBP') {
        convertedValue = input * eurToGbp;
      } else if (fromCurrency === 'GBP' && toCurrency === 'EUR') {
        convertedValue = input / eurToGbp;
      } else if (fromCurrency === 'GBP' && toCurrency === 'JPY') {
        convertedValue = input * gbpToJpy;
      } else if (fromCurrency === 'GBP' && toCurrency === 'INR') {
        convertedValue = input * gbpToInr;
      } else if (fromCurrency === 'JPY' && toCurrency === 'INR') {
        convertedValue = input * jpyToInr;
      } else if (fromCurrency === 'JPY' && toCurrency === 'GBP') {
        convertedValue = input / gbpToJpy;
      } else if (fromCurrency === 'JPY' && toCurrency === 'EUR') {
        convertedValue = input / eurToJpy;
      } else if (fromCurrency === 'INR' && toCurrency === 'EUR') {
        convertedValue = input * inrToEur;
      } else if (fromCurrency === 'INR' && toCurrency === 'GBP') {
        convertedValue = input * inrToGbp;
      } else if (fromCurrency === 'INR' && toCurrency === 'JPY') {
        convertedValue = input * inrToJpy;
      } else {
        convertedValue = input;
      }

      setResult(`${inputValue} ${fromCurrency} is ${convertedValue.toFixed(2)} ${toCurrency}`);
    } else {
      setResult('Invalid input');
    }
  };

  return (
    <div className="p-0 rounded-lg overflow-hidden secondaryFont shadow-md bg-[#080716]">
      <p className='blueGrad primaryFont text-white text-center text-xl py-2'>Currency Converter</p>
      <div className="flex flex-col p-6 gap-2 secondaryFont">
        <input
          type="number"
          className="border-2 rounded-sm p-2 text-black transition-all hover:border-blue-500 hover:outline-none outline-none my-1"
          placeholder="Enter an amount"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <select
          className="border-2 rounded-sm p-2 text-black transition-all hover:border-blue-500 hover:outline-none outline-none my-1"
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
        >
          {currencies.map((currency) => (
            <option className='secondaryFont' key={currency.value} value={currency.value}>
              {currency.label}
            </option>
          ))}
        </select>

        <select
          className="border-2 rounded-sm p-2 text-black transition-all hover:border-blue-500 hover:outline-none outline-none my-1"
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
        >
          {currencies.map((currency) => (
            <option className='secondaryFont' key={currency.value} value={currency.value}>
              {currency.label}
            </option>
          ))}
        </select>
        <button
          className="blueGrad text-white py-2 px-4 secondaryFont rounded-md transition-all opacity-75 hover:opacity-100"
          onClick={handleConvert}
        >
          Convert
        </button>
        <div className="secondaryFont blueGradText">{result}</div>
      </div>
    </div>
  );
};

export default CurrencyConverter;
