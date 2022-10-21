import React from "react";
import { ViewAll } from "../../../shares/components/button/ViewAll";
import { HeaderTitle } from "../../../shares/components/title/HeaderTitle";
import { data } from "../../../utils/data";
import ListFaqs from "./ListFaqs";
const List = () => {
  return (
    <div className="grid grid-cols-2 gap-x-5 xs:grid-cols-1">
      {data.faqs.map((infos) => (
        <ListFaqs key={infos.id} {...infos} />
      ))}
    </div>
  );
};
const FaqsFeature = () => (
  <div className="faqs xs:px-3">
    <div className="faqs_text py-10 xs:py-5">
      <div className="container mx-auto">
        <div className="relative ">
          <div className="flex mx-auto justify-between py-5 xs:py-2">
            <HeaderTitle title={"FAQs"}></HeaderTitle>
           
            <ViewAll titlemore="View full list" link={"/"} />
      
          </div>
          <div className="text-center ">
            <List></List>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export { FaqsFeature };
