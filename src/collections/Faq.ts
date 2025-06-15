import { CollectionConfig } from "payload";

export const Faqs: CollectionConfig = {
  slug: "faqs",
  labels: {
    singular: "FAQ",
    plural: "FAQs",
  },
  admin: {
    useAsTitle: "question",
    defaultColumns: ["question", "order", "createdAt"],
    group: "Content",
    hidden: false,
    description: "Manage Frequently Asked Questions here.",
  },
  access: {
    create: () => true,
    read: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: "order",
      label: "Display Order",
      type: "number",
      defaultValue: 0,
      required: true,
      admin: {
        description: "Lower numbers display first",
      },
    },
    {
      name: "question",
      type: "text",
      required: true,
    },
    {
      name: "answer",
      type: "text",
      required: true,
      admin: {
        description: "Add formatting for your answer.",
      },
    },
    {
      name: "slug",
      type: "text",
      label: "Slug (Optional)",
      required: true,
      unique: true,
      admin: {
        description: "If left blank, auto-generated from question.",
        readOnly: true,
      },
    },
  ],
  hooks: {
    beforeValidate: [
      ({ data }) => {
        if (data && data.question && !data.slug) {
          data.slug = data.question
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/(^-|-$)+/g, "");
        }
        return data;
      },
    ],
  },
};
