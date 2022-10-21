import React from "react";

type ITitleBanner = {
  title: String;
};
const TitleBanner = (props: ITitleBanner) => (
  <div className="title_banner absolute ">
    <h2 className="font-medium text-2xl"> {props.title}</h2>
  </div>
);

export { TitleBanner };
