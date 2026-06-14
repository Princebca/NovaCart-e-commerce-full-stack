import React from 'react'
import Title from '../components/Title'
import aboutUs from '../assets/about.png'
import NewsLetterBox from '../components/NewsLetterBox'

const about = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='max-w-[350px] h-auto rounded-lg md:max-w-[450px' src={aboutUs} alt='' />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Shop Smart, Live Better – Discover quality products and effortless shopping with NovaCart.</p>
          <p>
            At NovaCart, we are passionate about making online shopping simple, convenient, and enjoyable. We offer a carefully selected range of quality products designed to meet the needs of modern customers while ensuring great value for money.

            Our focus is on providing a seamless shopping experience through reliable service, secure transactions, fast delivery, and dedicated customer support. Whether you're looking for the latest trends or everyday essentials, NovaCart is committed to delivering quality, trust, and satisfaction with every purchase.

            Shop Smart. Live Better.
          </p>
          <b className='text-gray-800'>Our Mission</b>
          <p>
            At NovaCart, our mission is to make online shopping simple, secure, and enjoyable for everyone.<br /><br />

            We are committed to providing high-quality products at affordable prices while delivering exceptional customer service and a seamless shopping experience.<br /><br />

            Through innovation, reliability, and customer satisfaction, we aim to become a trusted destination for shoppers seeking quality, convenience, and value in every purchase.</p>
        </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>

            At NovaCart, quality is at the heart of everything we do. We carefully select and review every product to ensure it meets our standards of reliability, durability, and customer satisfaction.

            Our team is committed to providing products that deliver excellent value and performance. From product selection to delivery, we maintain strict quality checks to ensure that every purchase meets customer expectations and provides a trustworthy shopping experience.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>
            At NovaCart, we believe shopping should be simple, fast, and hassle-free. Our user-friendly platform makes it easy to browse products, compare options, and complete purchases securely from anywhere, at any time.

            With seamless navigation, multiple payment options, and reliable delivery services, we ensure a smooth and convenient shopping experience that saves you time and effort while bringing your favorite products right to your doorstep.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>
            At NovaCart, customer satisfaction is our top priority. We are dedicated to providing friendly, responsive, and reliable support at every step of your shopping journey. Whether you need assistance with product selection, order tracking, or returns, our team is always ready to help.

            We believe in building lasting relationships with our customers through trust, transparency, and personalized service, ensuring a smooth and enjoyable shopping experience every time.</p>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  )
}

export default about
