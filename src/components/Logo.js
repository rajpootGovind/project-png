import React from 'react'
import LineLogo from '../images/LineLogo'

function Logo() {
  return (
    <div>
         <div className='relative top-[280px]  '>
    
    <hr className='w-full h-[1.5px] mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-[#efd279] relative bottom-[55px] z-0'></hr>
    <div className='flex justify-center absolute bottom-[42px] w-full z-10 translate'>
    <LineLogo ></LineLogo>
    </div>
    </div>
    </div>
  )
}

export default Logo