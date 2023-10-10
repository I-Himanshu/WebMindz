"use client";
import React, { useState } from 'react';

const UnitConverter: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [fromUnit, setFromUnit] = useState<string>('meters');
  const [toUnit, setToUnit] = useState<string>('feet');
  const [result, setResult] = useState<string>('');

  const handleConvert = () => {
    const input = parseFloat(inputValue);

    if (!isNaN(input)) {
      let convertedValue: number;

      // Define conversion factors here
      const metersToFeet = 3.28084;
      const feetToMeters = 1 / metersToFeet;

      if (fromUnit === 'meters' && toUnit === 'feet') {
        convertedValue = input * metersToFeet;
      } else if (fromUnit === 'feet' && toUnit === 'meters') {
        convertedValue = input * feetToMeters;
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
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#15132f] w-full p-6 md:p-12 lg:p-20 relative">
      <div className="flex flex-row justify-center items-center w-full z-20">
        <p className="blueGradText secondaryFont text-3xl md:text-5xl lg:text-7xl md:leading-[4rem]">Convert the Units!</p>
        <img className="w-32" src="https://cdn3d.iconscout.com/3d/premium/thumb/cute-robot-with-creative-idea-6374843-5272689.png?f=webp" alt="" />
      </div>
      <div className="p-6 rounded-lg shadow-md bg-[#080716]">
        <div className="flex flex-col gap-2 secondaryFont">
          <input
            type="number"
            className="border p-2"
            placeholder="Enter a value"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <select
            className="border p-2"
            value={fromUnit}
            onChange={(e) => setFromUnit(e.target.value)}
          >
            <option value="meters">Meters</option>
            <option value="feet">Feet</option>
            {/* Add other units as needed */}
          </select>
          <select
            className="border p-2"
            value={toUnit}
            onChange={(e) => setToUnit(e.target.value)}
          >
            <option value="meters">Meters</option>
            <option value="feet">Feet</option>
            {/* Add other units as needed */}
          </select>
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700"
            onClick={handleConvert}
          >
            Convert
          </button>
          <div className="text-green-600">{result}</div>
        </div>
      </div>
    </main>
  );
};

export default UnitConverter;
