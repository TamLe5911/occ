import React from "react";

type IOverview = {
  title: string;
  desc: string;
  image?: string;
};

function Overview(props: IOverview) {
  return (
    <div className="">
      <div className="flex gap-3 items-center">
        <img src={props.image} alt="" />
        <h2 className="text-lg font-medium ">{props.title}</h2>
      </div>
      <p className="text-base bg-text-dark pt-5 pr-16">{props.desc}</p>
    </div>
  );
}

export default Overview;
