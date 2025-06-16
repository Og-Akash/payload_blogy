import type { CollectionConfig } from "payload";

export const Articles: CollectionConfig = {
  slug: "articles",
  admin: {
    useAsTitle: "title",
  },
  access: {
    create: () => true,
    read: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "description",
      type: "text",
      required: true,
    },
    {
      name: "content",
      type: "richText",
      required: true,
    },
    {
      name: "poster",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "uploadedBy",
      type: "relationship",
      relationTo: "users",
    },
    {
      name: "slug",
      label: "Slug",
      type: "text",
      required: true,
    },
    {
      name: "tags",
      label: "Tags",
      type: "array",
      fields: [
        {
          name: "tag",
          label: "Tag",
          type: "relationship",
          relationTo: "tags",
          required: true,
        },
      ],
      minRows: 1,
    },
  ],
};
