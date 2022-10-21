import React, { useState } from "react";

type IInfos = {
  id: number;
  title: string;
  desc: string;
  image:string;
};

function CountrySetupTabs(infos: IInfos) {
  const [expanded, setExpanded] = useState(true);
  return (
    <div className="mt-5">
        <div className="flex justify-between cursor-pointer border  relative bg-country" onClick={() => setExpanded(!expanded)}>
          <button
            className="text-lg text-black font-normal flex items-center gap-3 "
          >
            <img src={infos.image} alt="" className="border-r py-3 px-3" />
           {infos.title}
          </button>
          <button className="px-3" onClick={() => setExpanded(!expanded)}>
            {expanded ? (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="3"
                  y="11.1"
                  width="18"
                  height="1.35"
                  rx="0.674998"
                  fill="#0154B8"
                />
              </svg>
            ) : (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="3"
                  y="11.1"
                  width="18"
                  height="1.35"
                  rx="0.674998"
                  fill="#0154B8"
                />
                <rect
                  x="11.1001"
                  y="3"
                  width="1.35"
                  height="18"
                  rx="0.675"
                  fill="#0154B8"
                />
              </svg>
            )}
          </button>
        </div>
        <div className="">
          {expanded && (
            <div className="border-8 rounded-b-md" >
              <div className="">
              
                <div className="text-base ">
                  {infos.desc.split(" , ").map((desc) => {
                  return <p className="p-4 border-t-4" key={desc}>{desc }</p>;
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
  );
}

export default CountrySetupTabs;
