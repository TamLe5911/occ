import React from "react";

type ISubmitGray = {
  title: String;
  width?: number;
  valid?: boolean;
};
const SubmitGray = (props: ISubmitGray) => (
  <div className="btn_gray">
    <button
      style={{ width: `${props.width}px` }}
      type="submit"
      disabled={props.valid}
      
    >
      {props.title}
    </button>
  </div>
);

export { SubmitGray };
