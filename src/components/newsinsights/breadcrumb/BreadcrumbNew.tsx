import React, { Children, Fragment } from "react";

const BreadcrumbNew = ({ children }: any) => {
  const childrenArray = Children.toArray(children);
  const childrenWtihSeperator = childrenArray.map((child, index) => {
    if (index !== childrenArray.length - 1) {
      return (
        <Fragment key={index}>
          {child}
          <span className="text-black">/</span>
        </Fragment>
      );
    }
    return child;
  });

  return (
    <nav className="" aria-label="breadcrumb">
      <ol className="flex items-center space-x-4 text-[40px] text-[#646464]">{childrenWtihSeperator}</ol>
    </nav>
  );
};

export default BreadcrumbNew;
