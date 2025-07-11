"use client"
import ColorSelector from '@/components/ColorSelector'
import PriceBarSelector from '@/components/PriceBarSelector'
import Image from 'next/image'
import React, { useEffect } from 'react';
import filterIcon from "../../../public/Vector.png"
import { FaAngleRight } from "react-icons/fa6";
import PriceRangeSlider from '@/components/PriceRangeSlider';
import SizeSlection from '@/components/SizeSlection';
import DressStyleSelector from '@/components/DressStyleSelector';
import ProductCard from '@/components/ProductCard'
import productImage1 from "../../../public/image 8.png"
import MobileFiter from '@/components/MobileFiter';
import axios from 'axios';



const CasusalPage = () => {
    const products = [
        {
            id: 1,
            title: "Gradient Graphic T-shirt",
            price: 145,
            originalPrice: null,
            discount: null,
            rating: 3.95,
            image: productImage1, // Replace with actual image import
        },
        {
            id: 2,
            title: "Polo with Tipping Details",
            price: 180,
            originalPrice: null,
            discount: null,
            rating: 4.65,
            image: productImage1,
        },
        {
            id: 3,
            title: "Black Striped T-shirt",
            price: 120,
            originalPrice: 150,
            discount: "20%",
            rating: 3.05,
            image: productImage1,
        },
        {
            id: 4,
            title: "Skinny Fit Jeans",
            price: 240,
            originalPrice: 260,
            discount: "20%",
            rating: 4.3,
            image: productImage1,
        },
        {
            id: 5,
            title: "Checkered Shirt",
            price: 180,
            originalPrice: null,
            discount: null,
            rating: 4.85,
            image: productImage1,
        },
        {
            id: 6,
            title: "Sleeve Striped T-shirt",
            price: 130,
            originalPrice: 160,
            discount: "20%",
            rating: 3.6,
            image: productImage1,
        },
        {
            id: 7,
            title: "Vertical Striped Shirt",
            price: 212,
            originalPrice: 232,
            discount: "20%",
            rating: 4.25,
            image: productImage1,
        },
        {
            id: 8,
            title: "Courage Graphic T-shirt",
            price: 145,
            originalPrice: null,
            discount: null,
            rating: 4.85,
            image: productImage1,
        },
        {
            id: 9,
            title: "Loose Fit Bermuda Shorts",
            price: 80,
            originalPrice: null,
            discount: null,
            rating: 3.05,
            image: productImage1,
        },
    ];
    const handleSubmit = async () => {
        try {
            const response = await axios.post("/api/createProduct", { productImage: "ameen", productTitle: "ali", Price: "grat" })
            console.log(response.data.message);

        } catch (error) {
            console.log(error);

        }
    }
    useEffect(() => {
        handleSubmit()
    }, [])


    const categories = ["T-shirts", "Shorts", "Shirts", "Hoodie", "Jeans"]
    return (
        <div className='container mx-auto px-4 lg:px-14 grid grid-cols-1 md:grid-cols-4 gap-4 mt-14'>
            <div className='hidden md:flex flex-col gap-4 border-2 border-gray-200 rounded-2xl py-4 px-6 h-fit lg:sticky top-6'>
                <div className='flex justify-between items-center '>
                    <h1 className='text-lg font-bold'>Filters</h1>
                    <Image src={filterIcon} height={"auto"} width={"auto"} />
                </div>
                <div className='border-1 border-gray-200'></div>
                <div>
                    <ul className='font-satoshi space-y-2'>
                        {
                            categories.map((category, i) => (
                                <li className='flex justify-between items-center'><span>{category}</span> <FaAngleRight /></li>
                            ))
                        }
                    </ul>
                </div>
                <PriceRangeSlider />
                <div>
                    <ColorSelector />
                </div>
                <div>
                    <SizeSlection />
                </div>
                <div>
                    <DressStyleSelector />
                </div>
                <div className='w-full'>
                    <button className='bg-black w-full rounded-full py-2 text-white'>Apply Filter</button>
                </div>
            </div>
            {/* Mobile Filter */}
            <div className='block md:hidden w-[340px]'>
                <div>
                    <MobileFiter />
                </div>
            </div>
            <div className='col-span-3 grid grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    products.map((product) => (
                        <ProductCard product={product} />
                    ))
                }
            </div>
        </div >
    )
}

export default CasusalPage