import React from 'react'
import { data } from '../../../../utils/data'
import { CardCountry } from './CardCountry'
import { forwardRef } from "react";

const AsiaPacific = forwardRef((props, ref :any) => {
  return (
    <div className="grid grid-cols-3 gap-8" ref={ref}>
      {data.asians.map((datafile) => (
        <CardCountry key={datafile.slug} {...datafile} />
      ))}
      </div>
  
  )
});

export default AsiaPacific