"use client";

import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const LogOutBtn = () => {
  const router = useRouter();

  const handleLogOutBtn = async () => {
    await authClient.signOut();

    toast.success("Logged out successfully");

    router.replace("/login");
    router.refresh();
  };

  return (
    <Button
      onPress={handleLogOutBtn}
      size="sm"
      variant="danger"
      className="rounded-md"
    >
      LogOut
    </Button>
  );
};

export default LogOutBtn;
