import Link from "next/link";
import React from "react";
type IBreadcrumbItem = {
  children: string;
  href: string;
  isCurrent: boolean;
};
const BreadcrumbItem = (props: IBreadcrumbItem) => {
  return (
    <li>
      <Link href={props.href} passHref>
        <a
          className={props.isCurrent ? "text-slate-400" : "text-white"}
          aria-current={props.isCurrent ? "page" : "false"}
        >
          {props.children}
        </a>
      </Link>
    </li>
  );
};

export default BreadcrumbItem;
