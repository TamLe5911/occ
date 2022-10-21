import Link from "next/link";
import React from "react";
type IBreadcrumbNewSignItem = {
  children: string;
  href: string;
  isCurrent: boolean;
};
const BreadcrumbNewSignItem = (props: IBreadcrumbNewSignItem) => {
  return (
    <li>
      <Link href={props.href} passHref>
        <a
          className={props.isCurrent ? "text-black font-medium" : "text-slate-400 font-normal"}
          aria-current={props.isCurrent ? "page" : "false"}
        >
          {props.children}
        </a>
      </Link>
    </li>
  );
};

export default BreadcrumbNewSignItem;
