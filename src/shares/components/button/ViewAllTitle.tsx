import React from "react";

type IViewAllTitle = {
  titlemore?: String;
  link?: String;
  bg?: string;
  pd?:string;
  xs?:string
};
const ViewAllTitle = (props: IViewAllTitle) => (
  <div className="">
    <a href={props.link?.toString()}>
      <button
        type="button"
        style={{ background: `${props.bg}` , padding:`${props.pd}`}}
        className="text-sm"
      >
    <span className="xs:hidden font-normal">
        {props.titlemore}
    </span>
      <img src="share/Arrow-right2-icon.svg" alt="" />
      </button>
    </a>
  </div>
);

export { ViewAllTitle };