import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import React from "react";
import BreadcrumbNewSignItem from "./BreadcrumbNewSignItem";
import BreadcrumbNew from "./BreadcrumbNew";

type IBreadcrumbs = {
  href: string;
  label: string;
  isCurrent: boolean;
};
const BreadcrumbsNewSign = () => {
  const router = useRouter();
  const [isCurrent, setIsCurrent] = useState(false);
  const [breadcrumbs, setBreadcrumbs] = useState<IBreadcrumbs[]>([]);

  useEffect(() => {
    const pathWithoutQuery = router.asPath.split("?")[0];
    let pathArray = pathWithoutQuery.split("/").splice(1,2);
    pathArray.shift();
    pathArray = pathArray.filter((path) => path !== "");
    const breadcrumbs = pathArray.map((path, index) => {
      const href = "/newsinsights/" + pathArray.slice(0,1).join("/");
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
      <BreadcrumbNew>
        <BreadcrumbNewSignItem isCurrent={isCurrent} href="/newsinsights">
        News & Insignts
        </BreadcrumbNewSignItem>
        {breadcrumbs &&
          breadcrumbs.map((breadcrumb) => (
            <BreadcrumbNewSignItem
              key={breadcrumb.href}
              href={breadcrumb.href}
              isCurrent={breadcrumb.isCurrent}
            >
              {breadcrumb.label}
            </BreadcrumbNewSignItem>
          ))}
      </BreadcrumbNew>
    </div>
  );
};

export { BreadcrumbsNewSign };
