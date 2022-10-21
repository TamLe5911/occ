import React from 'react'
import Overview from '../companyformatons/nominee/Overview'
import ShelfToSave from './ShelfToSave'

function SheftFeatures() {
  return (
    <div className='container mx-auto pt-10'>
        <div className='w-3/4'>
        <Overview image='/share/offshoreFormation.svg' title={"Overview"} desc={"A shelf company is created and left without any activity. The company can then be sold to a person or group of persons who wish to start a company without going through all the procedures of creating a new one. Common reasons for buying a shelf company include the following:"}/>
        </div>
        <div>
            <ShelfToSave />
        </div>
        <div className='pt-10'>
        <div className='flex gap-3 items-center'>
            <img src="/share/iconfees.svg" alt="" />
            <h2 className='text-lg font-medium '>Offshore Shelf Companies List For Sale</h2>
        </div>
        <div className='p-5 flex items-center justify-center'>
            <p>Update Soon</p>
        </div>
        
        </div>
        <div>
        <div className='pt-10'>
        <div className='flex gap-3 items-center'>
            <img src="/share/iconfees.svg" alt="" />
            <h2 className='text-lg font-medium '>Offshore Shelf Companies List For Sale</h2>
        </div>
        
        </div>
        </div>
    </div>
  )
}

export default SheftFeatures