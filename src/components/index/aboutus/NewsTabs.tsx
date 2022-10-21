/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import React from "react";
import { data } from "../../../utils/data";



const NewsTabs = () => {
  const [openTab, setOpenTab] = useState(1);
  return (
    <div className="w-full">
      <div className=" container mx-auto  mt-5">
        <div className="relative flex flex-col min-w-0 break-words  w-full mb-6  rounded-2xl">
          <div className=" flex-auto">
            <div className=" tab-content tab-space">
              {data.newstabs.map((item) => (
                <div
                  key={item.id}
                  {...item}
                  className={openTab === item.id ? "block" : "hidden"}
                  id={item.id.toString()}
                >
                  <div className="grid grid-cols-2 gap-5">
                    {item.news.slice(0,2).map((infos) => (
                      <div key={infos.idnews} {...infos} className="flex mb-1 xs:block">
                        <div className="img w-2/6 mt-1 xs:w-full">
                          <img
                            src={infos.images}
                            alt=""
                            className="rounde-lg bg-cover"
                          />
                        </div>
                        <div className="w-4/6 pl-3 xs:w-full">
                          <div className="h-14">
                            <a
                              className="text-sm bg-text-black  font-medium"
                              href=""
                            >
                              {infos.title}
                            </a>
                          </div>
                          <p className="text-xs bg-text-dark mt-1 xs:hidden">
                            {infos.decs}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className=" container mx-auto">
        <ul
          className="flex mb-0 list-none flex-wrap pt-6  mt-6  xs:mt-0  xs:pt-0 xs:pb-5 flex-row xs:grid xs:grid-cols-2 xs:gap-y-5"
          role="tablist"
        >
          {data.newstabs.map((item,index) => (
            <li key={index} className="-mb-px mr-2 last:mr-0 flex-auto hover:shadow-md hover:rounded-lg">
              <a
                className={
                  " px-5 py-3 rounded-lg block leading-normal " +
                  (openTab === item.id ? "bg-shadown-about" : " bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(item.id);
                }}
                data-toggle="tab"
                href={"#" + item.id.toString()}
                role="tablist"
              >
                <div className="flex justify-center">
                  <img src={item.images} />
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export { NewsTabs };
