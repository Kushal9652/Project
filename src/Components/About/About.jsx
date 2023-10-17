import React from 'react'
import AboutVideo from './Images/AboutBgVideo.mp4'
import { Link } from 'react-router-dom'


function BgVideo() {
  return (
    <div className='relative flex justify-center items-center  h-[35rem] w-full '>
      <div className=" absolute  h-full  inset-0 overflow-hidden">
        <div className=' z-20 absolute w-full h-full bg-slate-800 opacity-75 '></div>
        <video
          autoPlay
          muted
          loop
          className="w-full z-10 h-full absolute object-cover"
        >
          <source src={AboutVideo} type="video/mp4" />
        </video>
      </div>
      <div className='relative z-30'>
        <p className='text-white text-[4rem] font-bold italic'> "Your Journey to Better Health Starts Here."</p>
        <p className='text-[2rem] relative left-[80%] italic font-semibold'>-From Vydya</p>
      </div>
    </div>
  )
}
function LittlePara(props) {
  if(props.data.path){
  return(
    <Link to={props.data.path}>
    <p className='text-[2rem] hover:text-yellow-400 hover:underline font-semibold '>{props.data.title}</p>
    <p className='text-xl font-light pl-[1rem] py-[0.5rem]'> {props.data.data}</p>
  </Link>
  )
  }
  else{
  return(  <>
    <p className='text-[2rem] font-semibold '>{props.data.title}</p>
    <p className='text-xl font-light pl-[1rem] py-[0.5rem]'> {props.data.data}</p></>)
  }
}

export default function About() {
  const Data = [
    {
      title: "1. Convenience:",
      data: "We've brought together a wide array of healthcare services and products under one roof, making it easier for you to access the care and resources you need. No more searching through countless websites or making endless calls; everything you need is just a click away."
    },
    {
      title: "2. Trustworthy Resources:",
      data: "We take your health seriously, which is why we've curated a network of reputable healthcare providers and vendors. When you use Vydya, you can trust that you're receiving quality care and products from trusted sources.."
    },
    {
      title: "3. Personalized Care:",
      data: " We believe that healthcare should be tailored to your unique needs. Whether you're searching for a specific medical product or need nutrition advice, our platform uses advanced algorithms to provide personalized recommendations, ensuring that your health journey is as individual as you are."
    },
    {
      title: "4. Empowerment:",
      data: "Your health is your greatest asset, and we're here to empower you to take control of it. By storing your medical records and offering insights into your health data, we give you the tools to make informed decisions about your well-being."
    },
    {
      title: "5. Community Support:",
      data: "Join our community of health-conscious individuals who share your goals and aspirations. Engage in discussions, seek advice, and find encouragement as you embark on your journey to better health. We believe in the power of collective knowledge and support"
    },
    {
      title: "6. Privacy and Security:",
      data: "We take your privacy and data security seriously. Our platform is designed with state-of-the-art encryption and security measures to ensure that your personal information remains confidential and protected at all times."
    },
    {
      title: "7. Accessibility:",
      data: "Vydya is accessible anytime, anywhere. Whether you're at home or on the go, you can rely on our platform to provide the healthcare services and resources you need.."
    },
    {
      title: "8. Giving Back:",
      data: "We are committed to giving back to the community and society at large. With our blood donation service, you have the opportunity to make a life-saving impact and contribute to the greater good."
    },
  ]


  const Services = [
    {
      title: "1. Blood Donation",
      data: "Every drop of blood can save a life, and we make it easier than ever to contribute to this noble cause. Vydya connects blood donors with those in need, ensuring a seamless and efficient process. Our platform allows you to schedule blood donation appointments, track your donations, and even receive updates on where your donated blood goes.",
      path: "/bloodservices"
    },
    {
      title: "2. Doctor Appointments",
      data: "Your health deserves top-notch care. Vydya simplifies the process of finding and booking appointments with trusted healthcare professionals. Our user-friendly interface enables you to search for doctors, view their profiles, read patient reviews, and schedule appointments at your convenience. Your health is our priority, and we're here to assist you on your journey to optimal well-being.",
      path: "/appointment"
    },
    {
      title: "3. Medical Products Marketplace",
      data: "We understand the importance of having access to quality medical products. Vydya offers a marketplace where you can browse and purchase a wide range of medical supplies and equipment. Whether you're a healthcare professional looking for essentials or a patient seeking home healthcare solutions, we have you covered with a vast selection of products from trusted vendors.",
      path: "/ourproducts"
    },
    {
      title: "4. Personal Health Records",
      data: "Your health history matters, and keeping track of it shouldn't be a hassle. Vydya provides a secure platform to store and manage your medical records. With our easy-to-use tools, you can compile your past medical information, including test results, prescriptions, and treatment histories, all in one place. This empowers you to make more informed healthcare decisions.",
      path: "/userinfo"
    },
    {
      title: "5. Nutrition Recommendations",
      data: "Eating right is a cornerstone of good health, and Vydya is your guide to achieving optimal nutrition. Our platform analyzes your health data, including medical history, lifestyle, and preferences, to offer personalized nutrition recommendations. Whether you're managing a specific condition or simply striving for a healthier lifestyle, we provide tailored advice to help you meet your goals.",
      path: "/userinfo"
    },
  ]

  return (
    <div className='relative w-screen bg-cyan-400 h-auto'>
      <BgVideo />
      <div className='m-[1rem] p-[1rem] w-[99rem] h-auto bg-white border-[3px] rounded-md border-b-0  mb-0 pb-0 border-black'>
        <p className='text-[3rem] font-semibold '>About Vydya</p>
        <p className='text-xl font-light'>Welcome to Vydya, your comprehensive healthcare companion. At Vydya, we are dedicated to enhancing your well-being by providing a wide range of healthcare services and resources all in one convenient platform. We believe that good health is a precious gift, and we are here to make it accessible and manageable for everyone.</p>


        <div className='m-[1rem] p-[1rem] border-[3px] rounded-md border-black border-b-0  mb-0 pb-0'>
          <p className='text-[3rem] font-semibold '>Our Mission</p>
          <p className='text-xl font-light'>Our mission at Vydya is to empower individuals to take control of their health journey, making informed decisions, and living healthier lives. We strive to achieve this by offering a diverse range of healthcare services and products, personalized guidance, and a supportive community that fosters well-being.</p>


          <div className='m-[1rem] p-[1rem] border-[3px] rounded-md border-black border-b-0  mb-0 pb-0'>
            <p className='text-[3rem] font-semibold '>Our Services</p>
            <div className='p-[1rem]'>
              {
                Services.map((value, index) => {
                  return (
                    <LittlePara key={index} data={value} />
                  )
                })
              }
            </div>

            <div className='m-[1rem] p-[1rem] border-[3px] rounded-md border-black border-b-0 mb-0 pb-0'>
              <p className='text-[3rem] font-semibold '>Why Choose Vydya?</p>
              <p className='text-xl font-light'>At Vydya, we understand that the world of healthcare can be overwhelming at times. That's why we're dedicated to simplifying the healthcare experience and providing you with the support you need. Here are some compelling reasons to choose Vydya as your trusted healthcare partner:</p>

              <div className='p-[1rem]'>
                {
                  Data.map((value, index) => {
                    return (
                      <LittlePara key={index} data={value} />
                    )
                  })

                }


              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

  )
}
