import React from "react";
import CompanyFormatons from "../../components/companyformatons";
import { Breadcrumbs } from "../../components/companyformatons/breadcrumb/Breadcrumb";
import { AboutUs } from "../../components/index/AboutUs";
import { DownLoad } from "../../components/index/DownLoad";
import { Promotion } from "../../components/index/Promotion";
import { Main } from "../../layout/public/Main";
import { Meta } from "../../layout/public/Meta";
import { Banner } from "../../shares/components/banner/banner";
import { AppConfig } from "../../utils/AppConfig";
const Index = () => (
  <Main
    meta={<Meta title={AppConfig.title} description={AppConfig.description} />}
  >
    <div className="bg_slide xs:hidden block">
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
    </div>
    <div className="pt-10">
      <CompanyFormatons></CompanyFormatons>
    </div>

    <div className="">
      <Promotion></Promotion>
    </div>
    <div className="container mx-auto xs:border-b-8 xs:border-slate-300">
      <AboutUs></AboutUs>
    </div>
    <div className="pt-20 xs:hidden block">
      <DownLoad></DownLoad>
    </div>
  </Main>
);
export default Index;
