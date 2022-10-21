import React from 'react'

function Search() {
  return (
   
      <div className='w-full'>
        <div className="flex ">
            <div className='w-5/6 bg-search-left p-3 '>
            <select
                name=""
                style={{border:"none", outline:"none", color:"#343434", fontSize:"18px", fontWeight:"500"}}
                className="w-full flex items-center "
            >
                <option value="">Select jurisdiction</option>
                <option value="0">Zalo</option>
                <option value="1">Viber</option>
                <option value="2">Yahoo</option>
                <option value="2">Yahoo</option>
                <option value="2">Yahoo</option>
                <option value="2">Yahoo</option>
                <option value="2">Yahoo</option>
                <option value="2">Yahoo</option>
            </select>
            </div>
            <div className="w-1/6  ">
            <button className="px-14 py-3 bg-search-right ">
            <span className=" block font-medium text-lg  text-white ">
                Explore</span>
            </button>
            </div>
        </div>
      </div>

  )
}

export default Search