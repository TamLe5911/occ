/* eslint-disable @next/next/no-img-element */

import React from 'react'

type IHowtoSetUp = {
    image:string,
    title:string,
    desc:string,
    number:string,
}



function IconSetup(props : IHowtoSetUp) {
  return (

        <div className='bg-arrow-none'>
            <div className='grid justify-center items-center pt-10'>
            <div className='p-5 shadow-lg bg-fees'>
            <img src={props.image} alt={props.title} />
            </div>
            </div>
            <div>
            <div className='flex items-center justify-center pt-10 '>
                <span className='rounded-full px-5 py-3 bg-text-blue bg-[#DEF1FF] bg-img'>{props.number}</span>
    
            </div>
            </div>

            <div className='px-3 pt-5'>
            <h1 className='flex justify-center items-center text-black text-xl font-medium'>{props.title}</h1>
            <div className='pt-5'>
                <ul>
                    <li className='text-sm'>{props.desc}</li>
                </ul>
          
          </div>
          </div>

         
        </div>
    
  
  )
}

export default IconSetup;