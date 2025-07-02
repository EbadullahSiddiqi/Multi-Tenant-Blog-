import {
  OrganizationSwitcher,
  UserButton,
  SignedIn,
  SignedOut,
  SignInButton,
} from "@clerk/nextjs";
import React, { JSX } from "react";

function Navbar(): JSX.Element {
  return (
    <nav className="p-4 flex items-center justify-between">
      <div>
        <h1 className="font-semibold text-2xl">Multi Blog</h1>
      </div>

      <div className="flex items-center justify-center gap-4">
        <OrganizationSwitcher
          afterSelectOrganizationUrl={"/org/:slug"}
          afterCreateOrganizationUrl={"/org/:slug"}
        />

        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <SignInButton />
        </SignedOut>
      </div>
    </nav>
  );
}

export default Navbar;
