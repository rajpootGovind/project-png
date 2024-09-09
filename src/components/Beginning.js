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
        <div className=''>
       <p class="tracking-wider mb-6 px-4 mt-[15px] cursor-pointer flex justify-center w-full text-gray-500 relative bottom-[28px]">A paradise of precious jewels</p>
       </div>
       <div className='h-[580px] w-full bg-fuchsia-950 relative'>
        <div className='absolute'>

          <div className='flex w-full justify-center gap-[90px] mt-[60px] pr-[20px]'>
            <div className='w-[40%] relative top-[50px] flex flex-col gap-[30px]'>
              <h2 className='text-white text-[30px]'>Beginnings - Cornerstone of each story!</h2>
              <p className='text-white text-[20px]'>The story of PNG is indeed an epic scripted by six generations at the forefront of exceptional traditional designs and unparalleled craftsmanship. Discover how PNG Jewellers Pvt. Ltd, founded in 1832, 
              went from a little jewellery shop in Sangli to a renowned design brand in the jewellery industry.</p>
              <button className='h-[40px] w-[140px] font-normal text-gray-900 tracking-widest text-xs border border-black bg-white hover:text-purple-800'>READ MORE</button>
            </div>
            <img alt="img" src="https://www.bing.com/images/blob?bcid=S9.vDdhjo3sHolPG834t55HclLc......zQ"
            className='h-[330px] w-[520px] relative top-[40px] hover:scale-110 duration-1000'
            ></img>
          </div>
        </div>
      
       </div>
       
    </div>
   
    </div>
  )
}

export default Beginning