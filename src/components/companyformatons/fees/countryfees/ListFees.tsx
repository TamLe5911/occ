import React from 'react'
import CountryFees from './CountryFees';



function ListJurisdictions() {
    const [openTab, setOpenTab] = React.useState(1);
  return (
    <div className="relative container mx-auto flex gap-8 w-full">
    <div className="w-[9.5%] rounded-lg ">
      <ul className="px-3 py-3 rounded-lg list-none bg-[#F0F2F5]" role="tablist">
        <li className="py-2 bg-white rounded-lg">
        <a 
              onClick={(e) => { e.preventDefault(); setOpenTab(1);}}
               data-toggle="tab"
               href="#link1"
               role="tablist"
              >
            <div className='flex items-center justify-center'>
            {openTab === 1 ? <img src="/share/earth-all.svg" alt="" /> : <img src="/share/earth-1.svg" alt="" />}
            
            </div>
            <div className='flex items-center justify-center text-base mt-2'>
            Asia Pacific
            </div>
            </a>
         
        </li>
        <li className="py-2 bg-white rounded-lg mt-3" >
        <a 
              onClick={(e) => { e.preventDefault(); setOpenTab(3);}}
               data-toggle="tab"
               href="#link3"
               role="tablist"
              >
            <div className='flex items-center justify-center'>
            {openTab === 3 ? <img src="/share/earth-all.svg" alt="" /> : <img src="/share/earth-1.svg" alt="" />}
            </div>
            <div className='flex items-center justify-center text-base mt-2'>
            Europe
            </div>
            </a>
        </li>
        <li className="py-2 bg-white rounded-lg mt-3" >
        <a 
              onClick={(e) => { e.preventDefault(); setOpenTab(2);}}
               data-toggle="tab"
               href="#link2"
               role="tablist"
              >
            <div className='flex items-center justify-center'>
            {openTab === 2 ? <img src="/share/earth-all.svg" alt="" /> : <img src="/share/earth-1.svg" alt="" />}
            </div>
            <div className='flex items-center justify-center text-base mt-2'>
            Europe
            </div>
            </a>
        </li>
        <li className="py-2 bg-white rounded-lg mt-3">
        <a 
              onClick={(e) => { e.preventDefault(); setOpenTab(4);}}
               data-toggle="tab"
               href="#link1"
               role="tablist"
              >
            <div className='flex items-center justify-center'>
            {openTab === 4 ? <img src="/share/earth-all.svg" alt="" /> : <img src="/share/earth-1.svg" alt="" />}
            </div>
            <div className='flex items-center justify-center text-base mt-2'>
            Caribbean
            </div>
            </a>
        </li>
       
        <li className="py-2 bg-white rounded-lg mt-3">
        <a 
              onClick={(e) => { e.preventDefault(); setOpenTab(5);}}
               data-toggle="tab"
               href="#link5"
               role="tablist"
              >
          <div className='flex items-center justify-center'>
          {openTab === 5 ? <img src="/share/earth-all.svg" alt="" /> : <img src="/share/earth-1.svg" alt="" />}
          </div>
          <div className='flex items-center justify-center text-base mt-2'>
            Africa
          </div>
          </a>
        </li>
        <li className="py-2 bg-white rounded-lg mt-3">
        <a 
              onClick={(e) => { e.preventDefault(); setOpenTab(6);}}
               data-toggle="tab"
               href="#link6"
               role="tablist"
              >
            <div className='flex items-center justify-center'>
            {openTab === 6 ? <img src="/share/earth-all.svg" alt="" /> : <img src="/share/earth-1.svg" alt="" />}
            </div>
            <div className='flex items-center justify-center text-base mt-2'>
            America
            </div>
            </a>
        </li>
      </ul>
    </div>
    <div className="w-[90%]">
      <div className="container mx-auto">
        <div className="flex flex-col min-w-0 break-words  w-full rounded-2xl">
          <div className=" flex-auto">
            <div className=" tab-content tab-space">
              <div className={openTab === 1 ? "block" : "hidden"}
                id="link1">
          
              <CountryFees />
              

              </div>
              <div className={openTab === 2 ? "block" : "hidden"}
                id="link2">
           
             
                
              </div>
              <div className={openTab === 3 ? "block" : "hidden"}
                id="link3">
          
            
              </div>
             
              <div className={openTab === 4 ? "block" : "hidden"}
                id="link4" >
       
             
              </div>
              <div className={openTab === 5 ? "block" : "hidden"}
                id="link5">
         
              

              </div>
              <div className={openTab === 6 ? "block" : "hidden"}
                id="link6">
            
              

              </div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    // <div>
    //      <div className="container mx-auto flex gap-10 w-full">
    //     <div className="w-1/5 rounded-sm ">
    //       <ul className="py-2 rounded-lg list-none bg-[#EDFAFD]" role="tablist">
    //         <li className="">
    //           <a className={ " " + (openTab === 1 ? "from-[#00C6FF]  to-[#0072FF] bg-gradient-to-r bg-clip-text text-transparent  border-l-2 border-l-[#00C6FF] rounded-[0.5px] " : "text-[#7FA1CB]")}
    //             onClick={(e) => { e.preventDefault(); setOpenTab(1);}}
    //             data-toggle="tab"
    //             href="#link1"
    //             role="tablist"
    //           >
    //             Asia Pacific (7)
    //           </a>
    //         </li>
    //         <li className="">
    //           <a className={ " " + (openTab === 2 ? "from-[#00C6FF]  to-[#0072FF] bg-gradient-to-r bg-clip-text text-transparent  border-l-2 border-l-[#00C6FF] rounded-[0.5px] " : "text-[#7FA1CB]")}
    //             onClick={(e) => { e.preventDefault(); setOpenTab(2);}}
    //             data-toggle="tab"
    //             href="#link2"
    //             role="tablist"
    //           >
    //             Europe (8)
    //           </a>
    //         </li>
    //         <li className="">
    //           <a className={ " " + (openTab === 3 ? "from-[#00C6FF]  to-[#0072FF] bg-gradient-to-r bg-clip-text text-transparent  border-l-2 border-l-[#00C6FF] rounded-[0.5px] " : "text-[#7FA1CB]")}
    //             onClick={(e) => { e.preventDefault(); setOpenTab(3);}}
    //             data-toggle="tab"
    //             href="#link3"
    //             role="tablist"
    //           >
    //             Caribbean (8)
    //           </a>
    //         </li>
    //         <li className="">
    //           <a className={ " " + (openTab === 4 ? "from-[#00C6FF]  to-[#0072FF] bg-gradient-to-r bg-clip-text text-transparent  border-l-2 border-l-[#00C6FF] rounded-[0.5px] " : "text-[#7FA1CB]")}
    //             onClick={(e) => { e.preventDefault(); setOpenTab(4);}}
    //             data-toggle="tab"
    //             href="#link4"
    //             role="tablist"
    //           >
    //             Middle East (1)
    //           </a>
    //         </li>
    //         <li className="">
    //           <a className={ " " + (openTab === 5 ? "from-[#00C6FF]  to-[#0072FF] bg-gradient-to-r bg-clip-text text-transparent  border-l-2 border-l-[#00C6FF] rounded-[0.5px] " : "text-[#7FA1CB]")}
    //             onClick={(e) => { e.preventDefault(); setOpenTab(5);}}
    //             data-toggle="tab"
    //             href="#link5"
    //             role="tablist"
    //           > 
    //             Africa (2)
    //           </a>
    //         </li>
    //         <li className="">
    //           <a className={ " " + (openTab === 6 ? "from-[#00C6FF]  to-[#0072FF] bg-gradient-to-r bg-clip-text text-transparent  border-l-2 border-l-[#00C6FF] rounded-[0.5px] " : "text-[#7FA1CB]")}
    //             onClick={(e) => { e.preventDefault(); setOpenTab(6);}}
    //             data-toggle="tab"
    //             href="#link6"
    //             role="tablist"
    //           >
    //             America (2)
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //     <div className="w-4/5">
    //       <div className=" container  m-auto">
    //         <div className="relative flex flex-col min-w-0 break-words  w-full rounded-2xl">
    //           <div className=" flex-auto">
    //             <div className=" tab-content tab-space">
    //               <div
    //                 className={openTab === 1 ? "block" : "hidden"}
    //                 id="link1"
    //               >
    //                 <CountryFees />
    //               </div>
    //               <div
    //                 className={openTab === 2 ? "block" : "hidden"}
    //                 id="link2"
    //               >
    //                 <h1>2</h1>
    //               </div>
    //               <div
    //                 className={openTab === 3 ? "block" : "hidden"}
    //                 id="link3"
    //               >
    //                   <h1>3</h1>
    //               </div>
    //               <div
    //                 className={openTab === 4 ? "block" : "hidden"}
    //                 id="link4"
    //               >
    //                 <h1>4</h1>
    //               </div>
    //               <div
    //                 className={openTab === 5 ? "block" : "hidden"}
    //                 id="link4"
    //               >
    //                 <h1>5</h1>
    //               </div>
    //               <div
    //                 className={openTab === 6 ? "block" : "hidden"}
    //                 id="link4"
    //               >
    //                 <h1>5</h1>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}

export default ListJurisdictions