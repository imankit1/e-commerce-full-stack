import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

function BestSeller() {

  const { products } = useContext(ShopContext);

  const [bestSeller, setBestSeller] = useState([]);


  useEffect(() => {
    const bestProduct = products.filter((item) => (item.bestseller));
    setBestSeller(bestProduct.slice(0, 5))
  }, [products])
  return (
    <div className='my-10'>
      <div className='text-center text-3x1 py-8'>
        <Title text1={'BEST'} text2={'SELLER'} />
        <p className=' w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
          Discover our Best Sellers – the most loved and top-rated products by our customers. From everyday must-haves to trending favorites, these items are known for their quality, style, and value. Don’t miss out on what everyone’s raving about. Shop now before they sell out.

        </p>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {
          bestSeller.map((item, index) => (
            <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price} />
          ))
        }
      </div>
    </div>
  )
}

export default BestSeller
