import React from 'react'
import WelcomePara from './Images/WelcomePara.jpg'

export default function DataPara() {
  return (
    <div>
      <div className='bg-white
       flex w-full h-[25rem]'>
          <div className='ml-[4rem] '>
            <h1 className='p-[2rem]  text-black text-[2rem] font-semibold'>Welcome to Vydya</h1>
            <p data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className='text-[1.2rem]  text-black p-[1rem] leading-[1.5rem]'>Vydya is your dedicated healthcare companion, prioritizing your well-being above all else. Our platform offers a wide range of healthcare services, ensuring accessibility and convenience. Discover our Medical Products Store, a treasure trove of healthcare essentials, including medications, remedies, and top-quality equipment. We believe in affordability without compromising quality. Join our Blood Donation Platform to save lives with ease through appointments and donation center locations.</p>
            <p data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className='text-[1.2rem]  text-black p-[1rem] leading-[1.5rem]'>At Vydya, your health is paramount. Our platform delivers an exceptional healthcare experience with an array of services. Explore our Medical Products Store, stocked with essential medications, remedies, and top-tier equipment. Our Blood Donation Platform simplifies life-saving contributions. Booking doctor appointments is a breeze, and our nutritionists offer personalized wellness guidance. We prioritize your data's security, accessible only to trusted healthcare professionals. HealthMeds Hub is your partner for accessible, quality healthcare. Join our community, empower yourself, and embrace a healthier future.</p>
          </div>
          <img data-aos="fade-up-right" data-aos-duration="2000" src={WelcomePara} className='mr-[7rem]' alt="" />
        </div>
        <div className='bg-[#0284c7] opacity-70 w-full h-[35rem] flex justify-center items-center'>
          <div className="h-[32rem] flex flex-col  items-center justify-center">
            <p data-aos="fade-up" data-aos-duration="1000" className='text-7xl text-white'> "The greatest evil is physical pain"</p>
            <p data-aos="fade-up" data-aos-duration="1000" className='text-lg text-white'>
              -Marcus Tullius Cicero
            </p>
          </div>
        </div>
    </div>
  )
}
