"use client"
import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const ColorSelector = () => {
    const colors = [
        "#00C12B", "#F50606", "#F50D06", "#F57906", "#06CAF5",
        "#063AF5", "#7D06F5", "#F50DA4", "#F506A4", "#000000"
    ];

    const [selectedColor, setSelectedColor] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const handleSelectColor = (color) => {
        setSelectedColor(color);
        console.log("Selected color:", color);
    };

    return (
        <div className="max-w-md mx-auto">
            {/* Toggle Header */}
            <div
                className="flex items-center justify-between cursor-pointer "
                onClick={() => setIsOpen(!isOpen)}
            >
                <h2 className="text-lg font-semibold">Select Color</h2>
                <IoIosArrowDown
                    className={`transition-transform duration-300 text-xl ${isOpen ? "rotate-180" : ""}`}
                />
            </div>

            {/* Animated Section */}
            <div
                className={`transition-all duration-500 overflow-hidden ${isOpen ? "max-h-[500px]" : "max-h-0"}`}
            >
                <div className="grid grid-cols-5 gap-2 mb-3">
                    {colors.map((color, i) => (
                        <div
                            key={i}
                            onClick={() => handleSelectColor(color)}
                            className={`h-10 w-10 rounded-full cursor-pointer relative border-2 ${selectedColor === color ? "border-black" : "border-transparent"
                                }`}
                            style={{ backgroundColor: color }}
                        >
                            {selectedColor === color && (
                                <FaCheck className="text-white text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                            )}
                        </div>
                    ))}
                </div>

                {/* Show selected color */}
                {selectedColor && (
                    <p className="text-sm text-gray-700">
                        Selected Color: <span className="font-medium">{selectedColor}</span>
                    </p>
                )}
            </div>
        </div>
    );
};

export default ColorSelector;
