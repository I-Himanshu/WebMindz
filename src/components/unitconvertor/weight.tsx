"use client";
import React, { useState } from 'react';

const Weight: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [fromUnit, setFromUnit] = useState<string>('kilograms');
  const [toUnit, setToUnit] = useState<string>('pounds');
  const [result, setResult] = useState<string>('');

  const weightUnits = [
    { label: 'Kilograms', value: 'kilograms' },
    { label: 'Pounds', value: 'pounds' },
    { label: 'Grams', value: 'grams' },
    { label: 'Ounces', value: 'ounces' },
  ];

  const handleConvert = () => {
    const input = parseFloat(inputValue);

    if (!isNaN(input)) {
      let convertedValue: number;

      // Define conversion factors for weight units here
      const kilogramsToPounds = 2.20462;
      const kilogramsToGrams = 1000;
      const kilogramsToOunces = 35.274;
      const poundsToKilograms = 1 / kilogramsToPounds;
      const gramsToKilograms = 1 / kilogramsToGrams;
      const ouncesToKilograms = 1 / kilogramsToOunces;
      const poundsToGrams = kilogramsToGrams * kilogramsToPounds;
      const poundsToOunces = kilogramsToOunces * kilogramsToPounds;
      const gramsToPounds = 1 / poundsToGrams;
      const gramsToOunces = 1 / poundsToOunces;
      const ouncesToPounds = 1 / poundsToOunces;
      const ouncesToGrams = 1 / gramsToOunces;

      if (fromUnit === 'kilograms' && toUnit === 'pounds') {
        convertedValue = input * kilogramsToPounds;
      } else if (fromUnit === 'kilograms' && toUnit === 'grams') {
        convertedValue = input * kilogramsToGrams;
      } else if (fromUnit === 'kilograms' && toUnit === 'ounces') {
        convertedValue = input * kilogramsToOunces;
      } else if (fromUnit === 'pounds' && toUnit === 'kilograms') {
        convertedValue = input * poundsToKilograms;
      } else if (fromUnit === 'grams' && toUnit === 'kilograms') {
        convertedValue = input * gramsToKilograms;
      } else if (fromUnit === 'ounces' && toUnit === 'kilograms') {
        convertedValue = input * ouncesToKilograms;
      } else if (fromUnit === 'pounds' && toUnit === 'grams') {
        convertedValue = input * poundsToGrams;
      } else if (fromUnit === 'pounds' && toUnit === 'ounces') {
        convertedValue = input * poundsToOunces;
      } else if (fromUnit === 'grams' && toUnit === 'pounds') {
        convertedValue = input * gramsToPounds;
      } else if (fromUnit === 'grams' && toUnit === 'ounces') {
        convertedValue = input * gramsToOunces;
      } else if (fromUnit === 'ounces' && toUnit === 'pounds') {
        convertedValue = input * ouncesToPounds;
      } else if (fromUnit === 'ounces' && toUnit === 'grams') {
        convertedValue = input * ouncesToGrams;
      } else {
        // Handle other unit conversions here
        convertedValue = input;
      }

      setResult(`${inputValue} ${fromUnit} is ${convertedValue.toFixed(2)} ${toUnit}`);
    } else {
      setResult('Invalid input');
    }
  };

  return (
    <div className="p-0 rounded-lg overflow-hidden secondaryFont shadow-md bg-[#080716]">
      <p className='blueGrad primaryFont text-white text-center text-xl py-2'>Weight</p>
      <div className="flex flex-col p-6 gap-2 secondaryFont">
        <input
          type="number"
          className="border-2 rounded-sm p-2 text-black transition-all hover:border-blue-500 hover:outline-none outline-none my-1"
          placeholder="Enter a value"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <select
          className="border-2 rounded-sm p-2 text-black transition-all hover:border-blue-500 hover:outline-none outline-none my-1"
          value={fromUnit}
          onChange={(e) => setFromUnit(e.target.value)}
        >
          {weightUnits.map((unit) => (
            <option className='secondaryFont' key={unit.value} value={unit.value}>
              {unit.label}
            </option>
          ))}
        </select>

        <select
          className="border-2 rounded-sm p-2 text-black transition-all hover:border-blue-500 hover:outline-none outline-none my-1"
          value={toUnit}
          onChange={(e) => setToUnit(e.target.value)}
        >
          {weightUnits.map((unit) => (
            <option className='secondaryFont' key={unit.value} value={unit.value}>
              {unit.label}
            </option>
          ))}
        </select>
        <button
          className="blueGrad text-white secondaryFont py-2 px-4 rounded-md transition-all opacity-75 hover:opacity-100"
          onClick={handleConvert}
        >
          Convert
        </button>
        <div className="secondaryFont blueGradText">{result}</div>
      </div>
    </div>
  );
};

export default Weight;

  