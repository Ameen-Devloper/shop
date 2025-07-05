"use client"

import React, { useState, useRef, useEffect } from "react";


const PriceBarSelector = () => {
    const [minPrice, setMinPrice] = useState(2500);
    const [maxPrice, setMaxPrice] = useState(8500);
    const priceGap = 500;
    const maxLimit = 10000;

    const sliderRef = useRef(null);

    const handleInputChange = (type, value) => {
        let min = type === "min" ? parseInt(value) : minPrice;
        let max = type === "max" ? parseInt(value) : maxPrice;

        if (min < 0) min = 0;
        if (max > maxLimit) max = maxLimit;
        if (min > max - priceGap) min = max - priceGap;
        if (max < min + priceGap) max = min + priceGap;

        setMinPrice(min);
        setMaxPrice(max);
    };

    const handleRangeChange = (type, value) => {
        let min = type === "min" ? parseInt(value) : minPrice;
        let max = type === "max" ? parseInt(value) : maxPrice;

        if (max - min < priceGap) {
            if (type === "min") min = max - priceGap;
            else max = min + priceGap;
        }

        setMinPrice(min);
        setMaxPrice(max);
    };

    return (
        <div className="main">
            <div className="gfg">
                <p>GeeksForGeeks</p>
            </div>
            <div className="custom-wrapper">
                <div className="header">
                    <h2 className="projtitle">Price Range Slider</h2>
                </div>
                <div className="price-input-container">
                    <div className="price-input">
                        <div className="price-field">
                            <span>Minimum Price</span>
                            <input
                                type="number"
                                className="min-input"
                                value={minPrice}
                                onChange={(e) => handleInputChange("min", e.target.value)}
                            />
                        </div>
                        <div className="price-field">
                            <span>Maximum Price</span>
                            <input
                                type="number"
                                className="max-input"
                                value={maxPrice}
                                onChange={(e) => handleInputChange("max", e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Slider Track */}
                    <div className="slider" ref={sliderRef}>
                        <div
                            className="price-slider"
                            style={{
                                left: `${(minPrice / maxLimit) * 100}%`,
                                right: `${100 - (maxPrice / maxLimit) * 100}%`,
                            }}
                        ></div>
                    </div>
                </div>

                {/* Range Inputs */}
                <div className="range-input">
                    <input
                        type="range"
                        className="min-range"
                        min="0"
                        max={maxLimit}
                        value={minPrice}
                        onChange={(e) => handleRangeChange("min", e.target.value)}
                    />
                    <input
                        type="range"
                        className="max-range"
                        min="0"
                        max={maxLimit}
                        value={maxPrice}
                        onChange={(e) => handleRangeChange("max", e.target.value)}
                    />
                </div>
            </div>
        </div>
    );
};

export default PriceBarSelector;
