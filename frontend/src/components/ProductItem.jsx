import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import {Link} from 'react-router-dom'

const ProductItem = ({id,image,name,price}) => {
    const {currency} = useContext(ShopContext)
  const displayPrice = Number.isFinite(price) ? Math.round(price) : price
  const placeholderImage = "https://via.placeholder.com/300?text=No+Image"
  const imageUrl = Array.isArray(image)
    ? image[0]
    : typeof image === 'string'
    ? image
    : placeholderImage

  return (
    <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
        <div className='overflow-hidden'>
            <img className='hover:scale-110 transition ease-in-out' src={imageUrl || placeholderImage} alt={name || 'product'} />
        </div>
        <p className='pt-3 pb-1 text-sm'>{name}</p>
        <p className='text-sm font-medium'>{currency}{displayPrice}</p>
    </Link>
  )
}

export default ProductItem
