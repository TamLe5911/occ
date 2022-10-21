import Link from 'next/link'
import React from 'react'
import { ViewAllServices } from '../../shares/components/button/ViewAllServices'
import Articles from './Articles/Articles'
import JurisdictionUpdates from './JursdictionUpdates/JurisdictionUpdates'
import Tags from './Tags/Tags'

function NewsInsights() {
  return (
    <div className='container mx-auto'>
        <div className='grid grid-cols-2 pt-10 gap-x-5'> 
        <div className='pb-10'>

        <div className="flex gap-5">
        <img src="/share/icon-download-form.svg" alt="" />
        <h2 className="text-xl mt-2">Jurisdiction Updates</h2>
        </div>
        <JurisdictionUpdates />

        <div className="flex justify-center items-center xs:hidden">
        <div className=" w-[300px] rounded-lg p-2 border-2 text-center cursor-pointer ">
            <ViewAllServices titlemore="View full list"></ViewAllServices>
        </div>
        </div>

        </div>
    
        <div>
        <div className="flex gap-5">
        <img src="/share/icon-download-form.svg" alt="" />
        <h2 className="text-xl mt-2">Tags</h2>
        </div>
        <Tags />
        </div>
        </div>
        <div className='pb-10'>
        <div className="flex gap-5">
        <img src="/share/icon-download-form.svg" alt="" />
        <h2 className="text-xl mt-2">Articles</h2>
        </div>
        <div className='py-10'>
          <Articles />

        </div>
        <div className="flex justify-center items-center xs:hidden">
          <Link href="newsinsights/jurisdictionupdates">
        <div className=" w-[300px] rounded-lg p-2 border-2 text-center cursor-pointer ">
            <ViewAllServices titlemore="View full list"></ViewAllServices>
        </div>
          </Link>
        </div>
        </div>
    </div>
  )
}

export default NewsInsights