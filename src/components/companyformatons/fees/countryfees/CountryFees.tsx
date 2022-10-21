import React, { useState } from 'react'
import FeesTables from './FeesTables'



function CountryFees() {
    const [expanded, setExpanded] = useState(true)
  return (
    <>
    <div className='bg-fees-country'>
      <div className="flex justify-between cursor-pointer" onClick={() => setExpanded(!expanded)}>
          <button
            className="text-base text-black font-medium flex items-center gap-3 px-3 py-4"
          >
           
           Hong Kong Country | Starting a business in Hong Kong
          </button>
          <button className="px-3" onClick={() => setExpanded(!expanded)}>
            {expanded ? (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="3"
                  y="11.1"
                  width="18"
                  height="1.35"
                  rx="0.674998"
                  fill="#0154B8"
                />
              </svg>
            ) : (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="3"
                  y="11.1"
                  width="18"
                  height="1.35"
                  rx="0.674998"
                  fill="#0154B8"
                />
                <rect
                  x="11.1001"
                  y="3"
                  width="1.35"
                  height="18"
                  rx="0.675"
                  fill="#0154B8"
                />
              </svg>
            )}
          </button>
        </div>
        <div className="">
          {expanded && (
            <div className="" >
             <FeesTables />
              
            </div>
          )}
        </div>
    </div>
    </>
    
  )
}

export default CountryFees