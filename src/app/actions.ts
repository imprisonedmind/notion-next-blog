"use server";

import { Client } from "@notionhq/client";

const notion = new Client({
  auth: process.env.AUTH_TOKEN,
});

export const fetchBlogs = async () => {
  const data = await notion.databases.query({
    database_id: process.env.DATABASE_ID!,
  });

  const { results } = data;
  return results;
};
