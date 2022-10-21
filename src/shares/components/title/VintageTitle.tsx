
import { ViewAllTitle } from "../button/ViewAllTitle";
import { HeaderTitle } from "./HeaderTitle";

type IVintageTitle = {
  title?: string;
  icon?: string;
  titlemore?: string;
  bg?: string;
  pd?:string;
};

const VintageTitle = (props: IVintageTitle) => (
  <div className="pt-10 bg-border-bottom xs:pt-2">
    <div className="flex pb-2">
      <img src={props.icon} alt="" />
      <div className="pl-3 flex justify-between w-full items-center">
        <HeaderTitle title={props.title} />
        <ViewAllTitle titlemore={props.titlemore} bg={props.bg} pd={props.pd} />
      </div>
    </div>
  </div>
);

export { VintageTitle };
