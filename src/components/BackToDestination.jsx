"use client";

import { Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import { GoArrowLeft } from "react-icons/go";

const BackToDestination = () => {
  const router = useRouter();
  return (
    <Button
      onClick={() => router.back()}
      variant="ghost"
      className="border rounded-md  text-[#6C696D] font-normal py-2"
    >
      <GoArrowLeft /> Back to Destinations
    </Button>
  );
};

export default BackToDestination;
