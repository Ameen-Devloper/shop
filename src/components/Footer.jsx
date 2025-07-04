import React from 'react';
import { FaTwitter, FaFacebookF, FaInstagram, FaGithub } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import Image from 'next/image';
import applePayImage from "../../public/applePay.png"
import googlePayImage from "../../public/googlePay.png"
import masterCardImage from "../../public/masterCard.png"
import payPalImage from "../../public/payPal.jpg"
import visaImage from "../../public/visa.png"
const Footer = () => {
    return (
        <footer className="bg-[#F2F0F1] mt-60 md:mt-50 lg:mt-40">
            {/* Newsletter Section */}
            <div className="bg-black text-white rounded-3xl max-w-6xl mx-auto px-8 py-10 flex flex-col lg:flex-row justify-between items-center gap-8 -translate-y-1/2">
                <div className="text-center lg:text-left">
                    <h2 className="text-3xl md:text-4xl font-extrabold uppercase leading-tight">
                        Stay up to date about<br />our latest offers
                    </h2>
                </div>

                <div className="flex flex-col gap-4 w-full md:w-96">
                    <div className="relative bg-white rounded-full">
                        <HiOutlineMail className="absolute left-4 top-1/2 -translate-y-1/2 text-xl text-gray-400" />
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="w-full py-3 pl-12 pr-4 rounded-full text-black outline-none"
                        />
                    </div>
                    <button className="bg-white text-black font-semibold py-3 rounded-full hover:bg-gray-100 transition">
                        Subscribe to Newsletter
                    </button>
                </div>
            </div>

            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-6 pb-16 grid grid-cols-1 lg:grid-cols-4 gap-6 mt-[-100px] lg:mt-[0px]">
                {/* Brand */}
                <div className="space-y-4">
                    <h3 className="font-extrabold text-2xl text-black">SHOP.CO</h3>
                    <p className="text-sm">
                        We have clothes that suit your style and which you’re proud to wear. From women to men.
                    </p>
                    <div className="flex space-x-3 pt-2">
                        <FaTwitter className="text-black bg-white rounded-full p-1 text-2xl" />
                        <FaFacebookF className="text-black bg-white rounded-full p-1 text-2xl" />
                        <FaInstagram className="text-black bg-white rounded-full p-1 text-2xl" />
                        <FaGithub className="text-black bg-white rounded-full p-1 text-2xl" />
                    </div>
                </div>
                <div className='grid grid-cols-2 lg:grid-cols-4 gap-8 text-gray-700 col-span-3'>

                    {/* Footer Links */}
                    <div>
                        <h4 className="font-bold mb-3">Company</h4>
                        <ul className="space-y-2 text-sm">
                            <li>About</li>
                            <li>Features</li>
                            <li>Works</li>
                            <li>Career</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-3">Help</h4>
                        <ul className="space-y-2 text-sm">
                            <li>Customer Support</li>
                            <li>Delivery Details</li>
                            <li>Terms & Conditions</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-3">FAQ</h4>
                        <ul className="space-y-2 text-sm">
                            <li>Account</li>
                            <li>Manage Deliveries</li>
                            <li>Orders</li>
                            <li>Payments</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-3">Resources</h4>
                        <ul className="space-y-2 text-sm">
                            <li>Free eBooks</li>
                            <li>Development Tutorial</li>
                            <li>How to - Blog</li>
                            <li>Youtube Playlist</li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* Bottom footer row */}
            <div className="border-t border-gray-300 pt-4  flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 max-w-7xl mx-auto px-6">
                <p>Shop.co © 2000-2023, All Rights Reserved</p>

                {/* Payment icons */}
                <div className="flex gap-2 mt-4 md:mt-0">
                    <Image src={visaImage} width={40} height={20} alt='Visa' />
                    <Image src={masterCardImage} width={40} height={24} alt='Master Card' />
                    <Image src={payPalImage} width={40} height={24} alt='Pay Pal' />
                    <Image src={applePayImage} width={40} height={24} alt='Apple Pay' />
                    <Image src={googlePayImage} width={40} height={24} alt='Google Pay' />
                </div>

            </div>

        </footer>
    );
};

export default Footer;
