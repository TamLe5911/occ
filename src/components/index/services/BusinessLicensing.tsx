/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { ViewAllOffice } from "../../../shares/components/button/ViewAllOffice";
import { OccTitle } from "../../../shares/components/title/OccTitle";
import { data } from "../../../utils/data";

const BusinessLicensing = () => {
  return (
    <div className="bg-white bor">
      <div className="xs:px-3">
      <OccTitle
        title="Business Licensing"
        icon="/share/icon-legal-2.svg"
        titlemore="View full list"
      ></OccTitle>

      </div>
      <div className="grid grid-cols-4 gap-x-5 gap-y-8 pt-10 xs:pt-3 xs:grid-cols-1 xs:px-3 xs:gap-y-3">
        {data.businesslicensing.map((datafile) => (
          <BusinessLicensingChildren key={datafile.id} {...datafile} />
        ))}
      </div>
      
    </div>
  );
};
const BusinessLicensingChildren = (datafile: any) => (
  <div className="w-full ">
  <div className="accounting bg-white overflow-hidden">
    <div className="accounting_img  text-center ">
      <img src={datafile.images} className=" w-full" />
    </div>
    <div className="border m-[-1.9rem] z-1 bg-white rounded-full w-16 grid mx-auto justify-center items-center relative h-16">
      <img src={datafile.icon} alt="" />
    </div>
    <div className="accounting_decoration text-center font-medium px-6 h-40 line pt-10 py-3">
      <span className="block text-base pb-3">{datafile.title}</span>
      <span className="font-normal bg-text-dark pb-4 text-sm">{datafile.desc}</span>
    </div>
    <div className="accounting_bnt text-center p-2">
        <ViewAllOffice></ViewAllOffice>
      </div>
  </div>
</div>
);

export { BusinessLicensing };
