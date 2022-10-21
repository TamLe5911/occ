import React from "react";
import { HeaderTitle } from "../../shares/components/title/HeaderTitle";

const Promotion = () => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="w-full bg_header_tabs">
        <div className=" container m-auto">
          <ul
            className="flex mb-0 list-none flex-wrap pt-8   flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-base  px-5 py-3 rounded-t-lg block font-medium leading-normal " +
                  (openTab === 1
                    ? "text-black bg-white"
                    : "text-blueGray-600  bg_header_tabs")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Promotion
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-base  px-5 py-3 rounded-t-lg block font-medium leading-normal " +
                  (openTab === 2
                    ? "text-black bg-white"
                    : "text-blueGray-600  bg_header_tabs")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                Event
              </a>
            </li>
          </ul>
        </div>
        <div className="bg-white  pt-8">
          <div className="relative flex flex-col min-w-0 break-words  w-full mb-6  rounded-2xl">
            <div className=" flex-auto">
              <div className=" tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <div className=" container    m-auto">
                    <HeaderTitle title="Offshore Company Formation | Company Incorporation Services"></HeaderTitle>
                    Promotion
                  </div>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  Event
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Promotion;
