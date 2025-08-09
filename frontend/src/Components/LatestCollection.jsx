import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem';

function LatestCollection() {

    const { products }=useContext(ShopContext);

    const [latestProducts, setLatestProducts]=useState([]);

    useEffect(()=>{
        setLatestProducts(products.slice(0,10));

    },[products])

    // console.log(products);
  return (
    <div className='my-10'>
        <div className='text-center py-8 text-3x1'>
            <Title text1={'LATEST'} text2={'COLLECTIONS'} />
            <p className=' w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
          Discover our latest collection — handpicked styles designed to turn heads. From everyday essentials to statement pieces, each item is crafted for comfort, quality, and style. Step into the season’s hottest trends and make them yours before they’re gone.

             </p>
        </div>


        {/* Rendering products */}

        <div className=' grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {
            latestProducts.map((item, index)=>(
                <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
            ))
        }
        </div>
      
    </div>
  )
}

export default LatestCollection
