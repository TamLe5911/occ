import React from "react";

type ITitleChildren = {
  title: string;
  img:string
};
const TitleChildren = (props: ITitleChildren) => (
  <div className="flex items-center">
  <img src={props.img} alt="" />
  <h2 className="text-2xl font-medium text-black pl-3"> {props.title}</h2>
</div>

 
);

export { TitleChildren };
