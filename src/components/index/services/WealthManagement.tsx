import React from "react";
import { OccTitle } from "../../../shares/components/title/OccTitle";
import { TrustFormation } from "./TrustFormation";

const WealthManagement = () => (
  <div className="bg-white mb-10 xs:mb-0 rounded-2xl xs:pt-8">
    <div className="xs:px-3">
    <OccTitle
      title="Trust / Foundation Formation"
      icon="/share/icon-wealth-1.svg"
      titlemore="View full list"
    ></OccTitle>

    </div>
    <TrustFormation></TrustFormation>

    <div className="m-auto text-center pb-1 pt-4">
    
    </div>
  </div>
);

export { WealthManagement };
