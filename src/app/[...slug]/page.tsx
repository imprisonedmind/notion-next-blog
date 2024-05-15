import { NotionAPI } from "notion-client";
import React, { Fragment } from "react";
import { NotionPage } from "@/components/notionClientPage";

export default async function Page({ params }: { params: { slug: string } }) {
  const id = params.slug[1];
  const isPrivate = params.slug[2];

  let notion;

  if (isPrivate) {
    notion = new NotionAPI({
      authToken: process.env.NON_OFFICIAL_AUTH_TOKEN,
      activeUser: process.env.NON_OFFICIAL_USER_ID,
    });
  } else {
    notion = new NotionAPI();
  }

  const recordMap = await notion.getPage(id);

  return (
    <Fragment>
      <NotionPage recordMap={recordMap} />
    </Fragment>
  );
}
