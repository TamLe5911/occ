/* eslint-disable @next/next/no-img-element */
import { useTranslation } from "next-i18next";
import React, { useEffect, useState } from "react";
import { BankingSolution } from "./services/BankingSolution";
import { Establishment } from "./services/Establishment";
import { LegalCompliance } from "./services/LegalCompliance";
import { WealthManagement } from "./services/WealthManagement";

const Services = () => {
  const { t } = useTranslation("home");
  const [openTab, setOpenTab] = useState(1);
  const [header, setHeader] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.innerWidth > 1366) {
        window.scrollY > 650 ? setHeader(true) : setHeader(false);
      } else if (window.innerWidth <= 1366) {
        window.scrollY > 450 ? setHeader(true) : setHeader(false);
      } else if (window.innerWidth < 600) {
        window.scrollY > 100 ? setHeader(true) : setHeader(false);
      }
    });
  });

  return (
    <>
      <div
        className={`${
          header
            ? "bg-white fixed top-0 xs:top-14 z-10 bg-border-bottom mt-0 w-full"
            : "relative container mx-auto"
        }  `}
      >
        <div
          className={
            "flex justify-between items-center container mx-auto " +
            (header
              ? "gap-[0] menu-noscroll xs:px-3"
              : "gap-[2px] menu-scroll xs:relative xs:top-14 xs:gap-0 xs:grid xs:grid-cols-4 xs:border-[#F0F2F5] xs:border-t-2")
          }
        >
          <div className={`${header ? "bg-block xs:hidden" : "bg-none"} `}>
            <div className="flex">
              <button
                type="button"
                className="flex items-center justify-center gap-3 pr-3"
              >
                <img src="/share/icon-menu.svg" alt="" />
                <img className="logo-header" src="/assets/images/logo.png" />
              </button>
              <button className="bg-boder-x px-4 py-4">
                <img src="/assets/images/icon-search-header.svg" alt="" />
              </button>
            </div>
          </div>
          <div className=" flex-auto text-center">
            <div
              className={
                "text-sm rounded-t-lg xs:rounded-none  block font-medium leading-normal hover:bg-white " +
                (openTab === 1
                  ? "text-blue-700 bg-gray-1000 xs:bg-white"
                  : " bg-navbar text-black xs:bg-[#F0F2F5] ")
              }
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(1);
              }}
              data-toggle="tab"
              role="tablist"
            >
              <div
                className={
                  "flex justify-center " +
                  (openTab === 1 &&
                    "rounded-t-lg bg-gradient-to-r from-[#EE0979] to-[#FF6A00] bg-[length:100%_4px] bg-no-repeat") +
                  (header
                    ? " bg-border-t-0 bg-white py-4 xs:py-2 bg-boder-right bg-[length:100%_0px] "
                    : " py-4 xs:py-1  xs:h-20 hover:bg-gradient-to-r from-[#EE0979] to-[#FF6A00] bg-[length:100%_4px] bg-no-repeat hover:rounded-t-lg transition xs:bg-[length:100%_0px]")
                }
              >
                <div className=" group">
                  <button className="flex justify-center ">
                    <div className="inline-flex items-center group gap-3 xs:block">
                      {header ? (
                        <div className="hidden xs:block">
                          <img
                            src="/share/icon-establishment.svg"
                            alt=""
                            className="mx-auto"
                          />
                        </div>
                      ) : (
                        <div>
                          <img
                            src="/share/icon-establishment.svg"
                            alt=""
                            className="mx-auto"
                          />
                        </div>
                      )}
                      <span className="text-sm uppercase font-medium hover:text-blue-700 xs:text-[12px] xs:font-light xs:text-[#646464] xs:capitalize">
                        {t("HOME_LB_ESTABLISHMENT")}
                      </span>
                      {header && (
                        <span className="duration-200 transform group-hover:rotate-180 ease xs:hidden">
                          <img src="/share/icon-arrow-up-blue.svg" alt="" />
                        </span>
                      )}
                    </div>
                  </button>
                  {header && (
                    <div className="absolute left-[28%] hidden text-gray-700 pt-6 group-hover:block z-10 transition-all duration-500">
                      <ul className="bg-box-shadow-ul grid grid-cols-2 xs:hidden">
                        <li className="h-28 w-40 text-center hover:bg-gray-400 bg-border-bottom bg-boder-right ">
                          <a
                            className="block whitespace-no-wrap pt-5  "
                            href="#"
                          >
                            <span className="flex items-center justify-center pb-2">
                              <img src="/share/icon-menu-company.svg" alt="" />
                            </span>
                            <span className="pt-4 uppercase font-normal text-sm text-black">
                              {t("HOME_LB_COMPANYFORMATION")}
                            </span>
                          </a>
                        </li>
                        <li className="h-28 w-40 text-center hover:bg-gray-400 bg-border-bottom">
                          <a
                            className="block whitespace-no-wrappt pt-5 "
                            href="#"
                          >
                            <span className="flex items-center justify-center pb-2">
                              <img src="/share/icon-menu-nominee.svg" alt="" />
                            </span>
                            <span className="uppercase font-normal text-sm text-black">
                              Nominee
                            </span>
                          </a>
                        </li>
                        <li className="h-28 w-40 text-center hover:bg-gray-400 bg-boder-right">
                          <a className="pt-5 block whitespace-no-wrap" href="#">
                            <span className="flex items-center justify-center pb-2">
                              <img src="/share/icon-menu-shelf.svg" alt="" />
                            </span>
                            <span className="uppercase font-normal text-sm text-black">
                              {t("HOME_LB_SHELFCOMPANY")}
                            </span>
                          </a>
                        </li>
                        <li className="h-28 w-40 text-center hover:bg-gray-400">
                          <a className="pt-5 block whitespace-no-wrap" href="#">
                            <span className="flex items-center justify-center pb-2">
                              <img src="/share/icon-menu-serviced.svg" alt="" />
                            </span>
                            <span className="uppercase font-normal text-sm text-black">
                              Service <br></br>Office
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className=" flex-auto text-center">
            <div
              className={
                "text-sm rounded-t-lg xs:rounded-none block font-medium leading-normal hover:bg-white  " +
                (openTab === 2
                  ? "text-blue-700 bg-gray-1000"
                  : "bg-navbar text-black xs:bg-[#F0F2F5] ")
              }
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(2);
              }}
              data-toggle="tab"
              role="tablist"
            >
              <div
                className={
                  "flex justify-center " +
                  (openTab === 2 &&
                    "rounded-t-lg bg-gradient-to-r from-[#9CFFAC] to-[#47BF33] bg-[length:100%_4px] bg-no-repeat ") +
                  (header
                    ? " bg-border-t-0 bg-white py-4 xs:py-2 bg-boder-right bg-[length:100%_0px] "
                    : " py-4 xs:h-20 xs:py-1 hover:bg-gradient-to-r from-[#9CFFAC] to-[#47BF33] bg-[length:100%_4px] bg-no-repeat hover:rounded-t-lg transition xs:bg-[length:100%_0px]")
                }
              >
                <div className="group ">
                  <button className="flex justify-center ">
                    <div className="inline-flex items-center group gap-3 xs:block">
                      {header ? (
                        <div className="hidden xs:block">
                          <img
                            src="/share/icon-bankingsolution.svg"
                            alt=""
                            className="m-auto"
                          />
                        </div>
                      ) : (
                        <div>
                          <img
                            src="/share/icon-bankingsolution.svg"
                            alt=""
                            className="m-auto"
                          />
                        </div>
                      )}
                      <span className="text-sm uppercase font-medium hover:text-blue-700 xs:text-[12px] xs:font-light xs:text-[#646464] xs:capitalize">
                        {t("HOME_LB_BANKINGSOLUTION")}
                      </span>
                      {header && (
                        <span className="duration-200 transform group-hover:rotate-180 ease xs:hidden">
                          <img src="/share/icon-arrow-up-blue.svg" alt="" />
                        </span>
                      )}
                    </div>
                  </button>
                  {header && (
                    <div className="absolute hidden text-gray-700 pt-6 left-[38%] group-hover:block z-10 transition-all duration-500 ">
                      <ul className="bg-box-shadow-ul grid grid-cols-2 xs:hidden ">
                        <li className="h-28 w-40 text-center hover:bg-gray-400 bg-border-bottom bg-boder-right">
                          <a
                            className="block whitespace-no-wrap pt-5 "
                            href="#"
                          >
                            <span className="flex items-center justify-center pb-2">
                              <img src="/share/icon-bangking-1.svg" alt="" />
                            </span>
                            <span className="pt-4 uppercase font-normal text-sm text-black ">
                              Account Opening Consultancy
                            </span>
                          </a>
                        </li>
                        <li className="h-28 w-40 text-center hover:bg-gray-400 bg-border-bottom">
                          <a
                            className="block whitespace-no-wrappt pt-5 "
                            href="#"
                          >
                            <span className="flex items-center justify-center pb-3">
                              <img src="/share/icon-banking-2.svg" alt="" />
                            </span>
                            <span className="uppercase font-normal text-sm text-black">
                              Merchant Account Online
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className=" flex-auto text-center">
            <div
              className={
                "text-sm rounded-t-lg xs:rounded-none block font-medium leading-normal hover:bg-white  " +
                (openTab === 3
                  ? "text-blue-700 bg-gray-1000"
                  : "bg-navbar text-black xs:bg-[#F0F2F5]")
              }
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(3);
              }}
              data-toggle="tab"
              role="tablist"
            >
              <div
                className={
                  "flex justify-center " +
                  (openTab === 3 &&
                    "bg-gradient-to-r from-[#0072FF] to-[#00C6FF] bg-[length:100%_4px] bg-no-repeat") +
                  (header
                    ? "bg-border-t-0 bg-white py-4 xs:py-2 bg-boder-right bg-[length:100%_0px] "
                    : " py-4 xs:py-1 xs:h-20 hover:bg-gradient-to-r from-[#0072FF] to-[#00C6FF] bg-[length:100%_4px] bg-no-repeat hover:rounded-t-lg rounded-t-lg transition xs:bg-[length:100%_0px]")
                }
              >
                <div className="group ">
                  <button className="flex justify-center ">
                    <div className="inline-flex items-center group gap-3 xs:block">
                      {header ? (
                        <div className="hidden xs:block">
                          <img
                            src="/share/icon-legalcompliane.svg"
                            alt=""
                            className="m-auto"
                          />
                        </div>
                      ) : (
                        <div>
                          <img
                            src="/share/icon-legalcompliane.svg"
                            alt=""
                            className="m-auto"
                          />
                        </div>
                      )}
                      <span className="text-sm uppercase font-medium hover:text-blue-700 xs:text-[12px] xs:font-light xs:text-[#646464] xs:capitalize">
                        {t("HOME_LB_LEGALCOMPLIANCE")}
                      </span>
                      {header && (
                        <span className="duration-200 transform group-hover:rotate-180 ease xs:hidden">
                          <img src="/share/icon-arrow-up-blue.svg" alt="" />
                        </span>
                      )}
                    </div>
                  </button>
                  {header && (
                    <div className="absolute hidden text-gray-700 left-[49%] pt-6 group-hover:block z-10 transition-all duration-500">
                      <ul className="bg-box-shadow-ul grid grid-cols-2 xs:hidden">
                        <li className="h-28 w-40 text-center hover:bg-gray-400 bg-border-bottom bg-boder-right">
                          <a
                            className="block whitespace-no-wrap pt-5 "
                            href="#"
                          >
                            <span className="flex items-center justify-center pb-2">
                              <img src="/share/icon-legal-1.svg" alt="" />
                            </span>
                            <span className="pt-4 uppercase font-normal text-sm text-black">
                              Accounting & Auditing
                            </span>
                          </a>
                        </li>
                        <li className="h-28 w-40 text-center hover:bg-gray-400 bg-border-bottom">
                          <a
                            className="block whitespace-no-wrappt pt-5 "
                            href="#"
                          >
                            <span className="flex items-center justify-center pb-2">
                              <img src="/share/icon-legal-2.svg" alt="" />
                            </span>
                            <span className="uppercase font-normal text-sm text-black">
                              Business Licensing
                            </span>
                          </a>
                        </li>
                        <li className="h-28 w-40 text-center hover:bg-gray-400 bg-border-bottom bg-boder-right">
                          <a className="pt-5 block whitespace-no-wrap" href="#">
                            <span className="flex items-center justify-center pb-2">
                              <img src="/share/icon-legal-3.svg" alt="" />
                            </span>
                            <span className="uppercase font-normal text-sm text-black">
                              Trademark Registration
                            </span>
                          </a>
                        </li>
                        <li className="h-28 w-40 text-center hover:bg-gray-400 bg-border-bottom">
                          <a className="pt-5 block whitespace-no-wrap" href="#">
                            <span className="flex items-center justify-center pb-2">
                              <img src="/share/icon-legal-4.svg" alt="" />
                            </span>
                            <span className="uppercase font-normal text-sm text-black">
                              Change Agent
                            </span>
                          </a>
                        </li>
                        <li className="h-28 w-40 text-center hover:bg-gray-400 bg-border-bottom bg-boder-right">
                          <a className="pt-5 block whitespace-no-wrap" href="#">
                            <span className="flex items-center justify-center pb-2">
                              <img src="/share/icon-legal-5.svg" alt="" />
                            </span>
                            <span className="uppercase font-normal text-sm text-black">
                              Company Renewal
                            </span>
                          </a>
                        </li>
                        <li className="h-28 w-40 text-center hover:bg-gray-400 bg-border-bottom">
                          <a className="pt-5 block whitespace-no-wrap" href="#">
                            <span className="flex items-center justify-center pb-2">
                              <img src="/share/icon-legal-6.svg" alt="" />
                            </span>
                            <span className="uppercase font-normal text-sm text-black">
                              Company Strike Off
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className=" flex-auto text-center">
            <div
              className={
                "text-sm rounded-t-lg xs:rounded-none block font-medium leading-normal hover:bg-white  " +
                (openTab === 4
                  ? "text-blue-700 bg-gray-1000"
                  : "bg-navbar text-black xs:bg-[#F0F2F5]")
              }
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(4);
              }}
              data-toggle="tab"
              role="tablist"
            >
              <div
                className={
                  "flex justify-center " +
                  (openTab === 4 &&
                    "bg-gradient-to-r from-[#4A00E0] to-[#8E2DE2] bg-[length:100%_4px] bg-no-repeat") +
                  (header
                    ? "bg-border-t-0 bg-white py-3 xs:py-2 bg-boder-right bg-[length:100%_0px] "
                    : " py-4 xs:py-1 xs:h-20 hover:bg-gradient-to-r from-[#4A00E0] to-[#8E2DE2] bg-[length:100%_4px] bg-no-repeat hover:rounded-t-lg rounded-t-lg transition xs:bg-[length:100%_0px]")
                }
              >
                <div className=" group ">
                  <button className="flex justify-center ">
                    <div className="inline-flex items-center group gap-3 xs:block">
                      {header ? (
                        <div className="hidden xs:block">
                          <img
                            src="/share/icon-wealthmanagement.svg"
                            alt=""
                            className="m-auto"
                          />
                        </div>
                      ) : (
                        <div>
                          <img
                            src="/share/icon-wealthmanagement.svg"
                            alt=""
                            className="m-auto"
                          />
                        </div>
                      )}
                      <span className="text-sm uppercase font-medium hover:text-blue-700 xs:text-[12px] xs:font-light xs:text-[#646464] xs:capitalize">
                        {t("HOME_LB_WEALTHMANAGEMENT")}
                      </span>
                      {header && (
                        <span className="duration-200 transform group-hover:rotate-180 ease xs:hidden">
                          <img src="/share/icon-arrow-up-blue.svg" alt="" />
                        </span>
                      )}
                    </div>
                  </button>
                  {header && (
                    <div className="absolute hidden text-gray-700 left-[61%] pt-6 group-hover:block z-10 transition-all duration-500">
                      <ul className="bg-box-shadow-ul grid grid-cols-2 xs:hidden">
                        <li className="h-28 w-40 text-center hover:bg-gray-400 bg-border-bottom bg-boder-right">
                          <a
                            className="block whitespace-no-wrap pt-5 "
                            href="#"
                          >
                            <span className="flex items-center justify-center pb-2">
                              <img src="/share/icon-wealth-1.svg" alt="" />
                            </span>
                            <span className="pt-4 uppercase font-normal text-sm text-black">
                              Trust/ Foundation Formation
                            </span>
                          </a>
                        </li>
                        <li className="h-28 w-40 text-center hover:bg-gray-400 bg-border-bottom">
                          <a
                            className="block whitespace-no-wrappt pt-5 "
                            href="#"
                          >
                            <span className="flex items-center justify-center pb-2">
                              <img src="/share/icon-wealth-2.svg" alt="" />
                            </span>
                            <span className="uppercase font-normal text-sm text-[#E1E1E1]">
                              Private Client Services
                            </span>
                          </a>
                        </li>
                        <li className="h-28 w-40 text-center hover:bg-gray-400 bg-border-bottom bg-boder-right">
                          <a className="pt-5 block whitespace-no-wrap" href="#">
                            <span className="flex items-center justify-center pb-2">
                              <img src="/share/icon-wealth-3.svg" alt="" />
                            </span>
                            <span className="uppercase font-normal text-sm text-[#E1E1E1]">
                              Investments
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {header ? (
            <div className="bg-gradient-to-r from-[#EE0979] to-[#FF6A00] py-3 px-5 xs:hidden">
              <button type="button" className="font-medium text-sm text-white">
                SET UP NOW
              </button>
            </div>
          ) : (
            <div
              className={`${
                header
                  ? "bg-gradient-to-r from-[#EE0979] to-[#FF6A00] "
                  : "bg-navbar"
              } flex-auto text-center xs:hidden`}
            >
              <div className="p-1">
                <div
                  className={`${
                    header ? "py-2" : "bg-download-app py-2"
                  } flex justify-center items-center`}
                >
                  <div className="">
                    {header ? (
                      <img
                        src="/share/icon-dowload-white.svg"
                        alt=""
                        className="m-auto"
                      />
                    ) : (
                      <img
                        src="/share/icon-download-app.svg"
                        alt=""
                        className="m-auto"
                      />
                    )}
                  </div>
                  <div
                    className={`${
                      header ? "text-white" : "text-blue-500"
                    } text-sm uppercase pl-3 font-medium`}
                  >
                    Download App
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className=" bg_header_tabs pt-8 xs:pt-24">
        <div className=" container m-auto">
          <div className="relative flex flex-col min-w-0 break-words  w-full mb-6  rounded-2xl">
            <div className=" flex-auto">
              <div className=" tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <h1 className="xs:text-xl xs:text-center text-3xl xs:px-3 font-light flex justify-center bg-gradient-to-r from-[#EE0979] to-[#FF6A00] bg-clip-text text-transparent">
                    Everything you need to set up a new Overseas Business
                  </h1>
                  <Establishment></Establishment>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <h1 className="xs:text-xl xs:text-center text-3xl xs:px-12 font-light flex justify-center bg-gradient-to-r from-[#47BF33] to-[#9CFFAC] bg-clip-text text-transparent">
                    Expert solutions for your International Transactions
                  </h1>
                  <BankingSolution></BankingSolution>
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <h1 className="xs:text-xl xs:text-center xs:px-5 px-64 text-3xl font-light flex justify-center text-center bg-gradient-to-r from-[#0072FF] to-[#00C6FF] bg-clip-text text-transparent">
                    We make sure your business aligns with the Laws and
                    Regulations of the host country
                  </h1>
                  <LegalCompliance></LegalCompliance>
                </div>
                <div className={openTab === 4 ? "block" : "hidden"} id="link4">
                  <h1 className="xs:text-xl xs:text-center xs:px-12 text-3xl font-light flex justify-center bg-gradient-to-r from-[#4A00E0] to-[#8E2DE2] bg-clip-text text-transparent">
                    Consider every angle to Protect and Grow your Wealth
                  </h1>
                  <WealthManagement></WealthManagement>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
