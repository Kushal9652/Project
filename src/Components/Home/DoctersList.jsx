import React from 'react'

// import Doctor1 from './Images/WelcomePara.jpg'
import Doctor1 from './Images/DoctersList/Doctor6.jpeg'
import Doctor2 from './Images/DoctersList/Doctor2.png'
import Doctor3 from './Images/DoctersList/Doctor7.jpeg'
import Doctor4 from './Images/DoctersList/Doctor4.jpg'
import Doctor5 from './Images/DoctersList/Doctor5.jpeg'
import { Link } from 'react-router-dom'

function Card(props) {
    return (
      < Link to='about'>
       <div data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500" className=' bg-orange-300 mx-[0.8rem] justify-center items-center flex flex-col w-[17rem] overflow-hidden rounded-lg border'>
            <img className='w-[17rem] h-[17rem]' src={props.Data.img} alt="THIS IS Docter " />
            <div className='w-full h-[.5px]  bg-black'></div>
            <p className='text-black mt-[1rem] font-semibold'>{props.Data.data}</p>
        </div>
      </Link>
    )
}
export default function DoctersList() {
   const Data = [
        {
            img: Doctor1,
            data: `Cardiologist `
        },
        {
            img: Doctor2,
            data: `Gastroenterologist
            `
        },
        {
            img: Doctor3,
            data: `Pulmonologist           `
        },
        {
            img: Doctor4,
            data: `Neurologist
            `
        },
        {
            img: Doctor5,
            data: `Dermatologist
            `
        }
    ]
    return (
        <div className='bg-white
    w-[99vw] h-[30rem] flex flex-col justify-center items-center'>
            <p className='text-black underline text-5xl my-[1.5rem]'>Our Specilists</p>
            <div className='flex overflow-hidden mt-[3rem] '>
               {
                Data.map((ele,index)=>{
                    return(
                        <Card key={index} Data={ele} />
                    )
                })
               }
            </div>
        </div>
    )
}
