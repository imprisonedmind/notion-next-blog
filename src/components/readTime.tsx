import { FC } from "react";
import { convertSecondsToTime, formatRelativeTime } from "@/lib/utils";

interface ReadTimeProps {
  readTime: number;
  createdTime: string;
}

export const ReadTime: FC<ReadTimeProps> = ({ readTime, createdTime }) => {
  return (
    <div className={"flex flex-col "}>
      <p className={"text-sm text-zinc-500"}>
        {convertSecondsToTime(readTime)} read
      </p>
      <p className={"text-xs text-zinc-400"}>
        {formatRelativeTime(createdTime)}
      </p>
    </div>
  );
};
