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
import { convertSecondsToTime } from "@/lib/utils";

interface BlogCardProps {
  title: string;
  description: string;
  buttonTitle?: string;
  imgUrl: string;
  imgAlt: string;
}

export const BlogCard: FC<BlogCardProps> = ({
  title,
  description,
  buttonTitle,
  imgUrl,
  imgAlt,
}) => {
  return (
    <Card className={"col-span-1"}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Image
          src={imgUrl}
          alt={imgAlt}
          width={300}
          height={300}
          className={"h-64 w-full object-cover"}
        />
      </CardContent>
      <CardFooter>
        <div className={"flex w-full justify-end"}>
          <p>convertSecondsToTime(readTime)</p>
          <Button>{buttonTitle || "Read More"}</Button>
        </div>
      </CardFooter>
    </Card>
  );
};
