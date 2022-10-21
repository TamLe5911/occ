import { ViewAll } from "../button/ViewAll";
import { HeaderTitle } from "./HeaderTitle";

type IOccTitle = {
  title?: string;
  icon?: string;
  titlemore?: string;
  bg?: string;
  pd?:string;
};

const OccTitle = (props: IOccTitle) => (
  <div className="pt-10 bg-border-bottom xs:pt-2">
    <div className="flex pb-4 xs:pb-0 items-center gap-3">
      <img src={props.icon} alt="" />
      <div className="flex justify-between items-center w-full">
        <div>
        <HeaderTitle title={props.title} />
        </div>
        <div className="xs:hidden">
        <ViewAll titlemore={props.titlemore} bg={props.bg} pd={props.pd} />
        </div>
      </div>
    </div>
  </div>
);

export { OccTitle };
