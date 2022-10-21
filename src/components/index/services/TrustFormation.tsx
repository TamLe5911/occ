/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { OrderNows } from "../../../shares/components/button/OrderNows";
import { ViewAllServices } from "../../../shares/components/button/ViewAllServices";
import { data } from "../../../utils/data";

const TrustFormation = () => {
  return (
    <div>
      <div className="grid grid-cols-4 gap-x-5 gap-y-8 pt-10 xs:pt-3 xs:grid-cols-1 xs:gap-y-3 xs:px-3">
        {data.trust.map((datafile) => (
          <TrustFormationChildren key={datafile.id} {...datafile} />
        ))}
      </div>
      <div className=" w-full mt-4 p-2 text-center cursor-pointer border-t border-slate-200 border-b-8 hidden xs:block">
    <ViewAllServices titlemore="View full list" ></ViewAllServices>
    </div>

    </div>
  );
};
const TrustFormationChildren = (datafile: any) => (
  <div className="w-full ">
    <div className="trust bg-white overflow-hidden">
      <div className="trust_img  text-center">
        <img src={datafile.images} className=" m-auto" />
      </div>
      <div className="trust_decoration text-center font-medium mt-3  line">
        <span className="block text-base">{datafile.title}</span>
       
      </div>
      <div className="bank_decoration p-4 text-14">
        <div className="mb-2">
          <span className="text-sm">Time Frame</span>
          <span className="float-right font-medium text-sm pt-2">{datafile.time}</span>
        </div>
        <div className="mb-2">
          <span className="text-sm">Fees</span>
          <span className="float-right font-medium text-sm pt-2">US$ <strong className="font-normal" >{datafile.fees}</strong></span>
        </div>
        <div className="bank_bnt pt-5">
        <OrderNows title={"Order Now"} width={250}></OrderNows>
      </div>
      </div>
     
    </div>
  </div>
);

export { TrustFormation };
