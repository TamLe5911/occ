import React from "react";
import { ViewAllServices } from "../../shares/components/button/ViewAllServices";
import { HeaderTitle } from "../../shares/components/title/HeaderTitle";
import { NewsTabs } from "./aboutus/NewsTabs";

const AboutUs = () => (
  <div className="container mr-auto pt-10 ">
      <div className="xs:px-3">
      <HeaderTitle title="What The Media Say About Us"></HeaderTitle>
      </div>

    <div className="mt-5 xs:mt-0 xs:px-3">
      <NewsTabs></NewsTabs>
    </div>
    <div className="flex justify-center items-center pt-10 xs:pt-0">
    <div className=" w-[300px] rounded-lg p-2 border-2 text-center cursor-pointer xs:border-t-2 xs:border-0 xs:rounded-none xs:w-full">
      <ViewAllServices titlemore="View full list" ></ViewAllServices>
      </div>
    </div>
  </div>
);

export { AboutUs };
