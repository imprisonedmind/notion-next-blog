import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../../components/ui/breadcrumb";
import { Fragment } from "react";

export default function Layout({ children, params }) {
  const page = params.slug[0];

  return (
    <div className={"flex flex-col gap-8"}>
      <div className={"w-full px-notionX pt-4"}>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            {/*<BreadcrumbSeparator />*/}
            {/*<BreadcrumbItem>*/}
            {/*  <BreadcrumbLink href="/components">Components</BreadcrumbLink>*/}
            {/*</BreadcrumbItem>*/}
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{page}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      {children}
    </div>
  );
}
