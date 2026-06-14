import React from 'react'
import logo from '../assets/logo.png'

const Footer = () => {
  return (
    <div>

      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr-1fr] gap-14 my-10 mt-40 text-sm'>
        
        
        <div>
          <p className='text-x1 font-medium mb-5'>COMPONY</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li className='hover:text-blue-500 cursor-pointer'>Home</li>
            <li className='hover:text-blue-500 cursor-pointer'>About Us</li>
            <li className='hover:text-blue-500 cursor-pointer'>Delivery</li>
            <li className='hover:text-blue-500 cursor-pointer'>Privacy policy</li>
    
          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li className='hover:text-blue-500 cursor-pointer'>Email: nova.info@company.com</li>
            <li className='hover:text-blue-500 cursor-pointer'>Phone: +91 987 654 3210</li>
            <li className='hover:text-blue-500 cursor-pointer'>Address: 123 Main Street, DummyCity, India</li>
          </ul>
        </div>
      
      </div>
      <div>
        <hr />
        <img src={logo} alt='logo' className='w-32' />
        <p className='text-gray-600 text-center'>Copyright © 2026 @ NovaCart.com . All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
