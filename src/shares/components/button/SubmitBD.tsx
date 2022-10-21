import React from 'react';

type ISubmit = {
  title: String;
  width?:number;
};
const SubmitBD = (props: ISubmit) => (
 <div className='bnt_max'>
    <div className='bg-fees-button'>
    <a href="#_" className="relative p-[1px] inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
    <span className="w-full h-full bg-gradient-to-br from-[#FF6A00] to-[#EE0979] group-hover:from-[#FF6A00] group-hover:to-to-[#EE0979] absolute"></span>
    <span  style={{ width: `${props.width}px` }} className="relative text-center py-3 transition-all ease-out bg-white rounded-md group-hover:bg-opacity-0 duration-400">
    <span className="relative bg-gradient-to-br text-base font-normal from-[#FF6A00] to-[#EE0979] bg-clip-text text-transparent group-hover:text-white">{props.title}</span>
    </span>
    </a>
    </div>

 </div>
);

export { SubmitBD };