"use client";

import { Button, Popover } from "@heroui/react";
import { RiDeleteBin6Line } from "react-icons/ri";

export function ProverDeleteBtn() {
  return (
    <div className="flex items-center gap-4">
      <Popover>
        <Button variant="ghost" className="border rounded-md text-[#EF4444]">
          <RiDeleteBin6Line /> Delete
        </Button>
        <Popover.Content
          className="max-w-64"
          render={(props) => <div {...props} data-custom="foo" />}
        >
          <Popover.Dialog>
            <Popover.Heading>Only Admin Allowed</Popover.Heading>
            <p>⚠️ You can't delete any destination </p>
          </Popover.Dialog>
        </Popover.Content>
      </Popover>
    </div>
  );
}
