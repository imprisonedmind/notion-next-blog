"use client";
import * as React from "react";
import { FC, useEffect } from "react";
import { NotionRenderer } from "react-notion-x";
import "react-notion-x/src/styles.css";
import { ExtendedRecordMap } from "notion-types";

interface NotionPageProps {
  recordMap: ExtendedRecordMap;
}

export const NotionPage: FC<NotionPageProps> = (props) => {
  const { recordMap } = props;

  return (
    <NotionRenderer
      recordMap={recordMap}
      darkMode={
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      }
      className={"!dark:text-zinc-400"}
      fullPage={false}
    />
  );
};
