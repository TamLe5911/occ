/* eslint-disable @next/next/no-img-element */
import React from "react";
import { data } from "../../../utils/data";
import { ViewAllServices } from "../../../shares/components/button/ViewAllServices";

const PartnershipList = () => {
  return (
    <div className="w-1/2 mt-10 pb-6 rounded-3xl mx-auto xs:w-full xs:mt-5">
      {data.partnership.slice(0, 1).map((infos) => (
        <Partnership key={infos.id} {...infos} />
      ))}
    </div>
  );
};
const Partnership = (infos: any) => (
  <div className="">
    <div className="shadow-md rounded-lg bg-white">
      <img src={infos.images} alt="" className="rounded-t-2xl" />
      <div className="text p-5 md:h-32 xs:text-left">
        <a className="leading-5 text-lg bg-text-black font-medium" href="">
          {infos.title}
        </a>
        <p className="text-base bg-text-dark">{infos.decs}</p>
      </div>
      <div className="p-5 text-right border-t-2 ">
        <ViewAllServices  titlemore="Get support now" />
      </div>
    </div>
  </div>
);

export { PartnershipList };
