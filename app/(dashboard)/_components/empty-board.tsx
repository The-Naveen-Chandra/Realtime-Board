"use client";

import Image from "next/image";
import { useMutation } from "convex/react";
import { useOrganization } from "@clerk/nextjs";

import { api } from "@/convex/_generated/api";
import { Button } from "@/components/ui/button";

export const EmptyBoard = () => {
  const { organization } = useOrganization();
  const create = useMutation(api.board.create);

  const onClick = () => {
    if (!organization) {
      return;
    }

    create({
      orgId: organization.id,
      title: "Untitled",
    });
  };

  return (
    <div className="h-[calc(100%-100px)] flex flex-col items-center justify-center">
      <Image
        src={"/empty-board.svg"}
        alt="Empty-search"
        height={110}
        width={110}
      />
      <h2 className="text-2xl font-semibold mt-6">Create your first board!</h2>
      <p className="text-muted-foreground text-sm mt-2">
        Start by creating a board for your organization.
      </p>
      <div className="mt-6">
        <Button onClick={onClick} size={"lg"}>
          Create board
        </Button>
      </div>
    </div>
  );
};
