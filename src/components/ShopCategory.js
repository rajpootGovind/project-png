import React from 'react'

function ShopCategory() {
  return (
    <div>
        <div>
        <div>
        <ul className="flex w-full justify-center  mt-[330px] ">
                <li className=" bottom-[20px] py-0  cursor-pointer 
                   transition-all duration-200 relative group">
                   <a href='/' className='text-[30px] font-light'>Shop by Category</a>
                   <div className="absolute bottom-0 w-[30px]  bg-black group-hover:block
                   transition-all h-[1px] duration-100 "></div>
               </li>
               </ul>
        </div>
        <div>
       <p class="tracking-wider mb-6 px-4 mt-[15px] cursor-pointer flex justify-center w-full text-gray-500 relative bottom-[28px]">A one-stop shop for all of your jewellery needs!</p>
       </div>
       <div className='relative z-0'>
       <video
        height="100%"
        width="800px"
        controls
        className='hover:transition-shadow duration-200 ease-in animate-bounce mt-[100px]'>
            <source src='https://videocdn.cdnpk.net/cdn/content/video/free/2022-11/large_preview/221112_01_London%20Christmas%20Lights_4k_005.mp4?token=exp=1725814897~hmac=994bc4366c92a421a022f7e3472c2b158e31d58830e4c20f3011059f284bc19f'
            type='video/mp4'></source>
           
        </video>
        <div className='absolute z-10 text-[100px] ml-[550px] top-[50px] text-[#efd279] font-normal drop-shadow '><i>CRAFTED ELEGANCE</i></div>
        <div className='w-[750px] h-[120px] absolute ml-[800px] top-[74px] z-[-10] bg-gradient-to-r from-blue-950 to-blue-100 hover:transition-all duration-500 ease-out
        animate-pulse'></div>
       </div>
        </div>
    </div>
  )
}

export default ShopCategory