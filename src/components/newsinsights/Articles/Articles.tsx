import React from 'react'
import { data } from '../../../utils/data'
import CardNewSign from '../CardNewSign/CardNewSign'




function Articles() {
  return (
    <div className='grid grid-cols-3 gap-3'>
      {data.articles.slice(0,6).map((props)=>(
        <CardNewSign key={props.id}{...props} />
      ))}
    </div>
  )
}

export default Articles