import { Client } from "@notionhq/client";
import React, { cache } from "react";
import { BlogCard } from "@/components/blogCard";
import { BlogPostsWrapper } from "@/components/blogPostsWrapper";

const notion = new Client({
  auth: process.env.AUTH_TOKEN,
});

const fetchData = cache(async () => {
  const data = await notion.databases.query({
    database_id: process.env.DATABASE_ID!,
  });

  const { results } = data;
  return results;
});

export default async function Home() {
  const data = await fetchData();

  return (
    <BlogPostsWrapper>
      {data.map((blog, index) => {
        // @ts-ignore
        const properties = blog.properties;
        const imgUrl = properties.coverImg.files[0]?.file.url;
        const title = properties.title.title[0]?.plain_text;
        const description = properties.description.rich_text[0]?.text.content;
        const readTime = properties.readTime.number;
        const pageID = properties.pageID.rich_text[0]?.text.content;
        const imgAlt = properties.imgAlt.rich_text[0]?.text.content;
        const created = properties.createdTime.created_time;

        return (
          <BlogCard
            key={index}
            title={title}
            description={description}
            imgUrl={imgUrl}
            imgAlt={imgAlt}
            readTime={readTime}
            pageID={pageID}
            createdTime={created}
          />
        );
      })}
    </BlogPostsWrapper>
  );
}
