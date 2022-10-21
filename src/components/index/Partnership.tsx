import React from "react";
import { HeaderTitle } from "../../shares/components/title/HeaderTitle";
import { PartnershipList } from "./Partnership/PartnershipList";

const Partnership = () => (
  <div className="mx-auto text-center pt-10 xs:text-left xs:px-3 xs:pt-5">
    <HeaderTitle title="Partnership & Intermediaries"></HeaderTitle>
    <PartnershipList></PartnershipList>
  </div>
);

export { Partnership };
