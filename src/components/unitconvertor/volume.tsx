"use client";
import React, { useState } from 'react';

const Volume: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [fromUnit, setFromUnit] = useState<string>('liters');
  const [toUnit, setToUnit] = useState<string>('gallons');
  const [result, setResult] = useState<string>('');

  const volumeUnits = [
    { label: 'Liters', value: 'liters' },
    { label: 'Gallons', value: 'gallons' },
    { label: 'Milliliters', value: 'milliliters' },
    { label: 'Cubic Inches', value: 'cubicInches' },
  ];

  const handleConvert = () => {
    const input = parseFloat(inputValue);

    if (!isNaN(input)) {
      let convertedValue: number;

      // Define conversion factors for volume units here
      const litersToGallons = 0.264172;
      const litersToMilliliters = 1000;
      const litersToCubicInches = 61.0237;
      const gallonsToLiters = 1 / litersToGallons;
      const millilitersToLiters = 1 / litersToMilliliters;
      const cubicInchesToLiters = 1 / litersToCubicInches;
      const gallonsToMilliliters = litersToMilliliters * litersToGallons;
      const gallonsToCubicInches = litersToCubicInches * litersToGallons;
      const millilitersToGallons = 1 / gallonsToMilliliters;
      const millilitersToCubicInches = 1 / gallonsToCubicInches;
      const cubicInchesToGallons = 1 / gallonsToCubicInches;
      const cubicInchesToMilliliters = 1 / millilitersToCubicInches;

      if (fromUnit === 'liters' && toUnit === 'gallons') {
        convertedValue = input * litersToGallons;
      } else if (fromUnit === 'liters' && toUnit === 'milliliters') {
        convertedValue = input * litersToMilliliters;
      } else if (fromUnit === 'liters' && toUnit === 'cubicInches') {
        convertedValue = input * litersToCubicInches;
      } else if (fromUnit === 'gallons' && toUnit === 'liters') {
        convertedValue = input * gallonsToLiters;
      } else if (fromUnit === 'milliliters' && toUnit === 'liters') {
        convertedValue = input * millilitersToLiters;
      } else if (fromUnit === 'cubicInches' && toUnit === 'liters') {
        convertedValue = input * cubicInchesToLiters;
      } else if (fromUnit === 'gallons' && toUnit === 'milliliters') {
        convertedValue = input * gallonsToMilliliters;
      } else if (fromUnit === 'gallons' && toUnit === 'cubicInches') {
        convertedValue = input * gallonsToCubicInches;
      } else if (fromUnit === 'milliliters' && toUnit === 'gallons') {
        convertedValue = input * millilitersToGallons;
      } else if (fromUnit === 'milliliters' && toUnit === 'cubicInches') {
        convertedValue = input * millilitersToCubicInches;
      } else if (fromUnit === 'cubicInches' && toUnit === 'gallons') {
        convertedValue = input * cubicInchesToGallons;
      } else if (fromUnit === 'cubicInches' && toUnit === 'milliliters') {
        convertedValue = input * cubicInchesToMilliliters;
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
      <p className='blueGrad primaryFont text-white text-center text-xl py-2'>Volume</p>
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
          {volumeUnits.map((unit) => (
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
          {volumeUnits.map((unit) => (
            <option className='secondaryFont' key={unit.value} value={unit.value}>
              {unit.label}
            </option>
          ))}
        </select>
        <button
          className="blueGrad secondaryFont text-white py-2 px-4 rounded-md transition-all opacity-75 hover:opacity-100"
          onClick={handleConvert}
        >
          Convert
        </button>
        <div className="secondaryFont blueGradText">{result}</div>
      </div>
    </div>
  );
};

export default Volume;


  