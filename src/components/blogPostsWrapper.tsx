import React, { FC, ReactNode } from "react";
import { LargeTitle } from "@/components/largeTitle";

interface BlogPostsWrapperProps {
  children: ReactNode;
}

export const BlogPostsWrapper: FC<BlogPostsWrapperProps> = ({ children }) => {
  const style = process.env.STYLE;

  return (
    <section
      className={`
        px-notionX
        ${style == "shadcn" && " grid grid-cols-1 gap-4 py-4"}
        ${style == "newyork" && " grid grid-cols-1 gap-16 py-8"}
    `}
    >
      <LargeTitle style={style!} title={"Blogs"} />
      {children}
    </section>
  );
};
