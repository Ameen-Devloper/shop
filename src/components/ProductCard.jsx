import React from 'react'
import Image from 'next/image'
import Star from './Star'
const ProductCard = ({ product }) => {
    return (
        <>
            <div className='flex flex-col gap-3'>
                <div className='bg-[#F2F0F1] rounded-xl flex justify-center items-center overflow-hidden'>
                    <Image src={product.image} height={300} width={300} alt={product.title} className='h-[200px] lg:h-[300px]' />
                </div>
                <h2 className='text-lg lg:text-xl font-bold'>{product.title}</h2>
                <Star stars={product.rating} />
                <p className='text-xl lg:text-2xl font-bold'>${product.price}</p>
            </div>
        </>
    )
}

export default ProductCard