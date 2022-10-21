import React from "react";
import { OccTitle } from "../../../shares/components/title/OccTitle";
import { VintageTitle } from "../../../shares/components/title/VintageTitle";
import { CompanyFormation } from "./Company";
import { Office } from "./Office";

const Establishment = () => {
  return (
    <div className="xs:pt-8">
      <CompanyFormation></CompanyFormation>
      <div className="bg-white rounded-2xl xs:mx-3">
      
        <OccTitle
          title="Serviced Office"
          icon="/share/icon-menu-serviced.svg"
          titlemore="View full list"

        ></OccTitle>
        <Office></Office>
      </div>

      <div className="columns-2 xs:columns-1 gap-10 xs:gap-0 xs:mt-5">
        <div className="xs:border-b-8 xs:border-slate-200 xs:border-t-8 xs:px-3 ">
        <VintageTitle
          title={"Merchant Account"}
          icon="/share/icon-menu-nominee.svg"
          bg="unset"
          pd="0"
        ></VintageTitle>
        </div>
        <div className="xs:border-b-8 xs:border-slate-200 xs:px-3">
        <VintageTitle
          title={"Merchant Account"}
          icon="/share/icon-menu-shelf.svg"
          bg="unset"
          pd="0"
        ></VintageTitle>
        
        </div>
      </div>
    </div>
  );
};

export { Establishment };
