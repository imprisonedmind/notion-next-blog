"use client";
import * as React from "react";
import { FC } from "react";
import { NotionRenderer } from "react-notion-x";
import "react-notion-x/src/styles.css";
import { ExtendedRecordMap } from "notion-types";
import useLocalStorage from "use-local-storage";
import { Code } from "react-notion-x/build/third-party/code";
import { Collection } from "react-notion-x/build/third-party/collection";

interface NotionPageProps {
  recordMap: ExtendedRecordMap;
}

export const NotionPage: FC<NotionPageProps> = (props) => {
  const { recordMap } = props;

  const [isDarkMode, setIsDarkMode] = useLocalStorage("isDarkMode", {
    defaultValue: false,
  });

  return (
    <NotionRenderer
      recordMap={recordMap}
      // @ts-ignore
      darkMode={isDarkMode as boolean}
      fullPage={false}
      components={{ Code, Collection }}
      className={"dark:!text-zinc-500"}
    />
  );
};
