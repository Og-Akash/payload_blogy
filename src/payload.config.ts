import { postgresAdapter } from "@payloadcms/db-postgres";
import { payloadCloudinaryPlugin } from "@jhb.software/payload-cloudinary-plugin";
import { payloadCloudPlugin } from "@payloadcms/payload-cloud";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import path from "path";
import { buildConfig } from "payload";
import { fileURLToPath } from "url";
import sharp from "sharp";

import { Media, NavLink, Pages, Users, Tags, Faqs, Blogs, Feedbacks } from "@/collections";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
    // autoLogin: {
    //   email: "user+publisher@gmail.com",
    //   password: "userpublisher",
    // },
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  cors: ["*"],
  collections: [Users, Media, Blogs, Pages, NavLink, Tags, Faqs, Feedbacks],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || "",
    },
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    payloadCloudinaryPlugin({
      uploadCollections: ["media"],
      credentials: {
        apiKey: process.env.CLOUDINARY_API_KEY!,
        apiSecret: process.env.CLOUDINARY_API_SECRET!,
      },
      cloudinary: {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME!,
        folder: process.env.CLOUDINARY_FOLDER_NAME,
      },
    }),
  ],
  debug: process.env.PAYLOAD_DEBUG === "true",
});
