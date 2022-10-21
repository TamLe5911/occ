import React from 'react'
import { ListInsights } from '../../index/news/Insights'
import { ListNews } from '../../index/news/ListNews'

function JurisdictionUpdates() {
  return (
    <div>
     <div className="grid grid-cols-1 xs:grid-cols-1 gap-16 mt-10 xs:mt-5 pb-6 rounded-3xl xs:pb-5 xs:gap-3 xs:border-b-8 xs:border-slate-100 xs:rounded-none ">
      <ListNews></ListNews>
      <ListInsights></ListInsights>
    </div>
    </div>
  )
}

export default JurisdictionUpdates