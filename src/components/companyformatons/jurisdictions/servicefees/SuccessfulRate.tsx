/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Submit } from "../../../../shares/components/button/Submit";

function SuccessfulRate() {
  return (
    <div className="flex items-center justify-center xs:px-3 ">
      <div className="bg-fees p-10 xs:p-6 relative xs:w-full">
            <div className="absolute top-0 h-full flex items-center left-[-50px] xs:left-0 xs:h-auto xs:top-[-40px] xs:justify-center xs:w-full">
              <img src="/assets/images/icon-service-fee.png" alt="" className="block xs:hidden"/>
              <img src="/share/hands-mobile.svg" alt="" className="hidden xs:block"/>
            </div>
        <div className="flex gap-10 items-center justify-center xs:block">
          <div className="px-12 py-16 bg-boder-right xs:px-0 xs:py-0 ">
            <div className="pt-5 flex items-center justify-center">
              <h3 >
                <p className="text-left text-2xl font-medium xs:text-center">Service Fees</p>
                <p className="text-base text-left uppercase xs:text-center xs:py-2">Only from</p>
                <span className="text-5xl font-medium"> US$ <span className="text-5xl font-medium bg-text-green"> 299</span></span>
                
              </h3>
            </div>
          </div>
          <div className="text-center">
            <div className="flex">
              <span className="pt-2">
                <img src="/assets/images/icon-check-black.svg" alt="" />
              </span>
              <span className="pl-3 xs:text-base">
                <strong>100%</strong> successful rate
              </span>
            </div>
            <div className="flex mt-3 xs:text-base">
              <span className="pt-2">
                <img src="/assets/images/icon-check-black.svg" alt="" />
              </span>
              <span className="pl-3">
                <strong>Fast, easy</strong> & <strong>highly</strong> secured
              </span>
            </div>
            <div className="flex mt-3 xs:text-base">
              <span className="pt-2">
                <img src="/assets/images/icon-check-black.svg" alt="" />
              </span>
              <span className="pl-3">
                Dedicated support <strong>(24/7)</strong>
              </span>
            </div>
            <div className="flex mt-3 xs:text-base">
              <span className="pt-2">
                <img src="/assets/images/icon-check-black.svg" alt="" />
              </span>
              <span className="pl-3">
                Over <strong>27</strong> jurisdictions around the world
              </span>
            </div>
            <div className="flex mt-3 xs:text-base">
              <span className="pt-2">
                <img src="/assets/images/icon-check-black.svg" alt="" />
              </span>
              <span className="pl-3 ">Just Order, We Do All For You</span>
            </div>
            <div className="pt-10 text-left xs:pt-5 xs:w-full">
          <Submit width={250} title="Incorporate Company Now"></Submit>
        </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default SuccessfulRate;
