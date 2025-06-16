import { payload } from "@/lib/payload";
import { CollectionSlug } from "payload";
import type { Payload } from "payload";

type PayloadFindOptions = Parameters<Payload["find"]>[0];

export async function getCollectionData(
  collectionName: CollectionSlug,
  params?: Omit<PayloadFindOptions, "collection">,
) {
  try {
    const document = await payload.find({
      collection: collectionName,
      ...params,
    });
    return document;
  } catch (error) {
    console.log("Failed to get the Data of Collection", error);
  }
}

/**
 * @param slug the slug of the page
 * @param params additional paramemeters to pass
 * @returns
 */

export async function getPageBySlug(slug: string, params?: Omit<PayloadFindOptions, "collection">) {
  try {
    const result = await payload.find({
      collection: "pages",
      where: {
        slug: {
          equals: slug,
        },
      },
      ...params,
    });
    return result.docs;
  } catch (error) {
    console.log("Failed to get the Page", error);
  }
}

export async function getDocuemnt(collection: CollectionSlug, slug: string){
 try {
  const res = await payload.find({
     collection: collection,
     where: {
         slug: {
           equals: slug,
         },
       },
   })
   return res.docs[0]
 } catch (error) {
  console.log("Failed to get the Docuement", error);
 }
};

/**
 * @param searchQuery query which tires to match with the blogs title
 * @returns
 */
export const getBlogsByQuery = async (searchQuery?: string) => {
  try {
    return await payload.find({
      collection: "blogs",
      where: searchQuery
        ? {
            title: {
              contains: searchQuery.toLowerCase(),
            },
          }
        : {},
      sort: "-createdAt",
    });
  } catch (error) {
    console.log("Failed to get blogs of query ", error);
  }
};
