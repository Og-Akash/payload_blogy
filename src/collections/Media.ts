import path from "path";
import type { CollectionConfig } from "payload";

export const Media: CollectionConfig = {
  slug: "media",
  access: {
    create: () => true,
    read: () => true,
  },
  fields: [
    {
      name: "alt",
      type: "text",
      required: true,
    },
    {
      name: "createdAtDate",
      type: "date",
      required: true,
      defaultValue: new Date().toISOString(),
    },
    {
      name: "uploader",
      type: "relationship",
      relationTo: "users",
    },
  ],
  upload: {
    staticDir: "media",
    mimeTypes: ["image/*", "video/*"],
  },
};
