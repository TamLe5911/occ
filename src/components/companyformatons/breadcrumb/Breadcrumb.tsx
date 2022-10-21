import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import React from "react";
import BreadcrumbItem from "../../../shares/components/breadcrumd/BreadcrumbItem";
import Breadcrumb from "../../../shares/components/breadcrumd/Breadcrumb";

type IBreadcrumbs = {
  href: string;
  label: string;
  isCurrent: boolean;
};
const Breadcrumbs = () => {
  const router = useRouter();
  const [isCurrent, setIsCurrent] = useState(false);
  const [breadcrumbs, setBreadcrumbs] = useState<IBreadcrumbs[]>([]);

  useEffect(() => {
    const pathWithoutQuery = router.asPath.split("?")[0];
    let pathArray = pathWithoutQuery.split("/");
    pathArray.shift();
    pathArray = pathArray.filter((path) => path !== "");
    const breadcrumbs = pathArray.map((path, index) => {
      const href = "/" + pathArray.slice(0, index + 1).join("/");
      return {
        href,
        label: path.charAt(0).toUpperCase() + path.slice(1),
        isCurrent: index === pathArray.length - 1,
      };
    });
    setBreadcrumbs(breadcrumbs);
    setIsCurrent(router.pathname === "/");
  }, [router.asPath]);

  return (
    <div className="container mx-auto">
      <Breadcrumb>
        <BreadcrumbItem isCurrent={isCurrent} href="/">
          Home
        </BreadcrumbItem>
        {breadcrumbs &&
          breadcrumbs.map((breadcrumb) => (
            <BreadcrumbItem
              key={breadcrumb.href}
              href={breadcrumb.href}
              isCurrent={breadcrumb.isCurrent}
            >
              {breadcrumb.label}
            </BreadcrumbItem>
          ))}
      </Breadcrumb>
    </div>
  );
};

export { Breadcrumbs };
