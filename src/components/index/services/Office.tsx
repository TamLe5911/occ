/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import React from "react";
import { ViewAllOffice } from "../../../shares/components/button/ViewAllOffice";
import { data } from "../../../utils/data";
type IInfos = {
  id: number;
  title: string;
  img: string;
  icon: string;
  desc: string;
  desclist: string;
};
const Office = () => {
  return (
    <div className="columns-4 gap-x-5 gap-y-10 pt-10 xs:columns-1 xs:pt-0">
      {data.serviceoffice.map((datafile) => (
        <OfficeServiced key={datafile.id} {...datafile} />
      ))}
    </div>
  );
};

const OfficeServiced = (datafile: IInfos) => (
  <div className="w-full xs:pt-5">
    <div className="accounting bg-white overflow-hidden">
      <div className="accounting_img  text-center relative">
        <img src={datafile.img} className=" m-auto" />
      </div>
      <div className="text-center bg-icon">
        <img src={datafile.icon} alt="" />
      </div>
      <div className="accounting_decoration text-center font-medium px-3 line pt-10 py-3">
        <span className="block text-base pb-3">{datafile.title}</span>
        <span className="font-normal bg-text-dark pb-3 text-sm">
          {datafile.desc}
        </span>
      </div>
      <div className="accounting_bnt text-center p-2">
        <ViewAllOffice></ViewAllOffice>
      </div>
    </div>
  </div>
);

export { Office };
