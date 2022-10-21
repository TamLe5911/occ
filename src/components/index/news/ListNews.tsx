/* eslint-disable @next/next/no-img-element */
import React from "react";
import { data } from "../../../utils/data";

const ListNews = () => {
  return (
    <div className="xs:mx-3">
      {data.news.slice(0, 1).map((infos) => (
        <News key={infos.id} {...infos} />
      ))}
    </div>
  );
};
const News = (infos: any) => (
  <div className=" bg-white ">
    <div className="img ">
      <img src={infos.images} alt="" className="rounded-t-lg" />
    </div>
    <div className="text p-2">
      <a className="leading-5 text-base bg-text-black font-medium" href="">
        {infos.title}
      </a>
      <p className="text-sm bg-text-dark mt-2 xs:hidden">{infos.decs}</p>
    </div>
  </div>
);

export { ListNews };
