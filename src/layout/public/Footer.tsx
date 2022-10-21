import React from "react";

const Footer = () => {
  return (
    <div className="">
      <div className="container mx-auto ">
        <div className="flex pt-16  pb-10 xs:pb-0 xs:pt-0 xs:grid">
          <div className="w-3/6 xs:w-full xs:bg-[#F0F2F5] xs:py-2 xs:order-3">
            <a href="" className="xs:hidden">
              <img src="/share/logo-footer-offshore.png" alt="" />
            </a>
            <div className="xs:pb-3">
              <div className="xs:bg-white xs:p-3 pt-10 xs:flex xs:justify-between">
                <h4 className="bg-text-black  uppercase font-medium xs:capitalize xs:font-normal xs:px-4 xs:flex xs:gap-3   xs:items-center">
                  <img
                    src="/share/contact-mobile.svg"
                    alt=""
                    className="hidden xs:block"
                  />
                  Contact Us
                </h4>
                <button className="hidden xs:block">
                  <img src="/share/Arrow-up-blue.svg" alt="" />
                </button>
              </div>
              <div className="grid grid-cols-3 pt-5 xs:grid-cols-2 xs:gap-1 xs:px-1 xs:pt-2">
                <div className="flex pt-2 gap-3 xs:items-center xs:bg-white xs:p-2 xs:rounded-md">
                  <div className="mt-2">
                    <img
                      src="/share/icon-offshore.svg"
                      alt=""
                      className="xs:hidden"
                    />
                    <img
                      src="/share/contact-vn-mobile.svg"
                      alt=""
                      className="hidden xs:block"
                    />
                  </div>
                  <div className="">
                    <p className="text-blue-500 text-base font-semibold">
                      1800 6758
                    </p>
                    <p className="bg-text-dark text-sm uppercase">
                      <span className="xs:hidden">Global</span> Hotline
                    </p>
                  </div>
                </div>
                <div className="flex pt-2 gap-3 xs:items-center xs:bg-white xs:p-2 xs:rounded-md">
                  <div className="mt-1">
                    <img
                      src="/share/icon-footer-hk.svg"
                      alt=""
                      className="xs:hidden"
                    />
                    <img
                      src="/share/contact-hk-mobile.svg"
                      alt=""
                      className="hidden xs:block"
                    />
                  </div>
                  <div className="">
                    <p className="text-blue-500 text-base font-semibold">
                      +852 8199 0825
                    </p>
                    <p className="bg-text-dark text-sm uppercase">Hong Kong</p>
                  </div>
                </div>
                <div className="flex pt-2 gap-3 xs:items-center xs:bg-white xs:p-2 xs:rounded-md">
                  <div className="mt-1">
                    <img
                      src="/share/icon-footer-whatsapp.svg"
                      alt=""
                      className="xs:hidden"
                    />
                    <img
                      src="/share/contact-whatsapp-mobile.svg"
                      alt=""
                      className="hidden xs:block"
                    />
                  </div>
                  <div className="">
                    <p className="text-blue-500 text-base font-semibold">
                      1800 6758
                    </p>
                    <p className="bg-text-dark text-sm uppercase">Whatsapp</p>
                  </div>
                </div>
                <div className="flex pt-2 gap-3 xs:items-center xs:bg-white xs:p-2 xs:rounded-md">
                  <div className="mt-1">
                    <img
                      src="/share/icon-footer-viber.svg"
                      alt=""
                      className="xs:hidden"
                    />
                    <img
                      src="/share/contact-viber.svg"
                      alt=""
                      className="hidden xs:block"
                    />
                  </div>
                  <div className="">
                    <p className="text-blue-500 text-base font-semibold">
                      1800 6758
                    </p>
                    <p className="bg-text-dark text-sm uppercase">Viber</p>
                  </div>
                </div>
                <div className="flex pt-2 gap-3 xs:items-center xs:bg-white xs:p-2 xs:rounded-md">
                  <div className="mt-1">
                    <img
                      src="/share/icon-footer-zalo.svg"
                      alt=""
                      className="xs:hidden"
                    />
                    <img
                      src="/share/contact-zalo-mobile.svg"
                      alt=""
                      className="hidden xs:block"
                    />
                  </div>
                  <div className="">
                    <p className="text-blue-500 text-base font-semibold">
                      1800 6758
                    </p>
                    <p className="bg-text-dark text-sm uppercase">Zalo</p>
                  </div>
                </div>
                <div className=" pt-5 xs:pt-0 grid xs:items-center xs:border xs:border-white xs:rounded-md">
                  <a className="flex xs:items-center xs:justify-center xs:gap-3">
                    <span className="bg-text-black pr-3 xs:hidden">
                      More worldwide<br></br> phone support
                    </span>
                    <span className="hidden xs:block text-sm text-black">
                      See all
                    </span>
                    <img src="/share/icon-arrow-right-blue.svg" alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="xs:w-full xs:grid xs:grid-cols-2 xs:gap-2 xs:px-2">
              <div className=" xs:border  xs:py-5 xs:rounded-lg xs:bg-white hidden xs:block">
                <h4 className="bg-text-black pt-8 xs:pt-0 uppercase font-medium xs:text-sm grid xs:items-center xs:justify-center  ">
                  SOCIAL NETWORK
                </h4>
                <div className="grid xs:items-center xs:justify-center pt-5">
                  <img src="/share/qr-ibc.png" alt="" />
                </div>
                <div className="flex justify-center gap-10 pt-5">
                  <img src="/share/icon-apple-mobie.svg" alt="" className="" />
                  <img src="/share/icon-store-mobie.svg" alt="" className="" />
                </div>
              </div>
              <div className=" xs:border xs:grid xs:items-center xs:justify-center xs:py-5 xs:rounded-lg xs:bg-white">
                <h4 className="bg-text-black pt-8 xs:pt-0 uppercase font-medium xs:text-sm ">
                  SOCIAL NETWORK
                </h4>
                <div className="flex flex-wrap gap-10 pt-10 xs:pt-3 xs:grid xs:grid-cols-2 xs:gap-8 xs:items-center xs:justify-center">
                  <a href="">
                    <img src="/share/icon-footer-facebook.svg" alt="" />
                  </a>
                  <a href="">
                    <img src="/share/icon-footer-youtube.svg" alt="" />
                  </a>
                  <a href="">
                    <img src="/share/icon-footer-twitter.svg" alt="" />
                  </a>
                  <a href="">
                    <img src="/share/icon-footer-instagram.svg" alt="" />
                  </a>
                  <a href="">
                    <img src="/share/icon-footer-linkedin.svg" alt="" />
                  </a>
                  <a href="">
                    <img src="/share/icon-footer-tiktok.svg" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[25%] xs:w-full xs:order-1">
            <div className="xs:bg-slate-100 xs:pb-2">
              <div className="xs:flex xs:justify-between xs:px-4 xs:items-center xs:p-3 xs:bg-white">
                <h4 className="bg-text-dark text-lg font-medium uppercase xs:capitalize  xs:font-normal xs:flex xs:gap-3">
                  <img
                    src="/share/logo-footer-mobile.svg"
                    alt=""
                    className="hidden xs:block"
                  />
                  Information
                </h4>
                <div className="hidden xs:block">
                  <img src="/share/Arrow-up-blue.svg" alt="" />
                </div>
              </div>
              <div className="xs:grid xs:grid-cols-2 xs:gap-1 xs:pt-2 xs:px-1">
                <div className="py-1 xs:bg-white rounded-md xs:p-5 xs:text-center">
                  <a href="" className="bg-text-dark text-sm ">
                    About Us
                  </a>
                </div>
                <div className="py-1 xs:bg-white rounded-md  xs:p-5 xs:text-center">
                  <a href="" className="bg-text-dark text-sm">
                    Our Services
                  </a>
                </div>
                <div className="py-1 xs:bg-white rounded-md xs:p-5 xs:text-center">
                  <a href="" className="bg-text-dark text-sm ">
                    Countries/Jurisdiction
                  </a>
                </div>
                <div className="py-1 xs:bg-white rounded-md  xs:p-5 xs:text-center">
                  <a href="" className="bg-text-dark text-sm">
                    FAQs
                  </a>
                </div>
                <div className="py-1 xs:bg-white rounded-md xs:p-5 xs:text-center xs:hidden">
                  <a href="" className="bg-text-dark text-sm">
                    Download Documents
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-2 pt-5 w-5/5 xs:w-full xs:gap-5 xs:px-2 space-y-2 xs:hidden">
                <div className="flex items-center">
                  <a href="">
                    <img src="/share/icon-footer-visa.svg" alt="" />
                  </a>
                </div>
                <div className="flex items-center">
                  <a href="">
                    <img src="/share/icon-footer-mastercard.svg" alt="" />
                  </a>
                </div>
                <div className="flex items-center">
                  <a href="">
                    <img src="/share/icon-footer-norton.svg" alt="" />
                  </a>
                </div>
                <div className="flex items-center">
                  <a href="">
                    <img src="/share/icon-footer-safekey.svg" alt="" />
                  </a>
                </div>
                <div className="flex items-center">
                  <a href="">
                    <img src="/share/icon-footer-paypal.svg" alt="" />
                  </a>
                </div>
                <div className="flex items-center">
                  <a href="">
                    <img src="/share/icon-footer-securetrust.svg" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/6 xs:order-2 xs:w-full xs:bg-slate-100">
            <div className="xs:p-3 xs:bg-white xs:flex xs:justify-between xs:items-center">
              <h4 className="bg-text-dark text-lg font-medium xs:capitalize xs:font-normal xs:flex xs:gap-3">
                <img
                  src="/share/usefull-mobile.svg"
                  alt=""
                  className="hidden xs:block"
                />
                Useful Link
              </h4>
              <div>
                <img
                  src="/share/Arrow-up-blue.svg"
                  alt=""
                  className="hidden xs:block"
                />
              </div>
            </div>
            <div className="xs:grid xs:grid-cols-2 xs:px-2 xs:gap-1 xs:pt-2">
              <div className="py-1 xs:bg-white  xs:flex xs:items-center rounded-md xs:text-center xs:justify-center pt-5 xs:pt-0">
                <a href="" className="bg-text-dark text-sm xs:py-4 xs:px-3">
                  Make Payment
                </a>
              </div>
              <div className="py-1 xs:bg-white  xs:flex xs:items-center rounded-md xs:text-center xs:justify-center">
                <a href="" className="bg-text-dark text-sm xs:py-2 xs:px-3">
                  Universal Terms Of Service
                </a>
              </div>
              <div className="py-1 xs:bg-white  xs:flex xs:items-center rounded-md xs:text-center xs:justify-center">
                <a href="" className="bg-text-dark text-sm xs:py-4 xs:px-3">
                  Legal Agreements
                </a>
              </div>
              <div className="py-1 xs:bg-white  xs:flex xs:items-center rounded-md xs:text-center xs:justify-center">
                <a href="" className="bg-text-dark text-sm xs:py-4 xs:px-3">
                  Privacy Policy
                </a>
              </div>
              <div className="py-1 xs:bg-white  xs:flex xs:items-center rounded-md xs:text-center xs:justify-center">
                <a href="" className="bg-text-dark text-sm xs:py-4 xs:px-3">
                  One IBC Structure
                </a>
              </div>
              <div className="py-1 xs:bg-white  xs:flex xs:items-center rounded-md xs:text-center xs:justify-center">
                <a href="" className="bg-text-dark text-sm xs:py-4 xs:px-3">
                  Payment Guidelines
                </a>
              </div>
              <div className="py-1 xs:bg-white  xs:flex xs:items-center rounded-md xs:text-center xs:justify-center">
                <a href="" className="bg-text-dark text-sm xs:py-2 xs:px-3">
                  FATF Sanctioned Countries
                </a>
              </div>
              <div className="py-1 xs:bg-white  xs:flex xs:items-center rounded-md xs:text-center xs:justify-center">
                <a href="" className="bg-text-dark text-sm xs:py-4  xs:px-3">
                  One IBC Safeguard
                </a>
              </div>
              <div className="py-1 xs:bg-white  xs:flex xs:items-center rounded-md xs:text-center xs:justify-center">
                <a href="" className="bg-text-dark text-sm xs:py-4  xs:px-3">
                  Legal Disclaimer
                </a>
              </div>
              <div className="py-1 xs:bg-white  xs:flex xs:items-center rounded-md xs:text-center xs:justify-center ">
                <a href="" className="bg-text-dark text-sm xs:py-4  xs:px-3">
                  Glossary
                </a>
              </div>
            </div>
          </div>
          <div className="hidden xs:block order-4">
            <div className="flex gap-3 items-center p-2 ">
              <div className="flex items-center">
                <a href="">
                  <img src="/share/icon-footer-visa.svg" alt="" />
                </a>
              </div>
              <div className="flex items-center">
                <a href="">
                  <img src="/share/icon-footer-mastercard.svg" alt="" />
                </a>
              </div>
              <div className="flex items-center">
                <a href="">
                  <img src="/share/icon-footer-norton.svg" alt="" />
                </a>
              </div>
              <div className="flex items-center">
                <a href="">
                  <img src="/share/icon-footer-safekey.svg" alt="" />
                </a>
              </div>
              <div className="flex items-center">
                <a href="">
                  <img src="/share/icon-footer-paypal.svg" alt="" />
                </a>
              </div>
              <div className="flex items-center">
                <a href="">
                  <img src="/share/icon-footer-securetrust.svg" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="bg-[#F0F2F5] xs:bg-white xs:border-t-2">
          <div className="container mx-auto py-5 px-16 xs:px-4 ">
            <p className="text-[#646464] text-sm  text-center xs:text-justify xs:text-[12px] ">
              One IBC refers to One IBC network of members firms, each of which
              is an independent and separate legal entity affiliated with One
              IBC Group (One IBC AG), a Swiss entity. One IBC Group provides no
              client services. Neither One IBC Group has any authority to bind
              or obligate any member firm nor member firm has any authority to
              bind or obligate One IBC Group or other third party member firms.
              All rights reserved.
            </p>
            <p className="text-[#646464] md:text-sm text-center xs:pt-5 xs:text-[12px]">
              Copyright © 1997 - 2020 ONE IBC. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Footer };
