import React from "react";

import { data } from "../../../utils/data";

import CountrySetupTabs from "./CountrySetupTabs";
import IconSetup from "./IconSetUp";
const ListSetUpLeft = () => {
  return (
    <div className="">
      {data.setup.slice(0, 2).map((infos) => (
        <CountrySetupTabs
          key={infos.id}
          {...infos}
        />
      ))}
    </div>
  );
};

const ListSetUpRigth = () => {
  return (
    <div className="">
      {data.setup.slice(2).map((infos) => (
        <CountrySetupTabs
          key={infos.id}
          {...infos}
        />
      ))}
    </div>
  );
};
function HowToSetUp() {
  return (
    <div className="container mx-auto pt-10">
      <div className="flex items-center">
            <img src="/share/offshoreFormation.svg" alt="" />
            <h2 className="text-2xl font-medium text-black pl-3">How to incorporate your company</h2>
          </div>
          <div className="grid grid-cols-4">
          {data.howtosetup.map((props)=>(
            <IconSetup key={props.slug} {...props}/>
          ))}

          </div>
      <div className="grid grid-cols-2 gap-10">
      <ListSetUpLeft ></ListSetUpLeft>
      <ListSetUpRigth ></ListSetUpRigth>
      </div>
    </div>
  );
}

export default HowToSetUp;
