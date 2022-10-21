import Link from 'next/link'
import React from 'react'

function CardNewSign(props:any) {
  return (
    <Link href="/newsinsights/jurisdictionupdates/[id]" title={props.title}>
      <div> 
          <div>
            <img src={props.images} alt={props.title} />
          </div>
          <div className='p-5'>
            <h2 className='text-base font-medium h-10'>{props.title}</h2>
            <p className='text-sm pt-5'>{props.content}</p>
            </div>
        </div>
    </Link>
    
  )
}

export default CardNewSign