/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";

import { NextPage } from "next";
const Header: NextPage = () => {
  const changeLanguage = (language: string) => {
    window.location.replace("/" + language);
  };
  const [headerMobie, setheaderMobie] = useState(false);
  const [show, setShow] = useState(true);
  function changeState() {
    setShow(!show);
  }
  useEffect(() => {
    if (window.innerWidth < 600) {
      window.addEventListener("scroll", () => {
        window.scrollY > 400 ? setheaderMobie(true) : setheaderMobie(false);
      });
    }
  });

  return (
    <>
      <div className="hidden xs:block">
        {show && (
          <div className="bg-[#F0F2F5] w-full py-2 px-4">
            <div className="flex items-center gap-2 h-full">
              <div className="relative basis-4/6">
                <div className="pl-6 ">
                  <p className="text-base font-medium ">Try Our App Now!</p>
                  <p className="text-sm">
                    Get{" "}
                    <span className="uppercase bg-gradient-to-r from-[#EE0979] to-[#FF6A00] bg-clip-text text-transparent font-medium">
                      One IBC digital app
                    </span>{" "}
                    for Better Experience
                  </p>
                </div>
                <div
                  className="absolute flex items-center top-0 h-full "
                  onClick={changeState}
                >
                  <img src="/share/close-mobile.svg" alt="" />
                </div>
              </div>
              <div className="basis-2/6 ">
                <img src="/share/Download-app-mobile.svg" alt="" />
              </div>
            </div>
          </div>
        )}
      </div>
      <nav className="container mx-auto xs:relative">
        <div className="flex items-center container-fluid header-group-menu ">
          <div
            className={`${
              headerMobie
                ? ""
                : "xs:block flex xs:px-4 md:pr-4 xs:absolute xs:top-0 xs:w-full gap-5"
            }`}
          >
            <div className="xs:justify-between flex items-center bg-boder-right pr-4 xs:pt-3">
              <a className="">
                <img
                  src="/assets/images/icon-toggle-bar-mobile.svg"
                  alt=""
                  className="xs:hidden"
                />
                <img
                  src="/share/toggle-wite.png"
                  alt=""
                  className="xs:block hidden"
                />
              </a>
              <a className="">
                <img
                  className="slogo-header xs:hidden block"
                  src="/assets/images/logo.png"
                />
                <img
                  className="logo-header xs:block hidden"
                  src="/share/Logo-mobie-white.svg"
                />
              </a>
              <a className="hidden xs:block ">
                <button className="bg-white xs:py-2 xs:px-3 rounded-2xl text-[10px] font-bold text-blue-700 bg-box-shadow-ul-mobile">
                  Set Up Now
                </button>
              </a>
            </div>

            {headerMobie && (
              <div className=" xs:fixed xs:justify-between flex items-center top-0 w-full bg-red-500 z-20 py-3 px-3 bg-gradient-to-r from-[#EE0979] to-[#FF6A00]">
                <a className="">
                  <img
                    src="/assets/images/icon-toggle-bar-mobile.svg"
                    alt=""
                    className="xs:hidden"
                  />
                  <img
                    src="/share/toggle-wite.png"
                    alt=""
                    className="xs:block hidden"
                  />
                </a>
                <a className="">
                  <img
                    className="slogo-header xs:hidden block"
                    src="/assets/images/logo.png"
                  />
                  <img
                    className="logo-header xs:block hidden"
                    src="/share/Logo-mobie-white.svg"
                  />
                </a>
                <a className="hidden xs:block ">
                  <button className="bg-white xs:py-2 xs:px-3 rounded-2xl text-[10px] font-bold text-blue-700 bg-box-shadow-ul-mobile">
                    Set Up Now
                  </button>
                </a>
              </div>
            )}

            <div className="flex gap-1 xs:py-3 xs:px-6 items-center py-5 bg-boder-right bg-white xs:rounded-3xl bg-boder-right xs:mt-3">
              <div className="pointer-events-auto ">
                <img src="/assets/images/icon-search-header.svg" alt="" />
              </div>
              <input
                type="text"
                placeholder="Services, Promotion..."
                className="focus:outline-none xs:pl-4"
              />
            </div>
            {headerMobie ? (
              ""
            ) : (
              <div className="pt-3 hidden xs:block">
                <img src="/share/banner-mobile.png" alt="" className="w-full" />
              </div>
            )}
          </div>

          <div className="bg-boder-right p-5 box_dropdown xs:hidden">
            <button type="button" className="flex gap-2">
              <img src="/share/vn.png" alt="" />
              <span className="bg-text-black">VIETNAM</span>
            </button>
            <ul>
              <li>
                <img src="/share/en.png" alt="" />
                <button onClick={() => changeLanguage("en")}>English</button>
              </li>
              <li>
                <img src="/share/vn.png" alt="" />
                <button onClick={() => changeLanguage("vn")}>Vietnames</button>
              </li>
            </ul>
          </div>
          <div className="bg-boder-right py-5 px-3 box_dropdown xs:hidden">
            <button type="button" className="flex gap-2">
              <span className="bg-text-black">VN</span>
            </button>
            <ul>
              <li>EN</li>
              <li>VN</li>
            </ul>
          </div>
          <div className="bg-boder-right py-5 px-3 box_dropdown xs:hidden">
            <button type="button" className="flex gap-2">
              <span className="bg-text-black">USD</span>
            </button>
            <ul>
              <li>EN</li>
              <li>VN</li>
            </ul>
          </div>
          <div className="bg-boder-right py-5 px-4 xs:hidden">
            <a href="" className="bg-text-black">
              SING IN/SIGN UP
            </a>
          </div>
          <div className="xs:hidden">
            <a href="">
              <div className="flex mx-2 gap-1">
                <div className="pt-4">
                  <img src="/share/icon-phone-red.png" alt="" />
                </div>
                <div className="">
                  <p className="text-[#CC1F26] text-2xl font-semibold">
                    18006758
                  </p>
                  <p className="bg-text-black text-sm">Consultant & Support</p>
                </div>
              </div>
            </a>
          </div>
          <div className="bg-gradient-to-r from-[#EE0979] to-[#FF6A00] py-5 px-7 xs:hidden">
            <button type="button" className="font-medium text-sm text-white">
              SET UP NOW
            </button>
          </div>
        </div>
        <div className="hidden xs:block">
          <img src="/share/header-mobile.png" alt="" className="w-full" />
        </div>
      </nav>
    </>
  );
};

export { Header };
