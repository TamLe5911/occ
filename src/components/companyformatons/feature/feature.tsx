import React from "react";
import { data } from "../../../utils/data";
import { QuestionsForm } from "../../index/questions/QuestionsForm";
import { UtilitiesItem } from "./utilities";

const Utilities = () => {
  return (
    <div className="grid grid-cols-2 ">
      {data.utilities.map((datafile) => (
        <UtilitiesItem key={datafile.id} {...datafile} />
      ))}
    </div>
  );
};
const Feature = () => (
  <div className="utilities container mx-auto">
    <div className="grid grid-cols-2 xs:grid-cols-1">
    <div className="mt-10 mr-12 xs:mr-0">
      <Utilities></Utilities>
      </div>
      <div className="mt-10 bg-white border rounded-lg shadow-md p-5">
        <h3 className="text-base font-medium py-5 mb-2">Leave us your contact detail and we will get back to you shortly!</h3>
        <QuestionsForm></QuestionsForm>
      </div>
    </div>
    <div className=" pt-20 px-20 tracking-wider text-center bg_fs-40 font-normal xs:text-2xl xs:pt-5 xs:px-4">
      <p className="bg-clip-text text-transparent bg-gradient-to-r from-[#EE0979] to-[#FF6A00] font-normal xs:font-light">We provide expertise and support in conducting business on a global scale, helping you <strong className="bg-clip-text text-transparent bg-gradient-to-r from-[#EE0979] to-[#FF6A00]">maximize opportunities and achieve long-term sustainability.</strong></p>
     
    </div>

  </div>
);

export { Feature };
