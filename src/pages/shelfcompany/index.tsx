import React from "react";
import { Breadcrumbs } from "../../components/companyformatons/breadcrumb/Breadcrumb";
import { FaqsFeature } from "../../components/companyformatons/feature/FAQs";
import ServiceFees from "../../components/companyformatons/jurisdictions/servicefees/ServiceFees";
import { AboutUs } from "../../components/index/AboutUs";
import { DownLoad } from "../../components/index/DownLoad";
import { Promotion } from "../../components/index/Promotion";
import ShelfCompany from "../../components/shelfcompany";
import { Main } from "../../layout/public/Main";
import { Meta } from "../../layout/public/Meta";
import { Banner } from "../../shares/components/banner/banner";
import { TitleBanner } from "../../shares/components/title/TitleBanner";
import { AppConfig } from "../../utils/AppConfig";
const Index = () => (
  <Main
    meta={<Meta title={AppConfig.title} description={AppConfig.description} />}
  >
    <div className="bg_slide">
      <style jsx>{`
        .bg_slide {
          background: url(/share/company.png);
          height: 32vw;

          background-repeat: no-repeat;
        }
      `}</style>
      <div className="bg_breadcrumbs">
        <Breadcrumbs></Breadcrumbs>
      </div>
      <Banner
        title={"Lorem ipsum dolor"}
        desc={"Lorem ipsum dolor sit amet"}
        content={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit."
        }
        urlImage={"/share/banner.jpg"}
        titleButton={"link"}
      ></Banner>
      <div className="container mx-auto relative">
        <TitleBanner title={"Shelf Company"}></TitleBanner>
      </div>
    </div>
    <div className="">
      <ShelfCompany></ShelfCompany>
    </div>
    <div className="">
      <ServiceFees></ServiceFees>
    </div>
    <div className="bg-[#F0F2F5] mt-10">
      <FaqsFeature></FaqsFeature>
    </div>
    <div className="">
      <Promotion></Promotion>
    </div>
    <div className="container    mx-auto">
      <AboutUs></AboutUs>
    </div>
    <div className=" ">
      <DownLoad></DownLoad>
    </div>
  </Main>
);
export default Index;
