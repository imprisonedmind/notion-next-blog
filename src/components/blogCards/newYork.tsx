import { FC } from "react";
import { BlogData } from "@/lib/types";
import {
  convertSecondsToTime,
  createLink,
  formatRelativeTime,
} from "@/lib/utils";
import Link from "next/link";

export const NewYork: FC<BlogData> = ({
  title,
  description,
  createdTime,
  readTime,
  pageID,
  isPrivate,
}) => {
  return (
    <Link
      prefetch={true}
      href={createLink(isPrivate, title, pageID)}
      className={`flex flex-col gap-2`}
    >
      <div className={"flex flex-col gap-1"}>
        <p className={"text-zinc-600 dark:text-zinc-100"}>{title}</p>
        <p className={"line-clamp-3 text-sm text-zinc-500"}>{description}</p>
      </div>
      <div className={"flex flex-row gap-1 !text-xs !text-zinc-500"}>
        <p>{formatRelativeTime(createdTime)}</p>
        <p>-</p>
        <p>{convertSecondsToTime(readTime)}</p>
      </div>
    </Link>
  );
};
