"use client";
import React, { useState } from 'react';

const Length: React.FC = () => {
    const [inputValue, setInputValue] = useState<string>('');
    const [fromUnit, setFromUnit] = useState<string>('meters');
    const [toUnit, setToUnit] = useState<string>('feet');
    const [result, setResult] = useState<string>('');

    const lengthUnits = [
        { label: 'Meters', value: 'meters' },
        { label: 'Feet', value: 'feet' },
        { label: 'Inches', value: 'inches' },
        { label: 'Yards', value: 'yards' },
    ];

    const handleConvert = () => {
        const input = parseFloat(inputValue);

        if (!isNaN(input)) {
            let convertedValue: number;

            // Define conversion factors here
            const metersToFeet = 3.28084;
            const metersToInches = 39.3701;
            const metersToYards = 1.09361;
            const feetToMeters = 1 / metersToFeet;
            const inchesToMeters = 1 / metersToInches;
            const yardsToMeters = 1 / metersToYards;
            const feetToInches = 12;
            const feetToYards = 1 / 3;
            const inchesToFeet = 1 / feetToInches;
            const inchesToYards = 1 / (feetToInches * feetToYards);
            const yardsToFeet = 3;
            const yardsToInches = yardsToFeet * feetToInches;

            if (fromUnit === 'meters' && toUnit === 'feet') {
                convertedValue = input * metersToFeet;
            } else if (fromUnit === 'meters' && toUnit === 'inches') {
                convertedValue = input * metersToInches;
            } else if (fromUnit === 'meters' && toUnit === 'yards') {
                convertedValue = input * metersToYards;
            } else if (fromUnit === 'feet' && toUnit === 'meters') {
                convertedValue = input * feetToMeters;
            } else if (fromUnit === 'inches' && toUnit === 'meters') {
                convertedValue = input * inchesToMeters;
            } else if (fromUnit === 'yards' && toUnit === 'meters') {
                convertedValue = input * yardsToMeters;
            } else if (fromUnit === 'feet' && toUnit === 'inches') {
                convertedValue = input * feetToInches;
            } else if (fromUnit === 'feet' && toUnit === 'yards') {
                convertedValue = input * feetToYards;
            } else if (fromUnit === 'inches' && toUnit === 'feet') {
                convertedValue = input * inchesToFeet;
            } else if (fromUnit === 'inches' && toUnit === 'yards') {
                convertedValue = input * inchesToYards;
            } else if (fromUnit === 'yards' && toUnit === 'feet') {
                convertedValue = input * yardsToFeet;
            } else if (fromUnit === 'yards' && toUnit === 'inches') {
                convertedValue = input * yardsToInches;
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
        <div className="p-0 rounded-lg overflow-hidden shadow-md bg-[#080716] secondaryFont">
            <p className='blueGrad primaryFont text-white text-center text-xl py-2'>Length</p>
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
                    {lengthUnits.map((unit) => (
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
                    {lengthUnits.map((unit) => (
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

export default Length;
