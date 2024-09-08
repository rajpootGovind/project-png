import React from 'react'
import Logo from "../images/Logo"
import { CiSearch } from "react-icons/ci";
import { VscAccount } from "react-icons/vsc";
import { CiHeart } from "react-icons/ci";
import { GrCart } from "react-icons/gr";

function Header() {
  return (
    <div className='relative'>
        <div className='lg:grid-cols-12 gap-x-2 lg:gap-x-4 items-center lg:items-end grid grid-cols-6'>
        {/* <div className="items-center col-span-2 lg:col-end-12 lg:hidden justify-end flex "> */}
        <div className='relative py-1.5 items-center col-span-2 flex justify-around '>
            <a target='blank' className='cursor-pointer'>
            <div className='h-16  '>
                <Logo ></Logo>
            </div>
            </a>
            <div className="ltr:ml-5 rtl:mr-5 "></div>
        </div>
       
           <div className='lg:cols-span-11 grid-cols-5 cols-span-6'>
            <div className='flex items-center'>
                <div className='flex-auto justify-end lg:block flex mt-2 mb-3 lg:my-0'>
                    <div className='lg:relative w-full  bg-white'>
                        <div className='flex items-center relative'>
                            <div className='relative grow'>
                                <div className='absolute bottom-[22px]'>
                              <input type='text'
                                placeholder='What are you lokking for ?'
                                className='border placeholder:italic rounded-full ltr:pr-11 rtl:pl-11 w-[800px] h-[40px] pl-4 left-6 '></input>
                                
                                <button type='submit' className='z-20 top-[5px] absolute left-[760px] text-[30px]'><CiSearch /></button>
                            
                              </div>
                              <div className='relative left-[970px] flex gap-x-8 bottom-8 text-gray-700'>
                                <div className='flex gap-2 cursor-pointer'>
                                <VscAccount className='text-lg'></VscAccount>
                                    <span className='relative text-sm'>Account</span>
                                </div>
                                <div className='flex gap-2  cursor-pointer'>
                                <CiHeart className='text-lg'></CiHeart>
                                    <span className='relative text-sm'>Wishlist</span>
                                </div>
                                <div className='flex gap-2  cursor-pointer'>
                                <GrCart className='text-lg'></GrCart>
                    
                                </div>
                              </div>
                            </div>
                            
                        </div>
                    
                    </div>
                   

               
            </div>
           </div>
           
           </div>
           
        </div>
        <div className='relative z-60 left-[200px] text-gray-700'>
        <ul className="flex gap-6">
                <li className=" bottom-[20px] py-4  cursor-pointer 
                   transition-all duration-200 relative group">
                   <a href='/'>All Jewellery</a>
                   <div className="absolute bottom-0 w-full  bg-fuchsia-800 hidden group-hover:block
                   transition-all h-[2.5px] duration-100 "></div>
               </li>
                <li className=" bottom-[20px] py-4  cursor-pointer 
                   transition-all duration-200 relative group">
                   <a href='/'>Diamond</a>
                   <div className="absolute bottom-0 w-full  bg-fuchsia-800 hidden group-hover:block
                   transition-all h-[2.5px] duration-100 "></div>
               </li>
                <li className=" bottom-[20px] py-4  cursor-pointer 
                   transition-all duration-200 relative group">
                   <a href='/'>Gold</a>
                   <div className="absolute bottom-0 w-full  bg-fuchsia-800 hidden group-hover:block
                   transition-all h-[2.5px] duration-100 "></div>
               </li>
                <li className=" bottom-[20px] py-4  cursor-pointer 
                   transition-all duration-200 relative group">
                   <a href='/'>Silver</a>
                   <div className="absolute bottom-0 w-full  bg-fuchsia-800 hidden group-hover:block
                   transition-all h-[2.5px] duration-100 "></div>
               </li>
                <li className=" bottom-[20px] py-4  cursor-pointer 
                   transition-all duration-200 relative group">
                   <a href='/'>Bullions</a>
                   <div className="absolute bottom-0 w-full  bg-fuchsia-800 hidden group-hover:block
                   transition-all h-[2.5px] duration-100 "></div>
               </li>
                <li className=" bottom-[20px] py-4  cursor-pointer 
                   transition-all duration-200 relative group">
                   <a href='/'>Collections</a>
                   <div className="absolute bottom-0 w-full  bg-fuchsia-800 hidden group-hover:block
                   transition-all h-[2.5px] duration-100 "></div>
               </li>
                <li className=" bottom-[20px] py-4  cursor-pointer 
                   transition-all duration-200 relative group">
                   <a href='/'>Investors</a>
                   <div className="absolute bottom-0 w-full  bg-fuchsia-800 hidden group-hover:block
                   transition-all h-[2.5px] duration-100 "></div>
               </li>
               
                
               </ul>
        </div>
        </div>
    
  )
}

export default Header