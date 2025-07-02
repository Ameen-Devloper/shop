import React from 'react'
import Image from 'next/image'
import Star from './Star'
const ProductCard = ({ product }) => {
    return (
        <div className='flex flex-col gap-3'>
            <div className='bg-[#F2F0F1] rounded-4xl flex justify-center items-center overflow-hidden'>
                <Image src={product.image} height={300} width={300} alt={product.title} />
            </div>
            <h2 className='text-xl font-bold'>{product.title}</h2>
            <Star stars={product.rating} />
            <p className='text-2xl font-bold'>${product.price}</p>
        </div>
    )
}

export default ProductCard