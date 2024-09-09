import React from 'react'
import Logo from './Logo'
import { FaCcVisa } from "react-icons/fa";
import { SiAmericanexpress } from "react-icons/si";
import { FaPaypal } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaPinterest } from "react-icons/fa";

function Footer() {
  return (
    <div>
        <div className='relative bottom-[830px]'>
        <div >
        <Logo></Logo>
       </div>
        </div>

        <div className=' flex relative bottom-[550px] justify-between mr-[300px] ml-[80px]'>
            <div>
            <div >
             <ul className=" ">
                <li className=" py-1  cursor-pointer 
                   transition-all duration-200 relative group">
                   <a href='/' className='text-[18px] font-light'>Know Us</a>
                   <div className="absolute bottom-0 w-[20px]  bg-black group-hover:block
                   transition-all h-[0.5px] duration-100 "></div>
               </li>
               </ul>
        </div>
             <ul className='text-sm font-light mt-4 flex flex-col gap-2 tracking-wider'>
             <li className='cursor-pointer hover:text-purple-500'>Our Story</li>
                <li className='cursor-pointer hover:text-purple-500'>Video</li>
                <li className='cursor-pointer hover:text-purple-500'>Blogs</li>
                <li className='cursor-pointer hover:text-purple-500'>Careers</li>
             </ul>
            </div>

            <div>  
             <div >
              <ul className=" ">
                <li className=" py-1  cursor-pointer 
                   transition-all duration-200 relative group">
                   <a href='/' className='text-[18px] font-light'>PNG Promises</a>
                   <div className="absolute bottom-0 w-[20px]  bg-black group-hover:block
                   transition-all h-[0.5px] duration-100 "></div>
               </li>
               </ul>
        </div>
        <ul className='text-sm font-light mt-4 flex flex-col gap-2 tracking-wider'>
             <li className='cursor-pointer hover:text-purple-500'>14-Days Returns</li>
                <li className='cursor-pointer hover:text-purple-500'>Free Shipping</li>
                <li className='cursor-pointer hover:text-purple-500'>Certifications</li>
                <li className='cursor-pointer hover:text-purple-500'>Lifetime Buyback</li>
                <li className='cursor-pointer hover:text-purple-500'>Lifetime Exchange</li>
                <li className='cursor-pointer hover:text-purple-500'>FPP/DPP</li>
                <li className='cursor-pointer hover:text-purple-500'>Gold Exchange</li>
             </ul>
        </div>

            <div>   <div >
              <ul className=" ">
                <li className=" py-1  cursor-pointer 
                   transition-all duration-200 relative group">
                   <a href='/' className='text-[18px] font-light'>Customer Delight</a>
                   <div className="absolute bottom-0 w-[20px]  bg-black group-hover:block
                   transition-all h-[0.5px] duration-100 "></div>
               </li>
               </ul>
        </div>
        <ul className='text-sm font-light mt-4 flex flex-col gap-2 tracking-wider'>
             <li className='cursor-pointer hover:text-purple-500'>FAQ</li>
                <li className='cursor-pointer hover:text-purple-500'>Policies</li>
                <li className='cursor-pointer hover:text-purple-500'>Book Appointment</li>
                <li className='cursor-pointer hover:text-purple-500'>Contest & Programs</li>
                <li className='cursor-pointer hover:text-purple-500'>Contacts</li>
                <li className='cursor-pointer hover:text-purple-500'>PNG Franchise</li>
             </ul>
        </div>

            <div>
            <div >
                <ul className=" ">
                <li className=" py-1 cursor-pointer 
                   transition-all duration-200 relative group">
                   <a href='/' className='text-[18px] font-light'>Education</a>
                   <div className="absolute bottom-0 w-[20px]  bg-black group-hover:block
                   transition-all h-[0.5px] duration-100 "></div>
               </li>
               </ul>
        </div>
        <ul className='text-sm font-light mt-4 flex flex-col gap-2 tracking-wider'>
             <li >Size Guide</li>
                <li className='cursor-pointer hover:text-purple-500'>Jewellery Care Guide</li>
                <li className='cursor-pointer hover:text-purple-500'>Know Your Diamond</li>
                <li className='cursor-pointer hover:text-purple-500'>Know Your Gemstone</li>
             </ul>
            </div>

            <div>
            <div >
             <ul className=" ">
                <li className=" py-1 cursor-pointer 
                   transition-all duration-200 relative group">
                   <a href='/' className='text-[18px] font-light'>Get in Touch</a>
                   <div className="absolute bottom-0 w-[20px]  bg-black group-hover:block
                   transition-all h-[0.5px] duration-100 "></div>
               </li>
               </ul>
        </div>
        <ul className='text-sm font-light mt-4 flex flex-col gap-2 tracking-wider'>
             <li className='cursor-pointer'>customerservice@pngadgil.com</li>
                <li className='cursor-pointer'>+918806975640</li>
                <li className='cursor-pointer'>(10 am - 6 pm)</li>
                
             </ul>
            </div>
        </div>

        <div className='flex justify-around relative bottom-[500px] '>
        <div >
             <ul className="relative right-[220px] ">
                <li className=" py-1 cursor-pointer 
                   transition-all duration-200 relative group">
                   <a href='/' className='text-[18px] font-light'>We Accept</a>
                   <div className="absolute bottom-0 w-[20px]  bg-black group-hover:block
                   transition-all h-[0.5px] duration-100 "></div>
               </li>
               </ul>
               <div className='flex text-[33px] gap-x-8  relative top-[20px] right-[220px]'>
                 <FaCcVisa ></FaCcVisa>
                 <SiAmericanexpress></SiAmericanexpress>
                 <FaPaypal ></FaPaypal>
                 <FaCcMastercard ></FaCcMastercard>
               </div>
        </div>
        <div >
             <ul className="relative right-[200px]">
                <li className=" py-1 cursor-pointer 
                   transition-all duration-200 relative group">
                   <a href='/' className='text-[18px] font-light'>Connect</a>
                   <div className="absolute bottom-0 w-[20px]  bg-black group-hover:block
                   transition-all h-[0.5px] duration-100 "></div>
               </li>
               </ul>
               <div className='flex text-[20px] gap-x-4 text-purple-900 relative top-[20px] right-[210px]'>
          <FaFacebookF className='cursor-pointer'></FaFacebookF>
          <FaTwitter className='cursor-pointer'></FaTwitter>
          <FaInstagram className='cursor-pointer'></FaInstagram>
          <FaLinkedinIn className='cursor-pointer'></FaLinkedinIn>
          <AiOutlineYoutube className='cursor-pointer'></AiOutlineYoutube>
          <FaPinterest className='cursor-pointer'></FaPinterest>
        </div>
        </div>
       
        </div>

        <div className=''>
       <div className='relative bottom-[710px]'>
       <Logo></Logo>
       </div>
      <div className='flex justify-center'>
      <p className='relative bottom-[490px] text-xs text-gray-900'>© 2024 PNG Jewellery. All rights reserved.</p>
      </div>
        </div>
    </div>
  )
}

export default Footer