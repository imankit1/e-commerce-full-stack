import React from 'react'

function Newsletterbox() {
  const onSubmithandler = (event) => {
    event.preventDefault();
  }


  return (
    <div className='text-center'>
      <p className='text-2xl font-medium text-gray-800'>Suscribe now & get 20% off</p>
      <p className='text-gray-400 mt-3'>
        Subscribe to our newsletter and be the first to explore new arrivals, exclusive discounts, and style inspiration. From seasonal drops to bestsellers, stay in the loop with the latest fashion trends delivered straight to your inbox. Sign up now and elevate your wardrobe effortlessly!
      </p>
      <form onSubmit={onSubmithandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
        <input className='w-full sm:flex-1 outline-none' type="email" placeholder='Enter your email'></input>
        <button type='submit' className='bg-black text-white text-xs px-10 py-4 cursor-pointer'>SUSCRIBE  </button>
      </form>

    </div>
  )
}

export default Newsletterbox
