import React from 'react'
import Logo from './Logo'

function Signup() {
  return (
    
    
     <div className='relative bottom-[420px]'>
         <div className='relative bottom-[430px]'>
        <Logo></Logo>
       </div>
      
       <div className='h-[230px] w-full bg-gradient-to-r from-yellow-100 to-purple-400 relative bottom-[180px]'>
        <div className='absolute'>

          <div className='flex flex-col items-center w-full  gap-[65px] '>
         
            <div className='w-full relative top-[50px] ml-[450px] flex flex-col items-center justify-center gap-[15px]'>
              <div >
        <ul className=" ">
                <li className=" py-0  cursor-pointer 
                   transition-all duration-200 relative group">
                   <a href='/' className='text-[25px] font-light'>Latest from PNG Jewellers</a>
                   <div className="absolute bottom-0 w-[30px]  bg-black group-hover:block
                   transition-all h-[1.5px] duration-100 "></div>
               </li>
               </ul>
        </div>
        <p className=' text-[15px] text-gray-800 text-s font-normal'>
        Be the first to know about exciting new designs, special events, store openings and much more.
        </p>
             <div className='flex gap-0'>
                <input type='email' placeholder='Your Email Address' 
                className='h-[37px] w-[280px] border border-black pl-[25px] pb-[3px] border-collapse'></input>
                <input type='submit' className='h-[37px] w-[125px] font-normal text-gray-800 tracking-widest text-xs border border-black bg-white 
                border-collapse cursor-pointer' value="SIGN UP"></input>
             </div>
            </div>
           
          </div>
        </div>
      
       </div>
    </div>
  )
}

export default Signup