/* eslint-disable @next/next/no-img-element */
import React from "react";
import { data } from "../../../utils/data";
const ListInsights = () => {
  return (
    <div className="grid gap-6 xs:gap-5">
      {data.news.slice(1).map((infos) => (
        <Insights key={infos.id} {...infos} />
      ))}
    </div>
  );
};
const Insights = (infos: any) => (
  <div className="w-full xs:border-t xs:border-slate-300 ">
    <div className="xs:mx-3">
    <div className=" bg-white flex md:flex-wrap xs:pt-5 xs:gap-2">
      <div className="img xs:order-2">
        <img src={infos.images} alt="" />
      </div>
      <div className="text w-4/6 pl-5 xs:pl-0 xs:order-1 xs:w-full">
        <a className="leading-5 text-base bg-text-black m-0 font-medium xs:font-normal xs:text-sm" href="">
          {infos.title}
        </a>
      </div>
    </div>
    </div>
  </div>
);

export { ListInsights };
