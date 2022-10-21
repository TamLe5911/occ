/* eslint-disable @next/next/no-img-element */
import React from "react";
import FAQs from "../companyformatons/faqs/FAQs";
import { FaqsFeature } from "../companyformatons/feature/FAQs";
import { Office } from "../index/services/Office";
import Fees from "./Fees";
import HowToSetUp from "./HowToSetUp";

const CompanyFormatons = () => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="bg_header_tabs">
        <div className="container mx-auto">
          <ul
            className="tabs_main flex mb-0 list-none  mt-8  overflow-hidden flex-row"
            role="tablist"
          >
            <li className="-mb-px basis-1/5 bg-white text-center">
              <a
                className={
                  "text-base py-5 block leading-normal uppercase font-normal" +
                  (openTab === 1
                    ? " text-blueGray-600 bg_tabs"
                    : " text-black bg_header_tabs")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Features
              </a>
            </li>

            <li className="-mb-px basis-1/5 bg-white text-center">
              <a
                className={
                  "text-base py-5 block leading-normal uppercase font-normal " +
                  (openTab === 3
                    ? " text-blueGray-600 bg_tabs"
                    : " text-black bg_header_tabs")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                How To Set Up
              </a>
            </li>
            <li className="-mb-px basis-1/5 bg-white text-center">
              <a
                className={
                  "text-base py-5 block leading-normal uppercase font-normal " +
                  (openTab === 4
                    ? " text-blueGray-600 bg_tabs"
                    : " text-black bg_header_tabs")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(4);
                }}
                data-toggle="tab"
                href="#link4"
                role="tablist"
              >
                Fees
              </a>
            </li>

            <li className="-mb-px basis-1/5 bg-white text-center">
              <a
                className={
                  "text-base py-5 block leading-normal uppercase font-normal " +
                  (openTab === 8
                    ? " text-blueGray-600 bg_tabs"
                    : " text-black bg_header_tabs")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(8);
                }}
                data-toggle="tab"
                href="#link8"
                role="tablist"
              >
                FAQs
              </a>
            </li>
            <li className="-mb-px basis-1/5 bg-white text-center">
              <a
                className={
                  "text-base py-5 block leading-normal uppercase font-normal " +
                  (openTab === 9
                    ? " text-blueGray-600 bg_tabs"
                    : " text-black bg_header_tabs")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(9);
                }}
                data-toggle="tab"
                href="#link9"
                role="tablist"
              >
                Download & Form
              </a>
            </li>
          </ul>
        </div>
        <div className="relative flex flex-col min-w-0 break-words  w-full   rounded-2xl">
          <div className=" flex-auto">
            <div className=" tab-content tab-space">
              <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                <div className="container mx-auto mt-10 mb-6">
                  <Office></Office>
                </div>
                <div className="bg-[#F0F2F5]">
                  <FaqsFeature></FaqsFeature>
                </div>
              </div>

              <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                <HowToSetUp></HowToSetUp>
              </div>
              <div className={openTab === 4 ? "block" : "hidden"} id="link4">
                <Fees></Fees>
              </div>

              <div className={openTab === 8 ? "block" : "hidden"} id="link8">
                <FAQs></FAQs>
              </div>
              <div className={openTab === 9 ? "block" : "hidden"} id="link9">
              DownloadForm
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyFormatons;
