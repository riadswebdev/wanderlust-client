"use client";

import { ArrowRightFromSquare, PersonPencil } from "@gravity-ui/icons";
import { Avatar, Button, Dropdown } from "@heroui/react";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { SiBookstack } from "react-icons/si";
import { CiPaperplane } from "react-icons/ci";
import { RiHomeHeartLine } from "react-icons/ri";
import { useRouter } from "next/navigation";
import { IoIosAddCircleOutline } from "react-icons/io";

const MobileMenu = () => {
  const router = useRouter();
  return (
    <Dropdown className="w-52">
      <Dropdown.Trigger>
        <Avatar>
          <Avatar.Image
            alt="Junior Garcia"
            src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/orange.jpg"
          />
          <Avatar.Fallback delayMs={600}>JD</Avatar.Fallback>
        </Avatar>
      </Dropdown.Trigger>
      <Dropdown.Popover>
        <div className="px-3 pt-3 pb-1">
          <div className="flex items-center gap-2">
            <Avatar size="sm">
              <Avatar.Image
                alt="Jane"
                src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/orange.jpg"
              />
              <Avatar.Fallback delayMs={1000}>JD</Avatar.Fallback>
            </Avatar>
            <div className="flex flex-col gap-0">
              <p className="text-sm leading-5 font-medium">Jane Doe</p>
              <p className="text-xs leading-none text-muted">
                jane@example.com
              </p>
            </div>
          </div>
        </div>
        <Dropdown.Menu aria-label="Navigation Menu">
          <Dropdown.Item onPress={() => router.push("/")}>
            <div className="flex w-full items-center justify-between gap-2">
              <span>Home</span>
              <RiHomeHeartLine />
            </div>
          </Dropdown.Item>

          <Dropdown.Item onPress={() => router.push("/profile")}>
            <div className="flex w-full items-center justify-between gap-2">
              <span>Profile</span>
              <PersonPencil />
            </div>
          </Dropdown.Item>
          <Dropdown.Item onPress={() => router.push("/admin")}>
            <div className="flex w-full items-center justify-between gap-2">
              <span>Admin</span>
              <MdOutlineAdminPanelSettings className="size-3.5 text-muted" />
            </div>
          </Dropdown.Item>

          <Dropdown.Item onPress={() => router.push("/my-books")}>
            <div className="flex w-full items-center justify-between gap-2">
              <span>My Books</span>
              <SiBookstack className="size-3.5 text-muted" />
            </div>
          </Dropdown.Item>

          <Dropdown.Item onPress={() => router.push("/destination")}>
            <div className="flex w-full items-center justify-between gap-2">
              <span>Destinations</span>
              <CiPaperplane className="size-3.5 text-muted" />
            </div>
          </Dropdown.Item>
          <Dropdown.Item onPress={() => router.push("/add-destination")}>
            <div className="flex w-full items-center justify-between gap-2">
              <span>Add Destination</span>
              <IoIosAddCircleOutline className="size-3.5 text-muted" />
            </div>
          </Dropdown.Item>

          <Dropdown.Item onPress={() => router.push("/login")}>
            <Button variant="flat" color="primary" className="w-full">
              Login
            </Button>
          </Dropdown.Item>

          <Dropdown.Item onPress={() => router.push("/signup")}>
            <Button variant="outline" className="w-full">
              Sign Up
            </Button>
          </Dropdown.Item>

          <Dropdown.Item
            onPress={() => router.push("/logout")}
            className="text-danger"
            color="danger"
          >
            <div className="flex w-full items-center justify-between gap-2">
              <span>Log Out</span>
              <ArrowRightFromSquare className="size-3.5" />
            </div>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown>
  );
};

export default MobileMenu;
