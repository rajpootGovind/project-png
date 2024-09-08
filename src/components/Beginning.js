import React from 'react'
import Logo from './Logo'

function Beginning() {
  return (
    <div className='m-0 p-0 box-border'>
    <div className='relative bottom-[430px]'>
        <Logo></Logo>
    </div>

    <div className='relative bottom-[450px]'>
    <div >
        <ul className="flex w-full justify-center  mt-[330px] ">
                <li className=" bottom-[20px] py-0  cursor-pointer 
                   transition-all duration-200 relative group">
                   <a href='/' className='text-[30px] font-light'>PNG Jewellers</a>
                   <div className="absolute bottom-0 w-[30px]  bg-black group-hover:block
                   transition-all h-[2px] duration-100 "></div>
               </li>
               </ul>
        </div>
        <div>
       <p class="tracking-wider mb-6 px-4 mt-[15px] cursor-pointer flex justify-center w-full text-gray-500 relative bottom-[28px]">A paradise of precious jewels</p>
       </div>
       <div className='h-[500px] w-full bg-fuchsia-900 relative'>
        <div className='absolute'></div>
       </div>
       
    </div>
   
    </div>
  )
}

export default Beginning