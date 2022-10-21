/* eslint-disable @next/next/no-img-element */
import React from "react";
import Slider from "react-slick";
import { ViewAll } from "../../../shares/components/button/ViewAll";
import { data } from "../../../utils/data";

function SampleNextArrow(props: any) {
  const { style, onClick } = props;
  return (
    <div
      className="z-10"
      style={{
        ...style,
        display: "block",
        position: " absolute",
        width: "20%",
        left: "80%",
        height: "100%",
        top: "0",
        cursor: "url(/share/icon-cursor.svg), auto",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: any) {
  const { style, onClick } = props;
  return (
    <div
      className="z-10"
      style={{
        ...style,
        display: "block",
        position: " absolute",
        width: "20%",
        left: "20%",
        height: "100%",
        cursor: "url(/share/icon-cursor-left.svg), auto",
      }}
      onClick={onClick}
    />
  );
}

const FeatureList = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <div className="relative py-10">
      <div className="absolute h-full w-2/6 z-10 left-0 top-0 xs:w-full xs:relative">
        <div className=" bg-[#EFF8FF] flex items-center justify-end h-full pl-5 xs:pl-0">
          <div className="flex flex-col w-2/4 text-right xs:inline-flex xs:w-full xs:text-center">
            <span className=" text-left text-[20px] mt-2 font-medium bg-clip-text text-transparent bg-gradient-to-r from-[#00C6FF] to-[#0072FF] xs:text-center xs:px-8">
              Expand Your Businessto more than 27 Jurisdiction around the word
              with Offshore Company Corp.
            </span>
            <span className=" text-left text-[20px] mt-5 xs:mt-3 font-normal xs:text-center xs:px-3">
              We are here to assist you in setting up a new company in line with
              local laws and regulations.
            </span>
            <div className="p-5 text-center">
              <ViewAll titlemore="View full list" link={"/"} />
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <Slider {...settings}>
          {data.asians.map((infos) => (
            <div key={infos.slug} className="pr-4">
              <div className="promotion bg-white">
                <div className="img">
                  <img src={infos.images} alt="" />
                </div>
                <div className="p-3">
                  <div className="h-32 ">
                    <h2 className="text-base bg-text-black font-semibold">
                      {infos.title}
                    </h2>
                    <ul className="bg-list-disc pl-6 mt-1">
                      <li className="text-sm bg-text-dark">{infos.decs}</li>
                      <li className="text-sm bg-text-dark">{infos.decs2}</li>
                    </ul>
                  </div>
                  <p className="pl-2 text-right">
                    <span className="text-base bg-text-dark">Form </span>
                    <span className="text-base bg-text-black font-normal">
                      US${" "}
                    </span>
                    <span className="text-base  font-normal bg-text-green">
                      {infos.price}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export { FeatureList };
