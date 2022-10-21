/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { OrderNows } from "../../../shares/components/button/OrderNows";
import { ViewAllServices } from "../../../shares/components/button/ViewAllServices";
import { data } from "../../../utils/data";

const BankingAccount = () => {
  return (
    <div>
    <div className="grid grid-cols-4 gap-x-5 xs:grid-cols-1 xs:px-3 xs:mt-[-8px]">
      {data.banks.map((datafile) => (
        <BankingAccountChildren key={datafile.id} {...datafile} />
      ))}
    </div>
    <div className=" w-full mt-4 p-2 text-center cursor-pointer border-t border-slate-200 border-b-8 hidden xs:block">
    <ViewAllServices titlemore="View full list" ></ViewAllServices>
    </div>
    </div>
  );
};
const BankingAccountChildren = (datafile: any) => (
  <div className="w-full relative">
        <div className="flex items-center justify-center mx-auto border p-3 h-28 xs:h-24 xs:w-24 w-28 shadow-lg rounded-2xl bg-banking xs:rounded-3xl">
        <img
          src={datafile.imgUrl}
          className="mx-auto"
        />

        </div>
    <div className="banks bg-white border">
      <div className="">
        <div className="text-center pt-14 h-28">
          <div>
        <span className="name_bank font-medium ">
        {datafile.nameBanks}
        </span>
          </div>
          <div>
        <a href="#" className="web_bank">
        {datafile.webBanks}
        </a>
            </div>
        </div>
      </div>
      <div className="bank_decoration pt-5">
        <div className="mb-2">
          <span className="font-medium">Initial Deposit</span>
          <span className="float-right">{datafile.initialDeposit}</span>
        </div>
        <div className="mb-2">
          <span className="font-medium">Average Time</span>
          <span className="float-right">{datafile.averageTime}</span>
        </div>
        <div className="mb-2">
          <span className="font-medium">Service Fee</span>
          <span className="float-right">US$ <strong className="font-normal">{datafile.serviceFee}</strong></span>
        </div>
      </div>
      <div className="bank_bnt pt-5">
      <OrderNows title={"Order Now"} width={250}></OrderNows>
      </div>

     
    </div>
  </div>
);

export { BankingAccount };
