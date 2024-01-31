"use client";

import { UserButton } from "@clerk/nextjs";

export const Navbar = () => {
  return (
    <div className="flex items-center gap-x-4 p-5 bg-green-400">
      <div className="hidden lg:flex lg:flex-1 bg-yellow-300">
        {/* TODO: Add search */}
        Search bar
      </div>

      {/* UserButton */}
      <div>
        <UserButton />
      </div>
    </div>
  );
};
