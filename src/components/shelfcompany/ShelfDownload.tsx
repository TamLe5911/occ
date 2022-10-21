import React from 'react'
import { CardDownload } from '../companyformatons/downloadform/CardDownload'
import { DownloadTitle } from '../companyformatons/downloadform/DownloadTitle'

function ShelfDownload() {
  return (
    <div className='grid grid-cols-2 gap-10 pt-10'>
    <div>
    <DownloadTitle title={"1. Hong Kong"} />
    <div className='grid grid-cols-2 gap-5 pt-5'>
    <CardDownload />
    <CardDownload />
    </div>
    </div>
    <div>
    <DownloadTitle title={"2. Other"} />
    <div className='pt-5'>
    <CardDownload />
    </div>

    </div>
    </div> 
  )
}

export default ShelfDownload