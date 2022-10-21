/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { OrderNows } from '../../../../shares/components/button/OrderNows'
import ModalFees from './ModalFees'

function FeesTables() {
  return (
    <div className='bg-[#FFFFFF]'>
    <table className='table-auto w-full'>
        <thead className='border-t'>
            <tr className='text-sm  '>
            <th className='border-r border-slate-200 p-[21px] uppercase font-normal'>Type of Company</th>
            <th className='border-r border-slate-200 uppercase font-normal'>For 1st year</th>
            <th className='border-r border-slate-200 uppercase font-normal'>For year 2+</th>
            <th className='border-r border-slate-200 uppercase font-normal'>Government fee &<br></br> Service charged</th>
            <th className='uppercase '>Company Kit</th>
        </tr>
        </thead>
        <tbody className=''>
        <tr className='text-sm border-slate-200 border-t  bg-fees-backround cursor-pointer'>
            <td className='border-r border-slate-200 text-start p-3  '><a href="" className='text-black'>Company Limited by Shares (recommend)</a></td>
            <td className='border-r border-slate-200 text-center '>US$ 799</td>
            <td className='border-r border-slate-200 text-center '>US$ 599</td>
            <td className='border-r border-slate-200 text-center '>US$ 277</td>
            <td className=''>
                <div className='flex items-center justify-center gap-5 py-2'>
                <ModalFees />
                <div className='bg-fees-button'>
                <OrderNows title={"Order Now"} width={130}></OrderNows>

                </div>
                </div>
            </td>
        </tr>
        <tr className='text-sm border-slate-200 border-t  bg-fees-backround cursor-pointer'>
            <td className='border-r border-slate-200 text-start p-3  '><a href="" className='text-black'>Company Limited by Shares (recommend)</a></td>
            <td className='border-r border-slate-200 text-center '>US$ 799</td>
            <td className='border-r border-slate-200 text-center '>US$ 599</td>
            <td className='border-r border-slate-200 text-center '>US$ 277</td>
            <td className=''>
                <div className='flex items-center justify-center gap-5 py-2'>
                <ModalFees />
                <div className='bg-fees-button'>
                <OrderNows title={"Order Now"} width={130}></OrderNows>

                </div>
                </div>
            </td>
        </tr>
        
        </tbody>


    </table>
   
    </div>

  )
}

export default FeesTables