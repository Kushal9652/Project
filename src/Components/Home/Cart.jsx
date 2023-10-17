import { Button } from 'flowbite-react';
import { HiOutlineArrowRight } from 'react-icons/hi';
import { Link } from "react-router-dom";


export default function Cart(props) {

  return (
  <>
       <div className="transition-all z-20 ease-in-out delay-150 duration-700 hover:h-[25.5rem] relative h-[20.8rem] px-[1rem] w-[17rem] overflow-hidden" style={{backgroundColor:props.data.color}}>
    {props.data.icon}
    <p className="text-[2rem] pl-[1rem] h-[6rem] flex justify-center items-center pr-[1rem]">{props.data.title}</p>
    <hr/>
    <p data-aos="fade-up"
     data-aos-duration="2000"  data-aos-easing="ease-in-sine" className="text-white pt-1 pl-[1rem] h-[11rem] leading-[1.5rem]">{props.data.data}</p>
    <hr />
    <Link to={props.data.link}>
    
    <Button className='m-[1rem] bg-[#059669]'>
        <p>
          Read more
        </p>
        <HiOutlineArrowRight className="ml-2 h-5 w-5" />
      </Button>
      </Link>
  </div>
  </>
  )
}


