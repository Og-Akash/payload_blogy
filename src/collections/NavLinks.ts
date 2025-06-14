import type { CollectionConfig } from "payload";

export const NavLink: CollectionConfig = {
  slug: "navlink",
  admin: {
    useAsTitle: "label",
  },
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: "label",
      type: "text",
      required: true,
    },
    {
      name: "link",
      type: "text",
      required: true,
    },
    {
      name: "openInNewTab",
      type: "checkbox",
      defaultValue: false,
    },
  ],
};
