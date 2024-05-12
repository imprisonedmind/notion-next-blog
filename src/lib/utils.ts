import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function convertSecondsToTime(seconds: number) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  const formattedMinutes = minutes > 0 ? `${minutes} min` : "";
  const formattedSeconds =
    remainingSeconds > 0 ? `${remainingSeconds} sec` : "";

  return `${formattedMinutes} ${formattedSeconds}`.trim();
}
