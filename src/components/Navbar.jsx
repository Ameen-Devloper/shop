"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'
import search_icon from "../../public/search_icon.png"
import cart_icon from "../../public/cart.png"
import user_icon from "../../public/user.png"



const Navbar = () => {
    const meunItems = [
        {
            href: "/",
            menu: "Shop"
        },
        {
            href: "/",
            menu: "On Sale"
        },
        {
            href: "/",
            menu: "New Arivals"
        },
        {
            href: "/",
            menu: "Brand"
        }
    ]
    const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false)
    return (
        <nav>
            <div className={`bg-black  text-white py-2 relative`}>
                <p className='text-[8px] md:text-lg text-center'>Sign up and get 20% off to your first order. <Link href={"/"} className='underline'> Sign Up Now </Link></p>
                <div className='absolute right-10 top-3 text-white'>
                    X
                </div>
            </div>
            <div className='container mx-auto flex items-center justify-start md:justify-center gap-16  my-4'>
                <div className='flex items-center justify-center gap-4 md:gap-8 px-4'>
                    {/* Mobile menu btn */}
                    <div className='block lg:hidden' onClick={() => setIsOpenMobileMenu(true)}>
                        Hy
                    </div>
                    <h1 className={`font-integrl text-3xl whitespace-nowrap`}>Shop.co</h1>
                    <ul className='hidden lg:flex gap-8 mt-4'>
                        {
                            meunItems.map((menu, i) => (
                                <li key={i}>{menu.menu}</li>
                            ))
                        }
                    </ul>
                </div>
                <div className='hidden md:flex items-center gap-4'>
                    <div className='flex items-center gap-4 rounded-4xl bg-[#F0F0F0] md:w-[300px] lg:w-[500px]  px-3 py-2'>
                        <Image src={search_icon} width={20} height={20} />
                        <input type="text" className='border-0 outline-0' placeholder='Search for products' />
                    </div>
                    <div className='flex justify-center items-center gap-4'>
                        <Image src={cart_icon} width={25} height={25} alt='cart-Icon' />
                        <Image src={user_icon} width={25} height={25} alt='user-icon' />
                    </div>
                </div>
                {/* Mobile Icons */}
                <div className='flex md:hidden justify-center items-center gap-4'>
                    <Image src={cart_icon} width={25} height={25} alt='cart-Icon' />
                    <Image src={user_icon} width={25} height={25} alt='user-icon' />
                </div>
                {/* Mobile Navbar */}
                <div className={`${isOpenMobileMenu ? "translate-x-0" : "-translate-x-full"} fixed lg:hidden top-0 left-0  bg-black/40 w-screen h-screen transition-all duration-500`}>
                    <div className='relative w-full h-full'>
                        <div className='bg-white h-full w-[80%] px-4 py-10'>
                            <h1 className="font-integrl text-3xl">Shop.co</h1>
                            <ul className='space-y-4 mt-4 text-xl font-bold'>
                                {
                                    meunItems.map((menu, i) => (
                                        <li key={i}>{menu.menu}</li>
                                    ))
                                }
                            </ul>
                        </div>
                        {/* Mobile Menu Close */}
                        <div className='absolute right-6 top-5 text-white text-3xl' onClick={() => setIsOpenMobileMenu(false)}>
                            X
                        </div>
                    </div>

                </div>
            </div>

        </nav>
    )
}

export default Navbar