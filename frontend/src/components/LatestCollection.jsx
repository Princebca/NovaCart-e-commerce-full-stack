import React, { useContext, useState, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollection = () => {

  const { products } = useContext(ShopContext);
  const [latestProducts,setLatestProducts] = useState([]);

  useEffect(() => {
    if (products) {
      setLatestProducts(products.slice(0,20));
    }
  },[products])

  return (
    <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
        <Title text1={"LATEST"} text2={"COLLECTIONS"} />
        <p className='w-3/4 mx-auto text-xs sm:text-base text-gray-600'>
          Discover our newest arrivals and exclusive collections
        </p>
      </div>
      {/* Rendering Products */}
      <div className='grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {
          latestProducts.map((item,index)=>(
            <ProductItem key={index} id={item._id} image={item.images} name={item.name} price={Math.round(item.price * 50)}/>
          ))
        }
      </div>
    </div>
  )
}

export default LatestCollection
