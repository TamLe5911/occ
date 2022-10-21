import React from 'react'
import { Breadcrumbs } from "../../../components/companyformatons/breadcrumb/Breadcrumb";
import { AboutUs } from "../../../components/index/AboutUs";
import { DownLoad } from "../../../components/index/DownLoad";

import { Promotion } from "../../../components/index/Promotion";
import { BreadcrumbsNewSign } from '../../../components/newsinsights/breadcrumb/BreadcrumbsNewSign';
import NavicationNewSign from '../../../components/newsinsights/PavicationNewSign/PavicationNewSign';
import { Main } from "../../../layout/public/Main";
import { Meta } from "../../../layout/public/Meta";
import { Banner } from "../../../shares/components/banner/banner";
import { TitleBanner } from "../../../shares/components/title/TitleBanner";
import { AppConfig } from "../../../utils/AppConfig";

function JurisdictionUpdates() {
  return (
    <Main
    meta={<Meta title={AppConfig.title} description={AppConfig.description} />}
  >
    <div className="bg_slide">
      <div className="bg_breadcrumbs">
        <Breadcrumbs></Breadcrumbs>
      </div>
      <Banner
        title={"Lorem ipsum dolor"}
        desc={"Lorem ipsum dolor sit amet"}
        content={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit."
        }
        urlImage={"/share/NewsInsights.png"}
        titleButton={"link"}
      ></Banner>
      <div className="container mx-auto relative">
        <TitleBanner title={"News & Insights"}></TitleBanner>
      </div>
    </div>
    <div className="pt-10">
        <BreadcrumbsNewSign />
        <NavicationNewSign />
    </div>
   
    
    <div className="">
      <Promotion></Promotion>
    </div>
    <div className="container  mx-auto">
      <AboutUs></AboutUs>
    </div>
    <div className=" ">
      <DownLoad></DownLoad>
    </div>
  </Main>
  )
}

export default JurisdictionUpdates