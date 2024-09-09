import React from 'react'
import Logo from './Logo'

function StoreLocator() {
  return (
    <div className='relative bottom-[200px]'>
         <div className='relative bottom-[430px]'>
        <Logo></Logo>
    </div>

    <div className='relative bottom-[450px]'>
    <div >
        <ul className="flex w-full justify-center  mt-[330px] ">
                <li className=" bottom-[20px] py-0  cursor-pointer 
                   transition-all duration-200 relative group">
                   <a href='/' className='text-[30px] font-light'>Store Locator</a>
                   <div className="absolute bottom-0 w-[30px]  bg-black group-hover:block
                   transition-all h-[2px] duration-100 "></div>
               </li>
               </ul>
        </div>
        <div>
       <p class="tracking-wider mb-6 px-4 mt-[15px] cursor-pointer flex justify-center w-full text-gray-500 relative bottom-[28px]">Find a jewellery store near you.</p>
       </div>
       <div className='h-[470px] w-full bg-orange-50 relative'>
        <div className='absolute'>

          <div className='flex w-full  gap-[65px] '>
              
          <img alt="img" src="https://d1put4x3vjlh9s.cloudfront.net/public/uploads/widgets/store-todayjpg346696254620662933jpg__9469569791682764312.webp"
            className='h-[470px] w-[50%] relative'
            ></img>

            <div className='w-[40%] relative top-[120px] flex flex-col gap-[20px]'>
              <div >
        <ul className=" ">
                <li className=" py-0  cursor-pointer 
                   transition-all duration-200 relative group">
                   <a href='/' className='text-[30px] font-light'>Come and Say Hi</a>
                   <div className="absolute bottom-0 w-[30px]  bg-black group-hover:block
                   transition-all h-[1.5px] duration-100 "></div>
               </li>
               </ul>
        </div>
        <p className=' text-[20px] text-gray-800 text-s font-light'>
        Explore iconic traditional jewellery, gold and diamond engagement rings, silver classics, elegant accessories, and precious 
        gifts for any occasion at our PNG Jewellers stores across the globe.
        </p>
              <button className='h-[37px] w-[250px] font-normal text-gray-900 tracking-widest text-xs border border-black bg-white
               hover:bg-purple-800 hover:text-white hover:font-semibold'>FIND A STORE LOCATION</button>
            </div>
           
          </div>
        </div>
      
       </div>
       
    </div>
    </div>
  )
}

export default StoreLocator