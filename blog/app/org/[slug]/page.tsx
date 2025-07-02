"use client";

import Navbar from "@/app/components/Navbar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { createBlog } from "./action";
import { useOrganization } from "@clerk/nextjs";

function OrganizationLandingPage(): React.JSX.Element {
  const [blogContent, setBlogContent] = useState("");
  const [blogTitle, setBlogTitle] = useState("");
  const selectedOrg = useOrganization();

  console.log({ selectedOrg });

  async function handleCreateBlog() {
    if (!selectedOrg.organization?.id) return;
    await createBlog({
      title: blogTitle,
      body: blogContent,
      orgId: selectedOrg.organization?.id, // Replace with actual org ID logic
    });
  }

  return (
    <main>
      <Navbar />
      <h3>Organization Landing Page</h3>
      <div className="p-10 flex flex-col items-center justify-center gap-4">
        <Input
          value={blogTitle}
          onChange={(e) => {
            setBlogTitle(e.target.value);
          }}
        />

        <Textarea
          value={blogContent}
          onChange={(e) => {
            setBlogContent(e.target.value);
          }}
        />

        <Button onClick={handleCreateBlog} className="">Create Blog</Button>
      </div>
    </main>
  );
}

export default OrganizationLandingPage;
