import React from 'react'
import Title from '../components/Title'
import contactImage from '../assets/contact_image.png'
import NewsLetterBox from '../components/NewsLetterBox'

const Contact = () => {
  return (
    <div className='text-center py-20'>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
          <img className='w- full md:max-w-[480px] rounded' src={contactImage} alt='' />
          <div className='flex flex-col justify-center items-start gap-6'>
              <p className='font-semibold text-xl text-gray-600'>Our Store</p>
              <p className='text-gray-500'>123 Commerce Avenue,<br/> Tech Park, New Delhi 110001, India</p>
              <p className='text-gray-500'>Phone: +91 98765 43210 <br/>Email: support@novacart.com</p>
              <p className='font-semibold text-xl text-gray-600'>Careers at NovaCart</p>
              <p className='text-gray-500'>Learn more about teams and job openings</p>
              <buttons className='border border-black rounded px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</buttons>
          </div>
      </div>
      <NewsLetterBox />
    </div>
  )
}

export default Contact
