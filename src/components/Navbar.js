import React from 'react'
import { LiaStoreSolid } from "react-icons/lia";
import { FaWhatsapp } from "react-icons/fa";
import { MdHandshake } from "react-icons/md";
import { AiOutlineGold } from "react-icons/ai";

function Navbar() {
  return (
    <div>
        <nav className="bg-fuchsia-950 w-full h-8">
        <div class="absolute left-1/2 -translate-x-1/2 text-[#efd279] leading-none h-7 flex items-center font-bold text-[11px] tracking-[2.75px]">LEGACY SINCE 1832</div>
        <div className='grid grid-cols-4 items-center loading-none min-h-[31px] '>

           <div className='col-span-1 pt-px whitespace-nowrap'>
              <div className='flex items-center'>
                <a target="blank" className='px-8 flex gap-4'>
                    <div className='flex text-fuchsia-300 gap-2 hover:text-white pt-1 cursor-pointer'>
                    <FaWhatsapp></FaWhatsapp>
                    <span className='text-xs'>Whatsapp</span>
                    </div>
                    <div className='pb-[5px] text-fuchsia-300 text-sm'>|</div>
                    <div className='flex text-fuchsia-300 gap-2 hover:text-white pt-1 cursor-pointer'>
                    <LiaStoreSolid></LiaStoreSolid>
                    <span className='text-xs'>Store Locator</span>
                    </div>
                    <div className='pb-[5px] text-fuchsia-300 text-sm'>|</div>
                    <div className='flex text-fuchsia-300 gap-2 hover:text-white pt-1 cursor-pointer'>
                    <MdHandshake></MdHandshake>
                    <span className='text-xs'>PNG Franchise</span>
                    </div>
                   
                </a>
              </div>
           </div> 
           <div className='col-span-2 '>
           </div>

           <div className='col-span-1  whitespace-nowrap '>
            <div className='flex text-fuchsia-300 hover:text-white gap-2 cursor-pointer justify-end px-8'>
                <AiOutlineGold className='text-[25px] '></AiOutlineGold>
                <span className='text-xs pt-1'>Metal Rates</span>
            </div>
           </div>
        </div>
        
    </nav>
    </div>
  )
}

export default Navbar