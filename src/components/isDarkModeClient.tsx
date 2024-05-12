"use client";
import { Fragment, useEffect } from "react";

export default function IsDarkModeClient() {
  useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (e) => {
        const newColorScheme = e.matches ? "dark" : "light";
        localStorage.setItem("isDarkMode", newColorScheme);
      });
  }, []);

  return <Fragment />;
}
