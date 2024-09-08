import React, { useState } from 'react'

function Collections() {
   
    
 
  return (
   <div>
     <div className='relative top-[10px]'>
        <div className='flex w-full justify-center text-[30px] gap-x-[28px] font-normal pt-5 mb-2.5'>
        <div>
        <ul className="flex gap-6 mt-[23px]">
                <li className=" bottom-[20px] py-0  cursor-pointer 
                   transition-all duration-200 relative group">
                   <a href='/'>New Ins</a>
                   <div className="absolute bottom-0 w-[35px]  bg-black font-thin group-hover:block
                   transition-all h-[3px] duration-100 "></div>
               </li>
               </ul>
        </div>
        <div className='font-thin text-gray-800'>|</div>
        <span class="text-[30px] py-1 inline-block relative cursor-pointer text-[#a1a1a1]">Best Sellers</span>
        
       </div>
       <div>
       <p class="tracking-wider mb-6 px-4 cursor-pointer flex justify-center w-full text-gray-500 relative bottom-[28px]">Freshen up your look!</p>
       </div>
    </div>

   
   </div>
  )
}

export default Collections