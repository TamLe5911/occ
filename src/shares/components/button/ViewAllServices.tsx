import React from "react";

  type IViewAllServices = {
    titlemore?: String;
    link?: String;
    bg?: string;
    pd?:string;
  };

  
  const ViewAllServices = (props: IViewAllServices) => (
    <div className="button-services ">
      <a href={props.link?.toString()}>
        <button
          type="button"
          style={{ background: `${props.bg}`,padding:`${props.pd}`  }}
          className="text-sm"
        >
          {props.titlemore}
        </button>
      </a>
    </div>
  );


export { ViewAllServices };