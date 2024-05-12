import React, { FC, ReactNode } from "react";

interface BlogPostsWrapperProps {
  children: ReactNode;
}

export const BlogPostsWrapper: FC<BlogPostsWrapperProps> = ({ children }) => {
  return (
    <section className={"grid grid-cols-1 gap-4 pt-4"}>{children}</section>
  );
};
