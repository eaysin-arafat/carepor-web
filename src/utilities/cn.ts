import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...styles: (string | object)[]) => {
  return twMerge(clsx(...styles));
};
