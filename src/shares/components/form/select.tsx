/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import React, { Fragment } from "react";
import Select from "react-select";
import { components } from "react-select";
const { SingleValue, Option } = components;
type IOptionList = {
  OptionLIst: IOption[];
  instanceId: string;
  onChange: any;
  value?: string | ReadonlyArray<string> | number | undefined;
};
type IOption = {
  id: number;
  label?: string;
  value?: number;
  image?: string;
  width?: string;
};

const customStyles = {
  option: (provided: any, state: any) => ({
    ...provided,
    border: "none",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    color: state.isSelected ? "red" : "blue",
    background: state.isSelected ? "white" : "white",
  }),

  singleValue: (provided: any) => ({
    ...provided,
    display: "flex",
    border: "none",
    flexDirection: "row",
    alignItems: "center",
  }),
};

const IconSingleValue = (props: any) => (
  <SingleValue {...props}>
    <img
      src={props.data.image}
      style={{
        height: "14px",
        marginRight: "10px",
      }}
    />
    <div className="text-sm inline h-auto w-auto">{props.data.label}</div>
  </SingleValue>
);

const IconOption = (props: any) => (
  <Option {...props}>
    <img
      src={props.data.image}
      style={{
        height: "14px",
        marginRight: "10px",
      }}
    />

    <div className="text-sm inline">{props.data.label}</div>
    {props.isSelected && (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 icon_ct"
        style={{
          float: "right",
          color: "green",
          position: "absolute",
          right: "5px",
        }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 12.75l6 6 9-13.5"
        />
      </svg>
    )}
  </Option>
);
const SelectForm = (props: IOptionList) => (
  <Fragment>
    <Select
      id={props.instanceId}
      instanceId={props.instanceId}
      styles={customStyles}
      components={{
        Option: IconOption,
        SingleValue: IconSingleValue,
      }}
      options={props.OptionLIst}
      defaultValue={props.OptionLIst[0]}
      onChange={props.onChange}
    />
  </Fragment>
);

export { SelectForm };
