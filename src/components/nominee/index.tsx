/* eslint-disable @next/next/no-img-element */
import React from "react";
import FAQs from "../companyformatons/faqs/FAQs";
import Nominees from "../companyformatons/nominee/Nominee";
const Nominee = () => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="bg_header_tabs">
        <div className="container mx-auto">
          <ul
            className="tabs_main flex mb-0 list-none  mt-8  overflow-hidden flex-row"
            role="tablist"
          >
            <li className="-mb-px basis-1/2 bg-white text-center">
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

            <li className="-mb-px basis-1/2 bg-white text-center">
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
                href="#link2"
                role="tablist"
              >
                FAQs
              </a>
            </li>
           
          </ul>
        </div>
        <div className="relative flex flex-col min-w-0 break-words  w-full   rounded-2xl">
          <div className=" flex-auto">
            <div className=" tab-content tab-space">
              <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                <Nominees />
              </div>

              <div className={openTab === 2 ? "block pt-10" : "hidden"} id="link2">
                <FAQs />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nominee;
