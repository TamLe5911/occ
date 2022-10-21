import React from "react";

type IOrderNows = {
  title: String;
  width?: number;
};
const OrderNows = (props: IOrderNows) => (
  <div className="bnt_order  rounded-lg m-auto" style={{ width: `${props.width}px` }} >
    <div className="bg-fees-button" >
      <button>{props.title}</button>
    </div>
  </div>
);

export { OrderNows };
