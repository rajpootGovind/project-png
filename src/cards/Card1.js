import React from 'react'
import { PiArrowSquareLeftThin } from "react-icons/pi";
import { PiArrowSquareRightThin } from "react-icons/pi";


function Card1() {
  return (
   <div>
     <div className='flex gap-x-[15px] items-center h-[200px] w-full relative top-[80px] left-[30px] text-gray-600'>
        <div className='cursor-pointer'>
            <img src="https://southindiajewels.com/wp/wp-content/uploads/2016/08/GRT-Gold-jhumka-design.png" 
            alt="Jhumka"
            height="200px"
            width="300px"></img>
            <p className='relative'>₹22,155</p>
            <p>Rajsthani Jhumka</p>
        </div>
        <div className='cursor-pointer'>
            <img src="https://pngadgilandsons.com/wp-content/uploads/2023/04/3-1.jpg" 
            alt="Kangan"
            height="200px"
            width="300px"></img>
            <p className='relative'>₹18,150</p>
            <p>Marathi Special Haar</p>
        </div>
        <div className='cursor-pointer'>
            <img src="https://retailjewellerindia.com/wp-content/uploads/2020/01/3t8a7815-2.jpg" 
            alt="Kangan Har set"
            height="200px"
            width="300px"></img>
            <div className='relative top-[65px]'>
            <p className='relative'>₹38,050</p>
            <p>Rajsthani Set</p>
            <p>22KT</p>
            </div>
        </div>
        <div className='cursor-pointer'>
            <img src="https://content3.jdmagicbox.com/comp/pune/f1/020pxx20.xx20.171130121920.u9f1/catalogue/png-jewellers-hinjawadi-pune-jewellery-showrooms-1fo1me72po.jpg" 
            alt="Ring"
            height="200px"
            width="300px"></img>
            <p className='relative'>₹25,450</p>
            <p>Diamond Ring</p>
        </div>
        <div className='cursor-pointer'>
            <img src="https://pngadgilandsons.com/wp-content/uploads/2015/01/earring-big.jpg" 
            alt="Round Jhumka"
            height="200px"
            width="300px"></img>
           <div className='relative top-[30px]'>
           <p className='relative'>₹19,450</p>
           <p>Gujrati Jhumka</p>
           </div>
        </div>
        <div className='cursor-pointer'>
            <img src="https://cdn1.jewelxy.com/live/img/business_product/360x360/QJ3R80FTZP_20221125154811.jpg" 
            alt="Payal"
            height="200px"
            width="300px"></img>
            <p className='relative'>₹9,450</p>
            <p>Beutiful Payal</p>
        </div>
        
    </div>

    <div className='flex text-[50px] relative top-[200px] w-full justify-center gap-x-[8px]'>
       <PiArrowSquareLeftThin className='text-gray-400 font-thin cursor-pointer'></PiArrowSquareLeftThin>
       <PiArrowSquareRightThin className='cursor-pointer text-gray-700'></PiArrowSquareRightThin>
       

    </div>
   </div>
  )
}

export default Card1