import React from 'react'
import { data } from '../../../../utils/data'
import CountryBtn from './CountryBtn'

function NewMiddleEast() {
  return (
    <div className='flex flex-wrap gap-3'>
      <div>
        <img src="/Share/MiddleEast.png" alt="" />
      </div>
      <div className='w-3/4 grid items-center'>
        {data.newsinsights.slice(5,6).map((props)=>(
          <CountryBtn key={props.slug} {...props} />
        ))}
      </div>
    </div>
  )
}

export default NewMiddleEast