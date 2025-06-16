import { Media } from "@/payload-types";

export const isMedia = (img: unknown): img is Media =>
  typeof img === "object" &&
  img !== null &&
  "url" in img &&
  typeof (img as Media).url === "string";