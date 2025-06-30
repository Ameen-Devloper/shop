import localFont from 'next/font/local'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import search_icon from "../../public/search_icon.png"
import cart_icon from "../../public/cart.png"
import user_icon from "../../public/user.png"

const integralCF = localFont({
    src: "../fonts/Fontspring-DEMO-integralcf-regular.otf"
})

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
    return (
        <nav>
            <div className={`bg-black text-center text-white py-2`}>
                <p>Sign up and get 20% off to your first order. <Link href={"/"} className='underline'> Sign Up Now </Link></p>
            </div>
            <div className='container mx-auto flex items-center justify-center gap-16 my-4'>
                <div className='flex items-center justify-center gap-8'>
                    <h1 className={`${integralCF.className} text-3xl`}>Shop.co</h1>
                    <ul className='flex gap-8 mt-4'>
                        {
                            meunItems.map((menu, i) => (
                                <li key={i}>{menu.menu}</li>
                            ))
                        }
                    </ul>
                </div>
                <div className='flex items-center gap-4'>
                    <div className='flex items-center gap-4 rounded-4xl bg-[#F0F0F0] w-[500px] px-3 py-2'>
                        <Image src={search_icon} width={20} height={20} />
                        <input type="text" className='border-0 outline-0' placeholder='Search for products' />
                    </div>
                    <div className='flex justify-center items-center gap-4'>
                        <Image src={cart_icon} width={25} height={25} alt='cart' />
                        <Image src={user_icon} width={25} height={25} alt='user' />
                    </div>
                </div>
            </div>

        </nav>
    )
}

export default Navbar