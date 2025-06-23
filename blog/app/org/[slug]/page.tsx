"use client";

import Navbar from "@/app/components/Navbar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";

function OrganizationLandingPage(): React.JSX.Element {
  const [blogContent, setBlogContent] = useState("");
  const [blogTitle, setBlogTitle] = useState("");

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

        <Button className="">Create Blog</Button>
      </div>
    </main>
  );
}

export default OrganizationLandingPage;
