import React, { FC, Fragment } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface LargeTitleProps {
  style: string;
  title: string;
}

export const LargeTitle: FC<LargeTitleProps> = ({ style, title }) => {
  const date = new Date().toLocaleDateString();

  return (
    <Fragment>
      {style === "newyork" && (
        <div className={"flex flex-col gap-1"}>
          <h1 className={"text-3xl text-zinc-600 dark:text-zinc-100"}>
            {title}
          </h1>
          <p className={"text-sm tracking-wide text-zinc-500"}>{date}</p>
        </div>
      )}
      {style === "shadcn" && (
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Blogs</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      )}
    </Fragment>
  );
};
