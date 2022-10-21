/* eslint-disable @next/next/no-img-element */
import React from "react";
const OneIBCClub = () => (
  <div className="relative ">
   <div className="absolute  flex justify-center items-center top-0 left-0 w-full h-full xs:px-2">
    <div className="grid grid-cols-2 gap-12 container xs:grid-cols-1 xs:gap-5">
      <div  className="order-2">
        <div className="flex mb-4 pt-4 xs:items-center">
          <div className="w-1/6 grid items-center justify-center oneibncclud-icon xs:w-3/12 xs:h-20">
            <img
              src="/share/investment.png"
              alt=""
              className=""
            />
          </div>
          <div className="w-5/6 py-3 px-5 xs:pl-5 xs:px-0">
            <p className="text-lg text-white font-medium">Earning Points</p>
            <p className="text-base text-white">
              Earn Credit Points on qualifying purchasing of services. You’ll{" "}
              <br></br> earn credit Points for every eligible U.S. dollar spent.
            </p>
          </div>
        </div>
        <div className="flex mb-4 xs:items-center">
          <div className="w-1/6 grid items-center justify-center oneibncclud-icon xs:w-3/12 xs:h-20">
            <img
              src="/share/aupport_multiple.png"
              alt=""
              className=""
            />
          </div>
          <div className="w-5/6 py-3 px-5 xs:pl-5 xs:px-0">
            <p className="text-lg text-white font-medium">Using Points</p>
            <p className="text-base text-white">
              Spend credit points directly for your invoice.<br></br>100 credit
              points = 1 USD
            </p>
          </div>
        </div>
      </div>
      <div className="order-1">
        <h3 className="bg_fs-40 text-white">OneIBC Club</h3>
        <p className="text-base text-white mt-5">
          There are four rank levels of ONE IBC membership. Advance through
          three elite ranks when you meet qualifying criteria. Enjoy elevated
          rewards and experiences throughout your journey. Explore the benefits
          for all levels. Earn and redeem credit points for our services.
        </p>
        <div className="flex justify-between mt-2 xs:mt-5">
          <div className="button_club xs:w-full">
            <button>View more</button>
          </div>
        </div>
      </div>
    </div>
    </div> 
    <div>
      <img src="/share/oneibc-club.png" alt="" className="xs:hidden"/>
      <img src="/share/oneclud-mobie.png" alt="" className="xs:block hidden w-full"/>
    </div>
  </div>
);

export { OneIBCClub };
