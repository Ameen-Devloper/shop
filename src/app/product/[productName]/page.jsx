import Star from '@/components/Star'
import Image from 'next/image'
import React from 'react'

const ProductDetailPage = async (props) => {
    // const productName = await props.params.productName

    return (
        <div className='container grid grid-cols-1 md:grid-cols-2 px-4 md:px-14 gap-4 mt-10'>
            <div className='flex gap-4 flex-col-reverse md:flex-row'>
                <div className='min-w-[20%] flex flex-row md:flex-col gap-4'>
                    <div className='bg-red-300 relative w-full h-[120px] rounded-2xl overflow-hidden'>
                        <Image src={"/image 8.png"} fill />
                    </div>
                    <div className='bg-red-300 relative w-full h-[120px] rounded-2xl overflow-hidden'>
                        <Image src={"/image 8.png"} fill />
                    </div>
                    <div className='bg-red-300 relative w-full h-[120px] rounded-2xl overflow-hidden'>
                        <Image src={"/image 8.png"} fill />
                    </div>
                </div>
                <div className='bg-yellow-300 w-full relative h-[400px]'>
                    <Image src={"/image 8.png"} fill />
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <h1 className='uppercase text-2xl font-bold font-integrl'>One Life Graphic T-shirt</h1>
                <Star stars={4.5} />
                <div>
                    <span className='text-xl font-bold'>$260</span>
                </div>
                <div>
                    <p>This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.</p>

                </div>
                <div className='flex gap-4 flex-col'>
                    <p>Select Colors</p>
                    <div className='flex gap-2'>
                        <div className='h-8 w-8 rounded-full bg-amber-400'></div>
                        <div className='h-8 w-8 rounded-full bg-amber-400'></div>
                        <div className='h-8 w-8 rounded-full bg-amber-400'></div>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <p className="text-base font-medium text-gray-800">Choose Size</p>
                    <div className="flex gap-3">
                        <div className="px-4 py-2 text-black cursor-pointer rounded-full text-sm bg-pri">
                            Small
                        </div>
                        <div className="px-4 py-2 text-black cursor-pointer rounded-full text-sm bg-pri">
                            Medium
                        </div>
                        <div className="px-4 py-2 text-black cursor-pointer rounded-full text-sm bg-pri">
                            Large
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-4 mt-6">
                    {/* Quantity Selector */}
                    <div className="flex items-center border border-gray-300 bg-pri rounded-full px-3 py-2">
                        <button className="text-xl px-2 font-bold">-</button>
                        <span className="px-4">1</span>
                        <button className="text-xl px-2 font-bold">+</button>
                    </div>

                    {/* Add to Cart Button */}
                    <button className="bg-black text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition-all w-full">
                        Add to Cart
                    </button>
                </div>


            </div>
        </div>
    )
}

export default ProductDetailPage