import React from 'react'
import Title from '../Components/Title'
import { assets } from '../assets/assets'
import Newsletterbox from '../Components/Newsletterbox'

function About() {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px] border border-gray-300 shadow-lg' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>At Forever.com, fashion isn’t just about clothing — it’s about expressing who you are.
We started with a simple idea: create stylish, high-quality pieces that feel as good as they look, without breaking the bank.</p>
          <p>From timeless classics to the latest trends, every piece in our collection is designed with care, attention to detail, and a love for style. We work closely with skilled designers and trusted suppliers to bring you clothing that’s comfortable, durable, and effortlessly chic.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Our mission is simple — to inspire confidence and help you look your best, every single day. Whether you’re dressing up for a night out or keeping it casual, Forever.com has something that fits your life and your vibe.</p>

        </div>

      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>

      </div>
      <div className='flex flex-col md:flex-row text-base mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance</b>
          <p className='text-gray-600'>Every piece is crafted from carefully selected fabrics and undergoes strict quality checks, ensuring you get clothing that’s as durable as it is stylish.</p>
        </div>

         <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience</b>
          <p className='text-gray-600'>With a seamless online shopping experience, fast delivery, and easy returns, we make sure getting your next outfit is effortless.</p>
        </div>

         <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service</b>
          <p className='text-gray-600'>Our friendly support team is here to help, answer questions, and make sure you always feel valued.</p>
        </div>

      </div>

      <Newsletterbox></Newsletterbox>

    </div>
  )
}

export default About
