import React from "react";
import { data } from "../../utils/data";

const ListPromotion = () => {
  return (
    <div className="grid grid-cols-3 gap-8  mt-10 pb-6 rounded-3xl">
      {data.promotion.map((infos) => (
        <Promotion key={infos.id} {...infos} />
      ))}
    </div>
  );
};
const Promotion = (infos: any) => (
  <div className="w-full">
    <div className="promotion bg-white">
      <div className="img">
        <img src={infos.images} alt="" />
      </div>
      <div className="text">
        <a className="leading-5" href="">
          {infos.title}
        </a>
        <p>{infos.decs}</p>
      </div>
    </div>
  </div>
);

export { ListPromotion };
