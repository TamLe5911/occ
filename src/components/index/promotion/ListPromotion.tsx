/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import Slider from "react-slick";
import { data } from "../../../utils/data";
const slidesToShow = 3;
const ListPromotion = () => {
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }: any) => (
    <button
      {...props}
      className={
        "slick-prev slick-arrow " +
        (currentSlide === 0
          ? " slick-disabled "
          : " slick_show slick_left")
      }
      aria-disabled={currentSlide === 0 ? true : false}
      type="button"
    >
      Previous
    </button>
  );

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }: any) => (
    <button
      {...props}
      className={
        "slick-next slick-arrow xs:hidden" +
        (currentSlide === slideCount - slidesToShow
          ? " slick-disabled slick_hidden"
          : " slick_show slick_right")
      }
      aria-disabled={currentSlide === slideCount - slidesToShow ? true : false}
      type="button"
    >
      Next
    </button>
  );

  const settings = {
    dots: true,
    infinite: false,
    speed: 400,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <SlickArrowRight />,
    prevArrow: <SlickArrowLeft />,
    screenX: true,

    responsive: [
      {
        breakpoint: 480,
        settings: {
          speed: 1000,
          autoplaySpeed: 3000,
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className="pt-5 container mx-auto ">
      <Slider {...settings}>
        {data.promotion.map((infos) => (
          <div key={infos.id} className="pr-4">
            <div className="promotion bg-white">
              <div className="img">
                <img src={infos.images} alt="" />
              </div>
              <div className="p-3 text bg-slider-mobile">
                <a className="text-sm bg-text-black font-medium xs:font-normal" href="">
                  {infos.title}
                </a>
                <div className="xs:hidden block">
                <p className="text-[12px] mt-2 ">{infos.decs}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="pr-4 occ__list">
          <div className="promotion bg-white flex items-center justify-center">
            <div className="flex flex-col">
              <Link href={"/"}>
                <a className="m-auto">
                  <img src="/share/promotion.png" alt="" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export { ListPromotion };
