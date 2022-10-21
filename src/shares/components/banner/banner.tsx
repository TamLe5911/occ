import React from "react";
import { Submit } from "../button/Submit";
type IBanner = {
  title: String;
  desc: string;
  content: string;
  urlImage: string;
  titleButton: string;
};

const Banner = (props: IBanner) => (
  <div className="slider-event-item relative ">
    <div className="absolute flex items-center 2xl:h-full w-full 2xl:top-0 left-0 lg:top-7 xl:top-14">
      <div className="container mx-auto md:px-10">
        <div className="detail inside inside-right max-w-lg">
          <h2 className="title bg_fs-40  font-medium text-white">
            {props.title}
          </h2>
          <h3 className="content text-2xl font-medium text-white 2xl:py-3">
            {" "}
            {props.desc}
          </h3>
          <p className="text-white text-base font-light">{props.content}</p>
          <div className="2xl:pt-10 lg:pt-4">
            <Submit title={props.titleButton} width={150} />
          </div>
        </div>
      </div>
    </div>
    <div className="">
      <img src={props.urlImage} alt="{props.title}" className="" />
    </div>
  </div>
);

export { Banner };
