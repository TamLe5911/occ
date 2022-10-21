/* eslint-disable @next/next/no-img-element */
import React from "react";
import { ViewAllServices } from "../../../shares/components/button/ViewAllServices";
import { OccTitle } from "../../../shares/components/title/OccTitle";
import { data } from "../../../utils/data";

const CompanyFormation = () => {
  return (
    <div className="bg-white rounded-2xl">
      <div className="xs:px-3">
      <OccTitle
        title="Company Formation"
        icon="/share/icon-menu-company.svg"
        titlemore="View full list"
      ></OccTitle>
      </div>
      <div className="md:grid md:grid-cols-4 gap-x-3 gap-y-8 pt-8 xs:gap-x-3 xs:gap-y-3 xs:pt-5 xs:columns-2 xs:mx-3">
        {data.companyformation.slice(0,8).map((datafile) => (
          <Company key={datafile.slug} {...datafile} />
        ))}
      </div>
      <div className=" w-full mt-4 p-2 text-center cursor-pointer border-t border-slate-200 border-b-8 hidden xs:block">
      <ViewAllServices titlemore="View full list" ></ViewAllServices>
      </div>
    </div>
  );
};

const Company = (datafile: any) => (
  <div className="w-full xs:pt-3">
    <div className="company">
      <img
        src={datafile.images}
        alt={datafile.title}
        className="rounded-t-lg"
      />
      <div className="bg-box-shadow p-3">
          <h2 className="text-base bg-text-black font-semibold xs:text-sm xs:font-medium h-10 xs:h-auto">
            {datafile.title}
          </h2>
          <ul className="bg-list-disc pl-6 xs:mt-2 h-24 xs:h-auto mt-5">
            <li className="text-sm bg-text-dark">{datafile.decs}</li>
            <li className="text-sm bg-text-dark mt-2 ">{datafile.decs2}</li>
          </ul>
        <p className="pl-2 text-right">
          <span className="text-base bg-text-dark">Form </span>
          <span className="text-base bg-text-black font-normal">US$ </span>
          <span className="text-base  font-normal bg-text-green">
            {datafile.price}
          </span>
        </p>
  
        
      </div>
    </div>
  </div>
);

export { CompanyFormation };
