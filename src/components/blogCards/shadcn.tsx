import { FC } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { createLink } from "@/lib/utils";
import Link from "next/link";
import { ReadTime } from "@/components/readTime";
import { BlogData } from "@/lib/types";

export const Shadcn: FC<BlogData> = ({
  title,
  description,
  buttonTitle,
  imgUrl,
  imgAlt,
  readTime,
  pageID,
  createdTime,
  dynamicBlurDataUrl,
  isPrivate,
}) => {
  return (
    <Card className={"col-span-1"}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription className={"line-clamp-3 w-full"}>
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent>
        <Image
          src={imgUrl}
          alt={imgAlt}
          width={300}
          height={300}
          placeholder={"blur"}
          blurDataURL={dynamicBlurDataUrl}
          priority={true}
          className={"h-64 w-full object-cover"}
        />
      </CardContent>

      <CardFooter>
        <div className={"flex w-full items-center justify-between"}>
          <ReadTime readTime={readTime} createdTime={createdTime} />
          <Link prefetch={true} href={createLink(isPrivate, title, pageID)}>
            <Button>{buttonTitle || "Read More"}</Button>
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};
