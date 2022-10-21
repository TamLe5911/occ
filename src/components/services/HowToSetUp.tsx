import React from "react";
import { Submit } from "../../shares/components/button/Submit";
import { TitleChildren } from "../../shares/components/title/TitleChildren";

function HowToSetUp() {
  return (
    <div className="container mx-auto pt-10 mb-40">
      <TitleChildren
        title={
          "2 fast & easy step to owns a package serviced office, workspace and work in the city of your choice"
        }
        img={"../share/Setting.png"}
      ></TitleChildren>

      <div className="grid grid-cols-2 gap-10 max-w-3xl m-auto relative mt-5 mb-20">
        <div className="box_how text-center">
          <div className="img ">
            <img className=" m-auto" src="../share/how-1.png" alt="" />
          </div>
          <div className="number mb-8 mt-8 inline-block">
            <span>1</span>
          </div>
          <div className="text">
            <a
              href=""
              className="title_how block font-medium text-black mb-3 text-xl"
            >
              Choose your type of service
            </a>
            <span className="desc font-normal text-gray text-base text-left">
              Choose your type of serviced office or contact us for consultation
            </span>
          </div>
        </div>
        <div className="box_how text-center">
          <div className="img ">
            <img className=" m-auto" src="../share/how-2.png" alt="" />
          </div>
          <div className="number mb-8 mt-8 inline-block">
            <span>2</span>
          </div>
          <div className="text">
            <a href="" className="title_how block font-medium text-black mb-3">
              Choose your type of service
            </a>
            <span className="desc font-normal text-gray text-base text-left">
              Choose your type of serviced office or contact us for consultation
            </span>
          </div>
        </div>
      </div>
      <div className="text-center mt-5 mb-5">
        <p className="font-medium mb-4">
          Contact us today, we ll help you get started.
        </p>
        <Submit title={"Contact Us"} width={280}></Submit>
      </div>
    </div>
  );
}

export default HowToSetUp;
