import React from "react";
import { ViewAllServices } from "../../../shares/components/button/ViewAllServices";
import { VintageTitle } from "../../../shares/components/title/VintageTitle";
import { AccountingAuditing } from "./AccountingAuditing";
import { BusinessLicensing } from "./BusinessLicensing";

const LegalCompliance = () => (
  <div className="xs:pt-8">
    <div>
    <AccountingAuditing></AccountingAuditing>
    <BusinessLicensing></BusinessLicensing>
    
    </div>
    <div className=" w-full mt-4 p-2 text-center cursor-pointer border-t border-slate-200 border-b-8 hidden xs:block">
    <ViewAllServices titlemore="View full list" ></ViewAllServices>
    </div>
    <div className="columns-2 gap-10 xs:columns-1">
    <div className="xs:border-slate-200 xs:border-b-8 xs:py-1 xs:px-3">
    <VintageTitle
        title={"Trademark Registration"}
        icon="/share/icon-legal-3.svg"
        bg="unset"
        pd="0"
      ></VintageTitle>
    </div>
    <div className="xs:border-slate-200 xs:border-b-8 xs:py-1 xs:px-3">
    <VintageTitle
        title={"Company Renewal"}
        icon="/share/icon-legal-4.svg"
        bg="unset"
        pd="0"
      ></VintageTitle>
    </div>
    <div className="xs:border-slate-200 xs:border-b-8 xs:py-1 xs:px-3">
    <VintageTitle
        title={"Change Agent"}
        icon="/share/icon-legal-5.svg"
        bg="unset"
        pd="0"
      ></VintageTitle>
    </div>
    <div className="xs:border-slate-200 xs:border-b-8 xs:py-1 xs:px-3">
    <VintageTitle
        title={"Company Strike Off"}
        icon="/share/icon-legal-6.svg"
        bg="unset"
        pd="0"
      ></VintageTitle>
    </div>
     
      
      
    
    </div>
  </div>
);

export { LegalCompliance };
