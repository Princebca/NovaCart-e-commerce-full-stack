import React from 'react'
import exchangeIcon from '../assets/exchange.png'
import qualityIcon from '../assets/quality.png'
import supportIcon from '../assets/support.png'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
      
        <div>
            <img className='w-12 m-auto mb-5' src={exchangeIcon} alt="" />
            <p className='font-semibold'>Easy Exchange policy</p>
            <p className='text-gray-400'>We offer a simple and hassle-free exchange process for all our products.</p>
        </div>
        <div>
            <img className='w-12 m-auto mb-5' src={qualityIcon} alt="" />
            <p className='font-semibold'>7 Day Return Policy</p>
            <p className='text-gray-400'>We Provie 7 Day Return Policy</p>
        </div>
        <div>
            <img className='w-12 m-auto mb-5' src={supportIcon} alt="" />
            <p className='font-semibold'>Best Customer Support</p>
            <p className='text-gray-400'>We provide 24/7 customer support to assist you with any questions or concerns.</p>
        </div>

    </div>
  )
}

export default OurPolicy
