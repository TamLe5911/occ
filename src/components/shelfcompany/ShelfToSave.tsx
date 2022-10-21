import React from 'react'

function ShelfToSave() {
  return (
    <div>
    <div className='grid grid-cols-4 gap-5 pt-10'>
        <div >
            <div className='flex items-center justify-center shadow-lg rounded-lg border py-10'>
            <img src="/share/shelf-1.svg" alt="" />
            </div>
            <div className='pt-5 pr-3'>
                <p className='text-sm'>To save the time involved in taking the steps to create a new corporation</p>
            </div>
        </div>
        <div>
        <div className='flex items-center justify-center shadow-lg rounded-lg border py-10'>
            <img src="/share/shelf-2.svg" alt="" />
            </div>
            <div className='pt-5 pr-3'>
                <p className='text-sm'>To show corporate longevity in order to attract consumers or investors</p>
            </div>
        </div>
        <div>
        <div className='flex items-center justify-center shadow-lg rounded-lg border py-11'>
            <img src="/share/shelf-3.svg" alt="" />
            </div>
            <div className='pt-5 pr-3'>
                <p className='text-sm'>To gain access to corporate credit</p>
            </div>
        </div>
        <div>   
        <div className='flex items-center justify-center shadow-lg rounded-lg border py-10'>
            <img src="/share/shelf-4.svg" alt="" />
            </div>
            <div className='pt-5 pr-3'>
                <p className='text-sm'>To gain the opportunity to bid on contracts. (Some jurisdictions require that a company is in business for a certain length of time to have this ability)</p>
            </div>
        </div>
    </div>
    <div className='w-3/4'>
        <p className='text-base'>Our comprehensive up-to-date list of shelf companies is available for you to search and reserve your choice. All you have to do is tick the box(es) of your choice(s), send us an inquiry, and we will get back to you shortly.</p>
    </div>
    </div>
  )
}

export default ShelfToSave