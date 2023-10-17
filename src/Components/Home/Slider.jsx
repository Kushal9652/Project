'use client';
import React, { useEffect, useState } from 'react';

import AboutImg from "./Images/AboutImg.png"
import { Button } from 'flowbite-react'
import { Link } from "react-router-dom";
import WelcomeBg from "./Images/WelcomeBg.jpg"
import HeartBeat from "./Images/HeartBeat.png"
import ServicesImg from "./Images/ServicesImg.png"
import BloodDrop from "./Images/BloodDrop.png"
import Appointment from "./Images/Appontment.png"
import Nutrition from "./Images/Nutrition.png"
import Products from "./Images/Products.png"
import AddMore from "./Images/AddMore.png"
import rightarrow from "./Images/right-arrow.png"
import leftarrow from "./Images/left-arrow.png"

export default function Slider() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [autoSlideInterval, setAutoSlideInterval] = useState(null); // Define autoSlideInterval

    const slides = [
        {
            title: 'Slide 1',
            content: 'Content for Slide 1',
        },
        {
            title: 'Slide 2',
            content: 'Content for Slide 2',
        },
        {
            title: 'Slide 3',
            content: 'Content for Slide 3',
        },
        // Add more slides as needed
    ];

    const timeoutDuration = 5000; // 5 seconds

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, timeoutDuration);

        setAutoSlideInterval(interval); // Store the interval in state

        return () => {
            clearInterval(interval);
        };
    }, [currentSlide, slides.length, timeoutDuration]);

    const nextSlide = () => {
        clearInterval(autoSlideInterval); // Clear the auto-slide interval
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    const prevSlide = () => {
        clearInterval(autoSlideInterval); // Clear the auto-slide interval
        setCurrentSlide((prevSlide) =>
            prevSlide === 0 ? slides.length - 1 : prevSlide - 1
        );
    };
    const goToSlide = (slideIndex) => {
        clearInterval(autoSlideInterval); // Clear the auto-slide interval
        setCurrentSlide(slideIndex);
    };
    let ele = [

        <div data-aos="zoom-in"     data-aos-duration="1000" className='relative w-full h-[28rem]  sm:h-[45rem]' >
            <img className=' w-full h-full ' src={WelcomeBg} alt="" />
            <p data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className='absolute top-[35%] left-[25%] text-[2rem] sm:left-[33%] sm:text-[4rem] text-white'>Welcome to VYDYA</p>
            <img className='absolute top-[47%] left-[19%] w-[61%]' src={HeartBeat} alt="" />
            <p data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500" className='absolute top-[53%] left-[29%] text-[130%] sm:left-[29%] sm:top-[56%] text-white sm:text-[4rem]'>Trusted By 3,000+ Users</p>
        </div>,

        <div className='absolute flex justify-between bg-gradient-to-b from-gray-900 via-purple-900 to-violet-600 w-full  h-[28rem] sm:h-[45rem]' >
            <div>
                <h1 className='text-[3rem] text-white font-semibold pt-8 sm:pl-[15rem] sm:text-[6rem] sm:font-bold pl-8'> We Care About Your Health</h1>
                <p className='text-[1.5rem] font-light pl-[15rem]  text-white'>Our team of dedicated nutritionists and health experts is here to guide you on your journey to better health. Whether you're looking for dietary recommendations, weight management tips, or general wellness advice, we offer personalized solutions to help you lead a healthier life</p>
                <Button gradientDuoTone="cyanToBlue" className="ml-[15rem] mt-[1rem]">
                    <Link to='/about'>About us</Link>
                </Button>
            </div>
            <img src={AboutImg} alt="" />
        </div>,


        <div className=' bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-indigo-200 via-slate-600 to-indigo-200 flex justify-between relative w-full h-[28rem]  sm:h-[45rem]' >
            <div className='z-20'>
                <p className='text-[3rem] font-semibold pt-8 sm:pl-[15rem] text-black pl-[15rem]'>Provided Medical Services</p>
                <p className='text-[1.5rem] font-light py-[2rem] pl-[15rem]'>At Vydya, we take your health and well-being seriously. We are dedicated to providing you with a comprehensive healthcare experience that goes beyond the ordinary. Our commitment is rooted in our mission to empower you to take charge of your health journey</p>
                <div className='flex sm:ml-[15rem] sm:gap-[2rem] sm:p-[2rem]
       flex-wrap gap-[1rem] p-[1rem] border-2 rounded-lg border-black border-solid'>
                    <Link to='bloodservices'>
                        <div className='w-[4rem] h-[4rem] sm:w-[7rem] sm:h-[7rem] border-2 rounded-lg bg-transparent border-black border-solid'>
                            <img src={BloodDrop} alt="" className='w-full h-full' />
                        </div>
                    </Link>
                    <Link to='userinfo'>
                        <div className='w-[4rem] h-[4rem] sm:w-[7rem] sm:h-[7rem] border-2 rounded-lg bg-transparent border-black border-solid'>
                            <img src={Nutrition} alt="" className='w-full h-full' />
                        </div>
                    </Link>
                    <Link to='appointment'>
                        <div className='w-[4rem] h-[4rem] sm:w-[7rem] sm:h-[7rem] border-2 rounded-lg bg-transparent border-black border-solid'>
                            <img src={Appointment} alt="" className='w-full h-full' />
                        </div>
                    </Link>
                    <Link to='ourproducts'>
                        <div className='w-[4rem] h-[4rem] sm:w-[7rem] sm:h-[7rem] border-2 rounded-lg bg-transparent border-black border-solid'>
                            <img src={Products} alt="" className='w-full h-full' />
                        </div>
                    </Link>
                    <Link to='about'>
                        <div className='w-[4rem] h-[4rem] sm:w-[7rem] sm:h-[7rem] border-2 rounded-lg bg-transparent border-black border-solid'>
                            <img src={AddMore} alt="" className='w-full h-full' />
                        </div>
                    </Link>
                </div>
            </div>
            <img src={ServicesImg} className='z-20 w-[12rem] sm:w-[38%]' alt="" />
        </div>
    ]
    return (
        <>

            <div className="relative w-full h-[45rem] overflow-hidden">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute top-0 left-0 w-full h-full transition-transform transform ${index === currentSlide ? 'translate-x-0' : 'translate-x-full'
                            }`} style={{ transitionDuration: '2s' }}
                    >
                        {ele[index]}
                    </div>
                ))}
                <button
                    className="absolute top-1/2 left-4 transform -translate-y-1/2 sm:top-[25rem] text-white px-2 py-1 rounded-full"
                    onClick={prevSlide}
                >
                    <img src={leftarrow} alt="" />

                </button>
                <button
                    className="absolute top-1/2 right-4 transform -translate-y-1/2 sm:top-[25rem] text-white px-2 py-1 rounded-full"
                    onClick={nextSlide}
                >
                    <img src={rightarrow} alt="" />
                </button>
                <div className="absolute z-10 top-[38.5rem] left-1/2 transform -translate-x-1/2 flex space-x-2 ">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-blue-500' : 'bg-gray-300'
                                }`}
                            onClick={() => goToSlide(index)}
                        ></button>
                    ))}
                </div>
            </div>
        </>
    )
}