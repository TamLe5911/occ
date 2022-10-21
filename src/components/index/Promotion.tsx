import React from "react";
import { ViewAll } from "../../shares/components/button/ViewAll";
import { HeaderTitle } from "../../shares/components/title/HeaderTitle";
import { ListPromotion } from "./promotion/ListPromotion";

const Promotion = () => (
  <div className="bg-[#FFEBEB] pt-10 relative xs:px-3 xs:pt-0 xs:bg-white">
    <div className="container mx-auto flex justify-between xs:items-center">
      <HeaderTitle title="Promotion"></HeaderTitle>
      <ViewAll titlemore="View full list" link={"/promotion"} />
    </div>
    <div className="pb-10 xs:pb-0">
      <ListPromotion></ListPromotion>
    </div>
  </div>
);

export { Promotion };
