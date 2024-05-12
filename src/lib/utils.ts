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

export function encodeUrl(value: string) {
  return value.replace(/\s+/g, "-");
}

export function formatRelativeTime(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  const years = Math.floor(diffSeconds / (365 * 24 * 60 * 60));
  const months = Math.floor(diffSeconds / (30 * 24 * 60 * 60));
  const weeks = Math.floor(diffSeconds / (7 * 24 * 60 * 60));
  const days = Math.floor(diffSeconds / (24 * 60 * 60));
  const hours = Math.floor(diffSeconds / (60 * 60));
  const minutes = Math.floor(diffSeconds / 60);
  const seconds = diffSeconds;

  if (years > 0) {
    return `${years} year${years > 1 ? "s" : ""} ago`;
  } else if (months > 0) {
    return `${months} month${months > 1 ? "s" : ""} ago`;
  } else if (weeks > 0) {
    return `${weeks} week${weeks > 1 ? "s" : ""} ago`;
  } else if (days > 0) {
    return `${days} day${days > 1 ? "s" : ""} ago`;
  } else if (hours > 0) {
    return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  } else if (minutes > 0) {
    return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  } else {
    return `${seconds} second${seconds !== 1 ? "s" : ""} ago`;
  }
}

export async function dynamicBlurDataUrl(url: string) {
  const base64str = await fetch(url).then(async (res) =>
    Buffer.from(await res.arrayBuffer()).toString("base64"),
  );

  const blurSvg = `
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 5'>
      <filter id='b' color-interpolation-filters='sRGB'>
        <feGaussianBlur stdDeviation='1' />
      </filter>

      <image preserveAspectRatio='none' filter='url(#b)' x='0' y='0' height='100%' width='100%' 
      href='data:image/avif;base64,${base64str}' />
    </svg>
  `;

  const toBase64 = (str: string) =>
    typeof window === "undefined"
      ? Buffer.from(str).toString("base64")
      : window.btoa(str);

  return `data:image/svg+xml;base64,${toBase64(blurSvg)}`;
}
