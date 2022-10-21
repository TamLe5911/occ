import React from "react";
import ListJurisdictions from "./country/ListJurisdictions";
import { CompanyTitle } from "./introduce/CompanyTitle";

function Jurisdiction() {
  return (
    <div>
      <CompanyTitle title={"We are cappable of providing company formation service in more than 27 jurisdictions globally. We make sure our clients can make the best investment decision when doing business overseas. Explore and get started today."}
      ></CompanyTitle>
      <div className="">
        <ListJurisdictions />
      </div>
     
    </div>
  );
}

export default Jurisdiction;
