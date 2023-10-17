
import './Footer.css'
import { NavLink } from 'react-router-dom'
import Logo from "../assets/Images/vydya-removebg-preview.png"

export default function Vydyafooter() {
    return (
        <footer className='bg-[#111827] flex flex-col  w-full h-[27.5rem]'>
            <div className='flex
            '>
            <div className=' h-full w-1/4'><img className='h-full w-full' src={Logo} alt="" /></div>
            <div className=' h-full w-1/2 flex'>
                <ul className="text-sm mr-[10rem]">
                    <li><NavLink end className={({ isActive }) => isActive ? "activeNav" : null} to="/home" > Home</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? "activeNav" : null} to="/bloodservices" > Blood Services</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? "activeNav" : null} to="/appointment" > Appointment</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? "activeNav" : null} to="/userinfo" > User Info</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? "activeNav" : null} to="/ourproducts" > Our Products</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? "activeNav" : null} to="/about" > About</NavLink></li>
                </ul>
                <div className='flex flex-col justify-center'>
                    {/* <p className=' my-[2rem] ml-[1rem] text-xl font-extrabold underline text-white'>Contact Us</p> */}
                    <ul className="text-sm ml-[10rem]" >
                        <li><a className='text-yellow-400' href="/home">Contact Us</a></li>
                        <li><a className='hover:text-yellow-400' href="/home">+91 8675342190</a></li>
                        <li><a className='hover:text-yellow-400' href="/home">+91 8675342190</a></li>
                        <li><a className='hover:text-yellow-400' href="/home">vydya219@gmail.com</a></li>
                        <li><a className='hover:text-yellow-400' href="/home">donateblodd13@gmail.com</a></li>
                        <li><a className='hover:text-yellow-400' href="/home">vydyawebsite@gmail.com</a></li>

                    </ul>
                </div>

            </div>
            <div className='h-full w-1/4 flex flex-col justify-center '>
                <p className='text-white text-3xl py-[2rem] text-center'>Follow Us</p>
                <div className='text-center'>
                    <a className='text-white' href="https://twitter.com/"><i className="hover:text-cyan-400 fab text-white text-3xl pl-[1rem] fa-twitter"></i></a>
                    <a className='text-white' href="https://www.instagram.com/"><i className="hover:text-red-400 fab text-white text-3xl pl-[1rem] fa-instagram"></i></a>
                    <a className='text-white' href="https://www.facebook.com/"><i className="hover:text-blue-400 fab text-white text-3xl pl-[1rem] fa-facebook"></i></a>
                    <a className='text-white' href="https://www.youtube.com/watch?v=dAbmL_kXHj8"><i className="hover:text-red-700 fa-brands fa-youtube text-white text-3xl pl-[1rem] "></i></a>
                </div>
            </div>
            </div>
            <p className='w-full text-center text-white text-xl'>&copy; 2023 Vydya. All rights reserved.</p>
        </footer>

    )
}

