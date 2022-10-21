import React from 'react'
import NewAfrica from './NewCountries/NewAfrica'
import NewAmerica from './NewCountries/NewAmerica'
import NewAsiaPacific from './NewCountries/NewAsiaPacific'
import NewCaribbean from './NewCountries/NewCaribbean'
import NewEurope from './NewCountries/NewEurope'
import NewMiddleEast from './NewCountries/NewMiddleEast'

function Tags() {
  return (
    <div className='pt-10 grid gap-y-5'>
        <NewAsiaPacific />
        <NewEurope />
        <NewCaribbean />
        <NewAmerica />
        <div className='grid grid-cols-2'>
          <NewAfrica />
          <NewMiddleEast />
        </div>
    </div>
  )
}

export default Tags