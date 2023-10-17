import React from 'react'
import Cart from './Cart'
export default function CartContainer() {
    const obj=[
        {
           icon:<i className="fa-brands text-[3rem] pl-[1rem] text-white pt-[1rem] fa-nutritionix"></i>,
           title:"Nutritions",
           data:"Nutrition is the foundation of health, providing the fuel and building blocks our bodies need to thrive. It's not just about eating, but nourishing your well-being from the inside out.",
           color:"#22d3ee",
           link:"userinfo"
       },
        {
           icon:<i className="fa-solid text-[3rem] pl-[1rem] text-white pt-[1rem] fa-droplet"></i>,
           title:"Blood Donation",
           data:"Blood donation is a gift of life, a selfless act of kindness that has the power to heal, unite, and save countless lives. Every drop you give is a ray of hope for someone in need.",
           color:"#06b6d4",
           link:"bloodservices"
       }
       ,
        {
           icon:<i className="fa-solid text-[3rem] pl-[1rem] text-white pt-[1rem] fa-truck-fast"></i>,
           title:"Medical Products",
           data:"Bringing health and wellness to your doorstep, one or more trusted medical product at a time.",
           color:"#0891b2",
           link:"ourproducts"
       }
       ,
        {
           icon:<i className="fa-solid text-[3rem] pl-[1rem] text-white pt-[1rem] fa-calendar-check"></i>,
           title:"Doctor Appointment",
           data:"Booking a doctor's appointment is not just about addressing an ailment; it's a step towards prioritizing your well-being and taking control of your health journey."
          ,
          color:"#0e7490",
          link:"appointment"
       }
       ]
  return (
    <div className='bg-white'>
       <div className='flex  relative h-[25.5rem] bottom-[10rem] w-full justify-center items-end'>
    {
      obj.map((value,index)=>{
        return <Cart  key={index} data={value}/>}
      )
    }
    </div>
    </div>
  )
}
