import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className=''>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            <div>
                <img src={assets.logo} className='mb-5 w-32 '/>
                <p className='w-full md:w-2/3 text-gray-600'>Discover the latest fashion trends and timeless classics, all crafted for your unique style. At PrimeCart, we prioritize quality, comfort, and customer satisfaction. Shop with confidence and let us bring elegance to your wardrobe.</p>
            </div>

            <div className=''>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>

            <div className=''>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>965482398</li>
                    <li>contact@primecart.com</li>
                    
                </ul>
            </div>
        </div>
        <div>
            <hr />
            <p className='py-5 text-sm text-center '>Copyright {new Date().getFullYear()} @ primecart.com - All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer