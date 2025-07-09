"use client"
import React, { useState, useEffect } from 'react';
import { IoIosArrowDown } from "react-icons/io";

const PriceRangeSlider = () => {
    const [minValue, setMinValue] = useState(2500);
    const [maxValue, setMaxValue] = useState(8500);
    const [isOpen, setIsOpen] = useState(false);
    const priceGap = 500;
    const maxLimit = 10000;

    useEffect(() => {
        if (maxValue - minValue < priceGap) {
            if (minValue + priceGap <= maxLimit) {
                setMaxValue(minValue + priceGap);
            } else {
                setMinValue(maxValue - priceGap);
            }
        }
    }, [minValue, maxValue]);

    const handleMinChange = (e) => {
        const value = parseInt(e.target.value);
        if (value < maxValue - priceGap) setMinValue(value);
    };

    const handleMaxChange = (e) => {
        const value = parseInt(e.target.value);
        if (value > minValue + priceGap) setMaxValue(value);
    };

    const leftPercent = (minValue / maxLimit) * 100;
    const rightPercent = 100 - (maxValue / maxLimit) * 100;

    return (
        <div className="w-full max-w-3xl mx-auto font-sans relative">
            {/* Header with toggle */}
            <div
                className="flex justify-between items-center cursor-pointer select-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                <h2 className="text-lg font-bold">Price Range</h2>
                <IoIosArrowDown
                    className={`text-xl transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                        }`}
                />
            </div>

            {/* Collapsible Section */}
            <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-[500px] mt-4" : "max-h-0"
                    }`}
            >
                {/* Min / Max Labels */}
                <div className="flex justify-between mb-1 px-1 text-sm font-medium">
                    <span>${minValue}</span>
                    <span>${maxValue}</span>
                </div>

                {/* Slider Track */}
                <div className="relative h-2 bg-gray-200 rounded-md">
                    <div
                        className="absolute h-full bg-black rounded-md"
                        style={{ left: `${leftPercent}%`, right: `${rightPercent}%` }}
                    />
                </div>

                {/* Range Inputs */}
                <div className="relative h-6 mt-0">
                    <input
                        type="range"
                        min="0"
                        max={maxLimit}
                        value={minValue}
                        onChange={handleMinChange}
                        className="absolute w-full h-2 appearance-none pointer-events-none -mt-1"
                        style={{ zIndex: 2 }}
                    />
                    <input
                        type="range"
                        min="0"
                        max={maxLimit}
                        value={maxValue}
                        onChange={handleMaxChange}
                        className="absolute w-full h-2 appearance-none pointer-events-none -mt-1"
                        style={{ zIndex: 3 }}
                    />

                    <style>
                        {`
              input[type='range']::-webkit-slider-thumb {
                appearance: none;
                pointer-events: all;
                height: 18px;
                width: 18px;
                border-radius: 50%;
                background-color: black;
                border: 2px solid white;
                margin-top: -8px;
                position: relative;
                z-index: 10;
                cursor: pointer;
              }

              input[type='range']::-moz-range-thumb {
                pointer-events: all;
                height: 18px;
                width: 18px;
                border-radius: 50%;
                background-color: black;
                border: 2px solid white;
                position: relative;
                z-index: 10;
                cursor: pointer;
              }
            `}
                    </style>
                </div>
            </div>
        </div>
    );
};

export default PriceRangeSlider;
