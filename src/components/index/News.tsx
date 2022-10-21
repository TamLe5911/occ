import React from "react";
import { ViewAllServices } from "../../shares/components/button/ViewAllServices";
import { HeaderTitle } from "../../shares/components/title/HeaderTitle";
import { ListInsights } from "./news/Insights";
import { ListNews } from "./news/ListNews";

const News = () => (
  <div className="container mx-auto">
    <div className="xs:px-3">
      <HeaderTitle title="News & Insights"></HeaderTitle>
    </div>
    <div className="grid grid-cols-2 xs:grid-cols-1 gap-16 mt-10 xs:mt-5 pb-6 rounded-3xl xs:pb-5 xs:gap-3 xs:border-b-8 xs:border-slate-100 xs:rounded-none ">
      <ListNews></ListNews>
      <ListInsights></ListInsights>
    </div>
    <div className="flex justify-center items-center xs:hidden">
      <div className=" w-[300px] rounded-lg p-2 border-2 text-center cursor-pointer ">
        <ViewAllServices titlemore="View full list"></ViewAllServices>
      </div>
    </div>
  </div>
);

export { News };
