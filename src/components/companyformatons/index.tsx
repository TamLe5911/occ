/* eslint-disable @next/next/no-img-element */
import React from "react";
import Jurisdiction from "./jurisdictions/Jurisdictions";
import HowToSetUp from "./howtosetups/HowToSetUp";
import Fees from "./fees/Fees";
import FAQs from "./faqs/FAQs";
import DownloadForm from "./downloadform/DownloadForm";
import { FeatureList } from "./feature/FeatureList";
import { Feature } from "./feature/feature";
import ServiceFees from "./jurisdictions/servicefees/ServiceFees";
import { FaqsFeature } from "./feature/FAQs";

const CompanyFormatons = () => {
  const [openTab, setOpenTab] = React.useState(1);

  return (
    <>
      <div className="bg_header_tabs pt-10">
        <div className="container mx-auto relative z-10 top-0">
          <ul
            className="flex mb-0 list-none  overflow-hidden flex-row bg-dr-30"
            role="tablist"
          >
            <li className="-mb-px basis-1/6 bg-white text-center border-r">
              <a
                className={
                  "text-base py-5 block leading-normal uppercase font-normal" +
                  (openTab === 1
                    ? " text-blueGray-600 bg_tabs "
                    : " text-black bg_header_tabs")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#Features"
                role="tablist"
              >
                Features
              </a>
            </li>
            <li className="-mb-px basis-1/6 bg-white text-center border-r">
              <a
                className={
                  "text-base py-5 block leading-normal uppercase font-normal " +
                  (openTab === 2
                    ? " text-blueGray-600 bg_tabs"
                    : " text-black bg_header_tabs")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#Jurisdictions"
                role="tablist"
              >
                Jurisdictions
              </a>
            </li>
            <li className="-mb-px basis-1/6 bg-white text-center border-r">
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
                href="#HowToSetUp"
                role="tablist"
              >
                How To Set Up
              </a>
            </li>
            <li className="-mb-px basis-1/6 bg-white text-center border-r">
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
                href="#Fees"
                role="tablist"
              >
                Fees
              </a>
            </li>

            <li className="-mb-px basis-1/6 bg-white text-center border-r">
              <a
                className={
                  "text-base py-5 block leading-normal uppercase font-normal " +
                  (openTab === 5
                    ? " text-blueGray-600 bg_tabs"
                    : " text-black bg_header_tabs")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(5);
                }}
                data-toggle="tab"
                href="#FAQs"
                role="tablist"
              >
                FAQs
              </a>
            </li>
            <li className="-mb-px basis-1/6 bg-white text-center border-r">
              <a
                className={
                  "text-base py-5 block leading-normal uppercase font-normal " +
                  (openTab === 6
                    ? " text-blueGray-600 bg_tabs"
                    : " text-black bg_header_tabs")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(6);
                }}
                data-toggle="tab"
                href="#DownloadForm"
                role="tablist"
              >
                Download & Form
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col min-w-0 break-words  w-full rounded-2xl">
          <div className=" flex-auto">
            <div className=" tab-content tab-space">
              <div className={openTab === 1 ? "block " : "hidden"} id="Features" >
                <div className="bg-backround-test relative top-[-6.5rem]">
                  <div className="pt-36">
                    <div className="flex items-center container mx-auto xs:px-4">
                      <img src="/share/offshoreFormation.svg" alt="" />
                      <h2 className="text-2xl font-medium text-black pl-3 xs:text-sm w-4/6">
                        Offshore Company Formation | Company Incorporation
                        Services
                      </h2>
                    </div>
                  </div>
                  <div className="container mx-auto">
                    <Feature></Feature>
                  </div>
                  
                </div>
                <div className="mt-[-3rem] mb-10">
                <ServiceFees></ServiceFees>
              </div>
                  <div className="bg-[#EFF8FF]">
                    <FeatureList></FeatureList>
                  </div>
                  <div className="bg-[#F0F2F5]">
                  <FaqsFeature></FaqsFeature>
                </div>
              </div>
              <div className={openTab === 2 ? "block" : "hidden"} id="Jurisdictions" >
                <div className="pb-10">
                <Jurisdiction></Jurisdiction>
                </div>
                <div className="py-10 bg-[#F0F2F5]">
                <ServiceFees></ServiceFees>
              </div>
              </div>
              <div className={openTab === 3 ? "block" : "hidden"} id="HowToSetUp" >
                <div className="pb-10">
                <HowToSetUp></HowToSetUp>
                </div>
                <div className="py-10 bg-[#F0F2F5]">
                <ServiceFees></ServiceFees>
              </div>
              </div>
              <div className={openTab === 4 ? "block" : "hidden"} id="Fees" >
                <div className="pb-10">
                <Fees></Fees>
                </div>
                <div className="py-10">
                <ServiceFees></ServiceFees>
              </div>
              </div>

              <div className={openTab === 5 ? "block" : "hidden"} id="FAQs" >
                <div className="pb-10">
                <FAQs></FAQs>

                </div>
              </div>
              <div className={openTab === 6 ? "block" : "hidden"} id="DownloadForm" >
                <div className="pb-10">
                <DownloadForm></DownloadForm>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyFormatons;
