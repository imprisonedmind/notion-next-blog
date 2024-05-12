import { NotionAPI } from "notion-client";
import React, { Fragment } from "react";
import { NotionPage } from "@/components/notionClientPage";
import IsDarkModeClient from "@/components/isDarkModeClient";

export default async function Page({ params }: { params: { slug: string } }) {
  const id = params.slug[1];

  const notion = new NotionAPI();
  const recordMap = await notion.getPage(id);

  return (
    <Fragment>
      <NotionPage recordMap={recordMap} />
    </Fragment>
  );
}
