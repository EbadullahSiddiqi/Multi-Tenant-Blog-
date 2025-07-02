"use server";

import { db } from "@/db";
import { blogTable, CreateBlogType } from "@/db/schema";

export const createBlog = async (payload: CreateBlogType) => {
  const [result] = await db
    .insert(blogTable)
    .values(payload)
    .returning({ id: blogTable.id });
  return result.id; // we can't return the entire result as it may contain metadata, so we only return the id of the created blog
};
