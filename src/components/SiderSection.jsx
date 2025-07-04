'use client';
import React, { useRef } from 'react';
import Slider from "@/components/Slider";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const SiderSection = () => {
    const testimonials = [
        {
            clientName: "Sarah Johnson",
            rating: 5,
            testimonial: "I received my order in just two days and the quality is amazing! Will definitely shop again."
        },
        {
            clientName: "Mark Thompson",
            rating: 4,
            testimonial: "Great selection of products and smooth checkout process. One item was slightly delayed, but support handled it well."
        },
        {
            clientName: "Ayesha Khan",
            rating: 5,
            testimonial: "Loved everything I ordered! The packaging was neat and everything arrived safely. Highly recommended!"
        },
        {
            clientName: "David Lee",
            rating: 3,
            testimonial: "Products are decent for the price. Delivery took a bit longer than expected, but overall happy."
        },
        {
            clientName: "Emily Clark",
            rating: 5,
            testimonial: "Excellent quality and fast shipping! This is my new favorite online store."
        },
        {
            clientName: "Carlos Mendes",
            rating: 4,
            testimonial: "User-friendly website and secure payment. Got exactly what I ordered."
        },
        {
            clientName: "Priya Desai",
            rating: 5,
            testimonial: "Very impressed with the product quality. Everything fits perfectly and looks just like the pictures."
        },
        {
            clientName: "Liam Wilson",
            rating: 4,
            testimonial: "Good pricing and reliable service. My third order, and never disappointed!"
        },
        {
            clientName: "Fatima Noor",
            rating: 5,
            testimonial: "Super happy with my purchase. Great deals and the support team was very helpful with my queries."
        },
        {
            clientName: "James Anderson",
            rating: 3,
            testimonial: "It was okay. Some items were out of stock after I ordered, but I got a refund quickly."
        }
    ];

    const sliderRef = useRef(null);

    const scrollSlider = (direction) => {
        if (!sliderRef.current) return;
        const containerWidth = sliderRef.current.clientWidth;
        let scrollBy = containerWidth;

        sliderRef.current.scrollBy({
            left: direction === "next" ? scrollBy : -scrollBy,
            behavior: "smooth",
        });
    };

    return (
        <>
            <div className="flex justify-between items-center">
                <h2 className="mt-8 mb-14 font-integrl text-3xl md:text-4xl lg:text-5xl text-black font-black">our Hppy Coustmers</h2>
                <div className="flex items-center gap-2 text-xl">
                    <button onClick={() => scrollSlider("prev")}>
                        <FaArrowLeft />
                    </button>
                    <button onClick={() => scrollSlider("next")}>
                        <FaArrowRight />
                    </button>
                </div>
            </div>

            <div ref={sliderRef} className="flex overflow-x-auto scroll-smooth no-scrollbar -mx-2 gap-2">
                {testimonials.map((testimonial, i) => (
                    <div
                        key={i}
                        className="w-full px-2 sm:w-1/2 lg:w-1/3 shrink-0 border-1 border-gray-300 rounded-2xl"
                    >
                        <Slider testimonial={testimonial} />
                    </div>
                ))}
            </div>
        </>
    );
};

export default SiderSection;
