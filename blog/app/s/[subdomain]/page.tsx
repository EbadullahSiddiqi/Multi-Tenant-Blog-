import { db } from "@/db";
import { blogTable } from "@/db/schema";
import { clerkClient } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";

interface Params {
  subdomain: string;
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const { subdomain } = await params;
  // console.log(subdomain)

  const client = await clerkClient();
  const org = await client.organizations.getOrganization({ slug: subdomain });
  const orgId = org?.id;

  const blogs = await db
    .select()
    .from(blogTable)
    .where(eq(blogTable.orgId, orgId));

  return (
    <div>
      {blogs.map((blog, index) => (
        <div key={index} className="p-10">
          <h1 className="text-3xl font-bold">{blog.title}</h1>
          <p>{blog.body}</p>
        </div>
      ))}
    </div>
  );
}
