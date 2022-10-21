import React from 'react'
import { ViewAllServices } from '../../../shares/components/button/ViewAllServices'

import { data } from '../../../utils/data'
import CardNewSign from '../CardNewSign/CardNewSign'


function NavicationNewSign() {
  return (
    <div className='container mx-auto'>
        <div className='grid grid-cols-3 gap-3 py-10'>
          {data.articles.map((props)=>(
            <CardNewSign key={props.id}{...props}/>
          ))}
        </div>
        <div className='flex items-center justify-between pb-10'>
          <div>
            {/* <Pagination /> */}
          </div>
     
          <div className="w-[300px] rounded-lg p-2 border-2 text-center cursor-pointer ">
            <ViewAllServices titlemore="View full list"></ViewAllServices>
          </div>
       
        </div>
    </div>
  )
}

export default NavicationNewSign