import React from "react";
type IViewAllOffices = {
  title?: String;
};
const ViewAllOffice = (props: IViewAllOffices) => (
  <div className="button-services text-right relative h-6">
    <button type="button" className="text-sm button_box">
      {props.title}
    </button>
  </div>
);

export { ViewAllOffice };
