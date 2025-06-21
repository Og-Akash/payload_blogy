import type { CollectionConfig } from "payload";

export const Users: CollectionConfig = {
  slug: "users",
  admin: {
    useAsTitle: "email",
  },
  access: {
    read: ({req}) => req.user?.role === "admin",
  },
  auth: true,
  fields: [
    {
      name: "role",
      type: "select",
      required: true,
      defaultValue: "editor",
      options: [
           { label: 'Editor', value: 'editor' },
        { label: 'Publisher', value: 'publisher' },
        { label: 'Admin', value: 'admin' },
      ]
    }
  ],
};
