/* eslint-disable @next/next/no-img-element */
import React from "react";

const UtilitiesItem = (datafile: any) => (
  <div className="utilities_item flex flex-col p-5 xs:p-2">
    <div className=" utilities_item_img">
      <img src={datafile.images} alt={datafile.title} className="mx-auto" />
    </div>
    <div className=" utilities_item_text text-center mx-auto mt-5 pl-5">
      <span className="text-lg font-normal w-4/5 float-left">{datafile.title}</span>
    </div>
  </div>
);

export { UtilitiesItem };
