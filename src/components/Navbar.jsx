"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'
import search_icon from "../../public/search_icon.png"
import cart_icon from "../../public/cart.png"
import user_icon from "../../public/user.png"
import { TiThMenu } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";


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
    const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);
    const [isalertOpen, setIsAlertOpen] = useState(true)
    return (
        <nav>
            <div
                className={`overflow-hidden transition-all duration-700 bg-black text-white relative ${isalertOpen ? "max-h-16 py-2" : "max-h-0 py-0"
                    }`}
            >
                <p className="text-[10px] md:text-base text-center">
                    Sign up and get <span className="font-semibold">20% off</span> your first order.{" "}
                    <Link href="/" className="underline hover:text-gray-300">Sign Up Now</Link>
                </p>

                <RxCross2
                    onClick={() => setIsAlertOpen(false)}
                    className="text-2xl absolute right-4 top-1/2 -translate-y-1/2 text-white cursor-pointer hover:scale-110 transition"
                />
            </div>

            <div className='container mx-auto flex items-center justify-start md:justify-center gap-16  my-4'>
                <div className='flex items-center justify-center gap-4 md:gap-8 px-4'>
                    {/* Mobile menu btn */}
                    <div className='block lg:hidden' onClick={() => setIsOpenMobileMenu(true)}>
                        <TiThMenu className='text-2xl' />
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
                <div
                    className={`${isOpenMobileMenu ? "translate-x-0" : "-translate-x-full"
                        } fixed inset-0 z-50 lg:hidden bg-black/40 transition-transform duration-500`}
                >
                    <div className="relative w-full h-full">
                        {/* Sidebar panel */}
                        <div className="bg-white h-full w-[80%] max-w-xs px-6 py-10 relative">
                            {/* Close icon inside panel */}
                            <button
                                onClick={() => setIsOpenMobileMenu(false)}
                                className="absolute top-4 right-4 text-2xl text-gray-600 hover:text-black transition"
                                aria-label="Close mobile menu"
                            >
                                <RxCross2 />
                            </button>

                            {/* Logo */}
                            <h1 className="text-3xl font-integrl font-extrabold text-black mb-8">Shop.co</h1>

                            {/* Menu items */}
                            <ul className="space-y-6 text-lg font-semibold text-gray-800">
                                {meunItems.map((menu, i) => (
                                    <li key={i} className="hover:text-black transition">
                                        {menu.menu}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>


            </div>

        </nav>
    )
}

export default Navbar