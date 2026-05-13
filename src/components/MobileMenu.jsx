"use client";

import { ArrowRightFromSquare, PersonPencil } from "@gravity-ui/icons";
import { Avatar, Dropdown } from "@heroui/react";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { SiBookstack } from "react-icons/si";
import { CiPaperplane } from "react-icons/ci";
import { RiHomeHeartLine } from "react-icons/ri";
import { useRouter } from "next/navigation";
import { IoIosAddCircleOutline } from "react-icons/io";

const MobileMenu = () => {
  const router = useRouter();
  return (
    <div className="min-w-96">
      <Dropdown className="min-w-96">
        <Dropdown.Trigger>
          <Avatar>
            <Avatar.Image
              alt="Junior Garcia"
              src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/orange.jpg"
            />
            <Avatar.Fallback delayMs={600}>JD</Avatar.Fallback>
          </Avatar>
        </Dropdown.Trigger>
        <Dropdown.Popover className="w-[40%]">
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
              <div className="flex w-full  items-center justify-center gap-2 border  text-center p-2 rounded-sm mx-auto text-sm  text-[#6C696D]">
                <span>Home</span>
                <RiHomeHeartLine />
              </div>
            </Dropdown.Item>

            <Dropdown.Item onPress={() => router.push("/profile")}>
              <div className="flex w-full  items-center justify-center gap-2 border  text-center p-2 rounded-sm mx-auto text-sm  text-[#6C696D]">
                <span>Profile</span>
                <PersonPencil />
              </div>
            </Dropdown.Item>
            <Dropdown.Item onPress={() => router.push("/admin")}>
              <div className="flex w-full  items-center justify-center gap-2 border  text-center p-2 rounded-sm mx-auto text-sm  text-[#6C696D]">
                <span>Admin</span>
                <MdOutlineAdminPanelSettings className="size-3.5 text-muted" />
              </div>
            </Dropdown.Item>

            <Dropdown.Item onPress={() => router.push("/my-books")}>
              <div className="flex w-full  items-center justify-center gap-2 border  text-center p-2 rounded-sm mx-auto text-sm  text-[#6C696D]">
                <span>My Books</span>
                <SiBookstack className="size-3.5 text-muted" />
              </div>
            </Dropdown.Item>

            <Dropdown.Item onPress={() => router.push("/destination")}>
              <div className="flex w-full  items-center justify-center gap-2 border  text-center p-2 rounded-sm mx-auto text-sm  text-[#6C696D]">
                <span>Destinations</span>
                <CiPaperplane className="size-3.5 text-muted" />
              </div>
            </Dropdown.Item>
            <Dropdown.Item onPress={() => router.push("/add-destination")}>
              <div className="flex w-full  items-center justify-center gap-2 border  text-center p-2 rounded-sm mx-auto text-sm  text-[#6C696D]">
                <span>Add Destination</span>
                <IoIosAddCircleOutline className="size-3.5 text-muted" />
              </div>
            </Dropdown.Item>

            <Dropdown.Item onPress={() => router.push("/login")}>
              <span className=" mx-auto flex w-full items-center justify-center gap-2 border  text-center py-2  rounded-sm  text-sm  text-[#6C696D]">
                Login
              </span>
            </Dropdown.Item>

            <Dropdown.Item onPress={() => router.push("/signup")}>
              <span className="border w-full text-center py-3 bg-blue-600 text-white rounded-2xl mx-auto">
                Sign Up
              </span>
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
    </div>
  );
};

export default MobileMenu;
