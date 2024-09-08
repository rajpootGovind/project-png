import React from 'react'
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";
import { GoDotFill } from "react-icons/go";

function HeroSection() {
  return (
    <div className='relative bottom-5'>
        <img src='https://d1put4x3vjlh9s.cloudfront.net/public/uploads/banner/tushiwebjpg__1679995658636046068.webp' alt='Image'
        className='w-full flex'></img>
        <button className='bg-purple-800 w-[75px] h-[40px] pb-[3px] text-white bold rounded-full fixed bottom-[70px] left-[1410px] z-50'>Help?</button>

       <div className='flex absolute text-[40px] text-purple-800 justify-center w-full bottom-[18px] '>
        <a href='/' target="blank" className='opacity-80'><IoIosArrowDropleft></IoIosArrowDropleft></a>
        <a href='/' target="blank" className='text-white'><GoDotFill></GoDotFill></a>
        <a href='/' target="blank" className='opacity-80'><IoIosArrowDropright></IoIosArrowDropright></a>
       </div>

    </div>
  )
}

export default HeroSection