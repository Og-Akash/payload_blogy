// collections/feedbacks.ts
import type { CollectionConfig } from "payload";

export const Feedbacks: CollectionConfig = {
  slug: "feedbacks",
  admin: {
    useAsTitle: "subject",
    defaultColumns: ["subject", "email", "createdAt"],
  },
  access: {
    create: () => true, 
    read: () => true,
  },
  fields: [
    {
      name: "subject",
      type: "text",
      required: true,
    },
    {
      name: "message",
      type: "textarea",
      required: true,
    },
    {
      name: "email",
      type: "email",
      required: true,
    },
  ],
};

export default Feedbacks;
