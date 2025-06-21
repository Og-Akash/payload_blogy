import type { CollectionConfig } from "payload";

export const Blogs: CollectionConfig = {
  slug: "blogs",
  admin: {
    useAsTitle: "title",
  },
  access: {
    create: ({ req }) => req.user?.role === "admin" || req.user?.role === "editor",
    update: ({ req, data }) => req.user?.role === "admin" || req.user?.role === "publisher",
    delete: ({ req }) => req.user?.role === "admin",
    read: () => true,
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
      name: "status",
      type: "select",
      defaultValue: "draft",
      options: ["draft", "published"],
      access: {
        update: ({ req }) => req.user?.role === "admin" || req.user?.role === "publisher",
        create: ({ req }) => req.user?.role === "admin" || req.user?.role === "publisher",
      },
    },
    {
      name: "uploadedBy",
      type: "relationship",
      relationTo: "users",
      required: true,
      access: {
        update: ({ req }) => req.user?.role === "admin",
      },
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
  hooks: {
    beforeChange: [
      ({ operation, req, data }) => {
        if (operation === "create" && req.user) {
          return {
            ...data,
            uploadedBy: req.user.id,
          };
        }
        return data;
      },
    ],
  },
};
