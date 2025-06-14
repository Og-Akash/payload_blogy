import type { CollectionConfig } from "payload";

export const Pages: CollectionConfig = {
  slug: "pages",
  admin: {
    useAsTitle: "slug",
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      type: "text",
      required: true,
    },
    {
      name: "layout",
      type: "blocks",
      required: true,
      blocks: [
        {
          slug: "hero",
          fields: [
            {
              name: "heading",
              type: "text",
              required: true,
            },
            {
              name: "subHeading",
              type: "text",
              required: true,
            },
            {
              name: "heroImage",
              type: "upload",
              relationTo: "media",
              required: true,
            },
            {
              name: "cta_buttons",
              label: "Cta Button",
              type: "array",
              fields: [
                {
                  name: "label",
                  type: "text",
                  required: true,
                },
                {
                  name: "url",
                  type: "text",
                  required: true,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
