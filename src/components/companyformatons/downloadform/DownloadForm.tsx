import React from 'react'
import { data } from '../../../utils/data'
import ListFaqs from '../feature/ListFaqs'
import { CardDownload } from './CardDownload'
import { DownloadTitle } from './DownloadTitle'


function DownloadForm() {
  return (
    <div className='container mx-auto'>
      <div className='pt-10'>
      <DownloadTitle title={"1. Application Formation Form"} />
      <div className='grid grid-cols-4 gap-5 pt-5'> 
      <CardDownload />
      <CardDownload />
      <CardDownload />
      <CardDownload />
      </div>

      </div>
      
     <div className='grid grid-cols-2 gap-10 pt-10'>
      <div>
      <DownloadTitle title={"2. Business Plan Form"} />
      <div className='pt-5'>
      <CardDownload />
      </div>
      </div>
      <div>
      <DownloadTitle title={"3. Information Update Form"} />
      <div className='pt-5'>
      <CardDownload />
      </div>

      </div>
      </div> 

      <div className='pt-10'>
      <DownloadTitle title={"4. Rate Card"} />
      <div>
      <div className="grid grid-cols-2 gap-x-10">
        {data.faqs.map((infos) => (
          <ListFaqs key={infos.id} {...infos} />
        ))}
      </div>
      </div>
      </div>
      <div className='pt-10'>
      <DownloadTitle title={"5. Sample Documents"} />
      <div>
      <div className="grid grid-cols-2 gap-x-10">
        {data.faqs.map((infos) => (
          <ListFaqs key={infos.id} {...infos} />
        ))}
      </div>
      </div>
      </div>
    </div>
  )
}

export default DownloadForm