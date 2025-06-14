import type { CollectionConfig } from "payload";

export const Blogs: CollectionConfig = {
  slug: "blogs",
  admin: {
    useAsTitle: "title",
  },
  access: {
    create: () => true,
    read: () => true,
  },
  fields: [
    {
      name: "title",
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
      name: "tags",
      type: "array",
      fields: [
        {
          name: "tag",
          type: "relationship",
          relationTo: "tags",
        },
      ],
      required: true,
      minRows: 1,
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
  ],
  hooks: {
    beforeChange: [
      ({ req, operation, data }) => {
        if (operation === "create") {
          if (req.user) {
            data.uploadedBy = req.user.id;
            return data;
          }
        }
      },
    ],
  },
};
