import { Client } from "@notionhq/client";
import React, { cache } from "react";
import { BlogPostsWrapper } from "@/components/blogPostsWrapper";
import { dynamicBlurDataUrl } from "@/lib/utils";
import { Shadcn } from "@/components/blogCards/shadcn";
import { NewYork } from "@/components/blogCards/newYork";
import { fetchBlogs } from "@/app/actions";

export default async function Home() {
  const data = await fetchBlogs();

  return (
    <BlogPostsWrapper>
      {data.map(async (blog, index) => {
        // @ts-ignore
        const properties = blog.properties;
        const imgUrl = properties.coverImg.files[0]?.file.url;
        const title = properties.title.title[0]?.plain_text;
        const description = properties.description.rich_text[0]?.text.content;
        const readTime = properties.readTime.number;
        const pageID = properties.pageID.rich_text[0]?.text.content;
        const imgAlt = properties.imgAlt.rich_text[0]?.text.content;
        const created = properties.createdTime.created_time;
        const isPrivate = properties.isPrivate.checkbox;
        const blurData = await dynamicBlurDataUrl(imgUrl);

        const shadcn = (
          <Shadcn
            key={index}
            title={title}
            description={description}
            imgUrl={imgUrl}
            imgAlt={imgAlt}
            readTime={readTime}
            pageID={pageID}
            createdTime={created}
            isPrivate={isPrivate}
            dynamicBlurDataUrl={blurData}
          />
        );

        switch (process.env.STYLE) {
          case "shadcn":
            return shadcn;
          case "newyork":
            return (
              <NewYork
                key={index}
                title={title}
                description={description}
                imgUrl={imgUrl}
                imgAlt={imgAlt}
                readTime={readTime}
                pageID={pageID}
                createdTime={created}
                isPrivate={isPrivate}
                dynamicBlurDataUrl={blurData}
              />
            );
          default:
            return shadcn;
        }
      })}
    </BlogPostsWrapper>
  );
}
