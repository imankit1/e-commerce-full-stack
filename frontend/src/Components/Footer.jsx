import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm' >
                <div>
                    <Link to='/'><img src={assets.logo} className='mb-5 w-32' alt="" /></Link>
                    <p className='w-full md:w-2/3 text-gray-600'>
                        Discover fashion that speaks your style. From trendsetting outfits to timeless classics, we bring you a curated collection of clothing for every occasion. Enjoy seamless shopping, exclusive deals, and fast delivery. Whether you’re dressing up or keeping it casual — we’ve got your look covered.
                    </p>
                </div>
                <div>
                    <p className='text-xl font-medium mb-5'> COMPANY</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>

                    </ul>
                </div>
                <div>
                    <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>+91-66666-88888</li>
                        <li>contact@forever.com</li>
                        <li>123 Fashion Street, Hyderabad</li>
                    </ul>
                </div>
            </div>

            <div>
                <hr />
                <p className="text-center text-gray-500 text-sm py-4">
                    <span className="text-lg text-black">©</span> 2025 Forever.com – All Rights Reserved. Crafted with style, built for you.
                </p>
            </div>

        </div>
    )
}

export default Footer
