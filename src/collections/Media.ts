import type { CollectionConfig } from "payload"

export const Media: CollectionConfig = {
  slug: "media",
  access: {
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
  upload: true,
}