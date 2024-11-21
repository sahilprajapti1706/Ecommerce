import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import Newletter from '../components/Newletter'
const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={"US"} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 text-gray-600'>
        <p>At PrimeCart, we believe in offering clothing that combines style, comfort, and quality. Our carefully curated collection is designed to fit every occasion, ensuring that you look and feel your best. We are committed to providing a seamless shopping experience, from the moment you browse our collection to the moment your order arrives at your doorstep.</p>

        <p>Our team works tirelessly to bring you the latest trends and timeless pieces, prioritizing customer satisfaction and affordable luxury. With a passion for fashion and a dedication to excellence, we are here to make your wardrobe a reflection of your unique style.</p>
        <b className='text-gray-800'> Our Mission</b>
        <p>At PrimeCart, our mission is to deliver exceptional clothing that blends style, comfort, and affordability. We aim to inspire confidence in every customer by offering high-quality, timeless pieces that suit every occasion. Our dedication to customer satisfaction drives us to provide a seamless shopping experience and ensure that every order meets the highest standards.</p>
        </div>
      </div>
      <div className='text-4xl py-4'> 
        <Title text1={"WHY"} text2={"CHOOSE US"}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-10 flex flex-col gap-5'>
            <b className='text-lg'>Quality Assurance</b>
            <p className='text-gray-600'>At PrimeCart, we are committed to providing only the highest quality products. Each item in our collection is carefully crafted to ensure durability, comfort, and style. We rigorously test every product to meet our strict quality standards, so you can shop with confidence knowing that your purchase will exceed expectations.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-10 flex flex-col gap-5'>
            <b className='text-lg'>Convenience</b>
            <p className='text-gray-600'>We prioritize your shopping experience by offering a seamless, hassle-free process from browsing to delivery. With easy navigation, secure payment options, and fast shipping, shopping with us is always convenient and efficient. Enjoy the convenience of shopping anytime, anywhere, and have your favorite styles delivered straight to your door.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-10 flex flex-col gap-5'>
            <b className='text-lg'>Exceptional Customer Service</b>
            <p className='text-gray-600'>At PrimeCart, we believe in providing outstanding customer support every step of the way. Our dedicated team is here to assist you with any questions or concerns, ensuring a smooth and enjoyable shopping experience. We’re committed to resolving any issues promptly and delivering the best possible service, making your satisfaction our top priority.</p>
        </div>
      </div>
      <Newletter/>
    </div>
  )
}

export default About