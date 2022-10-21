import React from "react";

type IViewAll = {
  titlemore?: String;
  link?: String;
  bg?: string;
  pd?:string;
  xs?:string
};
const ViewAll = (props: IViewAll) => (
  <div className="button-group ">
    <a href={props.link?.toString()}>
      <button
        type="button"
        style={{ background: `${props.bg}` , padding:`${props.pd}`}}
        className="text-sm"
      >
    <span className="xs:hidden font-normal">
        {props.titlemore}
    </span>
      
      </button>
    </a>
  </div>
);

export { ViewAll };
