import React from 'react'

function ShopCollection() {
  return (
    <div>
         <div>
        <ul className="flex w-full justify-center  mt-[320px] ">
                <li className=" bottom-[20px] py-0  cursor-pointer 
                   transition-all duration-200 relative group">
                   <a href='/' className='text-[30px] font-light'>Shop by Collections</a>
                   <div className="absolute bottom-0 w-[30px]  bg-black group-hover:block
                   transition-all h-[2px] duration-100 "></div>
               </li>
               </ul>
        </div>

        <div>
            <div className='grid grid-cols-3 grid-rows-3 gap-4 mx-auto max-w-[1335px]'>
           <div className='row-span-2'>
           <div className='group overflow-hidden'>
                <picture className='w-full flex'>
                <img alt='img' src="https://d1put4x3vjlh9s.cloudfront.net/public/uploads/widgets/Office-Editjpg12354817091666813593jpeg116703318241840382jpeg__13170696801743840712.webp"
                className="group-hover:scale-110 duration-1000 w-full  "/>
                
                </picture>
            </div>
               
               
           </div>
           <div className='col-span-1'>
           <div className='group overflow-hidden'>
                <picture className='w-full flex'>
                <img alt='img' src="https://d1put4x3vjlh9s.cloudfront.net/public/uploads/widgets/Katha-Mobilejpg7660648211157496962jpeg393948096769917449jpeg__9461133621886232187.webp" 
                className="group-hover:scale-110 duration-1000 w-full  "/>
                
                </picture>
            </div>
           </div>
           <div className='row-span-2 overflow-hidden'>
           <div className='group overflow-hidden'>
                <picture className='w-full flex'>
                <img alt='img' src="https://d1put4x3vjlh9s.cloudfront.net/public/uploads/widgets/Kids-warejpg495863974234454478jpeg1350945536379134658jpeg__16648500832047513123.webp"
                 className="group-hover:scale-110 duration-1000 w-full  "></img>
                </picture>
            </div>
           </div>
           <div className='row-span-2'>
           <div className='group overflow-hidden'>
                <picture className='w-full flex'>
                <img alt='img' src="https://d1put4x3vjlh9s.cloudfront.net/public/uploads/widgets/Swarajya-Desktopjpg19574568371460722107jpeg616131972126053501jpeg__15331592961337074259.webp" 
                className="group-hover:scale-110 duration-1000 w-full  "></img>
                </picture>
            </div>
           </div>
           <div className='row-span-1 relative bottom-[65px]'>
           <div className='group overflow-hidden'>
                <picture className='w-full flex'>
                <img alt="img" src="https://d1put4x3vjlh9s.cloudfront.net/public/uploads/widgets/Zodiac-web-02jpg19139576961625875085jpeg20642151981402727019jpeg__15615746577698668.webp"
                 className="group-hover:scale-110 duration-1000 w-full  "></img>
                </picture>
            </div>
           </div>
           <div className='row-span-1 col-span-1 relative bottom-[65px]'>
           <div className='group overflow-hidden'>
                <picture className='w-full flex'>
                <img src="https://d1put4x3vjlh9s.cloudfront.net/public/uploads/widgets/Inajpg17823244451247109084jpeg12126384252067766211jpeg__720346111537566341.webp" width="447" height="560" alt="shop by collection"
                 className="group-hover:scale-110 duration-1000 w-full  "></img>
               
                </picture>
            </div>

         
           </div>
          
                
            </div>
        </div>
        <div className='flex justify-center'>
         <button  className='h-[40px] w-[300px] border border-black text-xs font-normal hover:bg-purple-900 hover:text-gray-200 hover:font-medium relative bottom-[20px]'
           >EXPLORE MORE</button>
         </div>
    </div>
  )
}

export default ShopCollection