import type { Block, } from "payload";

export const Hero: Block = {
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
};
