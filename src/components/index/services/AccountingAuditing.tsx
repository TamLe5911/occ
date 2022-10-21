/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { ViewAllOffice } from "../../../shares/components/button/ViewAllOffice";
import { ViewAllServices } from "../../../shares/components/button/ViewAllServices";
import { OccTitle } from "../../../shares/components/title/OccTitle";
import { data } from "../../../utils/data";

const AccountingAuditing = () => {
  return (
    <div className="bg-white mb-10 xs:mb-2">
      <div className="xs:px-3">
      <OccTitle
        title="Accounting & Auditing"
        icon="/share/icon-legal-1.svg"
        titlemore="View full list"
      ></OccTitle>
      </div>
      <div className="grid grid-cols-4 gap-x-5 gap-y-8 pt-10 xs:pt-3 xs:gap-y-3 xs:grid-cols-1 xs:px-3">
        {data.accounting.map((datafile) => (
          <AccountingAuditingChildren key={datafile.id} {...datafile} />
        ))}
      </div>
      <div className=" w-full mt-4 p-2 text-center cursor-pointer border-t border-slate-200 border-b-8 hidden xs:block">
    <ViewAllServices titlemore="View full list" ></ViewAllServices>
    </div>
    </div>
  );
};
const AccountingAuditingChildren = (datafile: any) => (
  <div className="w-full ">
    <div className="accounting bg-white overflow-hidden">
      <div className="accounting_img  text-center relative">
        <img src={datafile.images} className=" w-full" />
      </div>
      <div className="text-center bg-icon">
        <img src={datafile.icon} alt="" />
      </div>
      <div className="accounting_decoration text-center font-medium px-12 line pt-10 py-3">
        <span className="block text-base pb-3">{datafile.title}</span>
        <span className="font-normal bg-text-dark pb-3 text-sm">{datafile.desc}</span>
      </div>
      <div className="accounting_bnt text-center p-2">
        <ViewAllOffice></ViewAllOffice>
      </div>
    </div>
  </div>
);

export { AccountingAuditing };
