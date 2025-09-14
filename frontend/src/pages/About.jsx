import React from 'react'
import { assets } from '../assets/assets'
import Title from '../components/Title'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div className='text-2xl text-center pt-8 border-t'>
      <Title text1={'ABOUT'} text2={'US'} />

      {/* About Section */}
      <div className="my-10 flex flex-col md:flex-row gap-16 items-center md:items-start">
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600 text-base md:text-[15px] text-left">
          <p className="text-justify">Forever was founded out of a passion for innovation and a desire to revolutionize the way clothing is experienced online. Our mission is to blend style, comfort, and technology, making fashion accessible and enjoyable for everyone.</p>
          <p className="text-justify">Since our inception, we have been committed to providing high-quality products, exceptional customer service, and a seamless shopping experience. Our team is dedicated to curating the latest trends and ensuring that every customer finds something they love.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p className="text-justify">Our Mission at Forever is to inspire confidence and creativity in every individual. We strive to create a welcoming space where fashion meets innovation, and where our customers can express their unique personalities. Through continuous improvement and a focus on sustainability, we aim to make a positive impact on both our community and the environment. Join us as we shape the future of online shopping, one stylish step at a time.</p>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="text-4xl py-4">
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20 gap-6 md:gap-8 items-stretch justify-center">
        <div className="border border-gray-200 px-8 md:px-10 py-8 md:py-14 flex flex-col gap-4 rounded-md flex-1 bg-white">
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>We meticulously select and vet every product to ensure the highest standards for our customers.</p>
        </div>
        <div className="border border-gray-200 px-8 md:px-10 py-8 md:py-14 flex flex-col gap-4 rounded-md flex-1 bg-white">
          <b>Convenience:</b>
          <p className='text-gray-600'>With our user-friendly interface and hassle-free ordering process, shopping is always a breeze.</p>
        </div>
        <div className="border border-gray-200 px-8 md:px-10 py-8 md:py-14 flex flex-col gap-4 rounded-md flex-1 bg-white">
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Our support team is always ready to help, ensuring a smooth and satisfying experience every time.</p>
        </div>
      </div>

      {/* Newsletter Section */}
      <NewsletterBox/>

    </div>
  )
}

export default About