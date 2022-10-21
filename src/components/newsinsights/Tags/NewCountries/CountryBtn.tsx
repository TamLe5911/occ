
import React from 'react'



function CountryBtn(props : any) {
  return (
    <div className='flex gap-3 flex-wrap'>{props.countries.map((props :any) => {
        return <button className='occ__btn-newsing' key={props.id}>{props.country}</button>;
        })}</div>
  )
}

export default CountryBtn

