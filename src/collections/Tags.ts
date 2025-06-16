import type { CollectionConfig } from "payload";

export const Tags: CollectionConfig = {
  slug: "tags",
  admin: {
    useAsTitle: "label",
  },
  access: {
    read: ()=> true,
    create: () => true
  },
  fields: [
    {
      name: "label",
      type: "text",
    },
  ],
};
