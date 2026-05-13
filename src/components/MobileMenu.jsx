"use client";

import { ArrowRightFromSquare, PersonPencil } from "@gravity-ui/icons";
import { Avatar, Dropdown } from "@heroui/react";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { SiBookstack } from "react-icons/si";
import { CiPaperplane } from "react-icons/ci";
import { RiHomeHeartLine } from "react-icons/ri";
import { useRouter } from "next/navigation";
import { IoIosAddCircleOutline } from "react-icons/io";
import { Icon } from "@iconify/react";

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
                <Icon icon="flat-color-icons:home" className="size-5" />
              </div>
            </Dropdown.Item>

            <Dropdown.Item onPress={() => router.push("/profile")}>
              <div className="flex w-full  items-center justify-center gap-2 border  text-center p-2 rounded-sm mx-auto text-sm  text-[#6C696D]">
                <span>Profile</span>
                <Icon icon="marketeq:edit-user-6" className="size-5" />
              </div>
            </Dropdown.Item>
            <Dropdown.Item onPress={() => router.push("/admin")}>
              <div className="flex w-full  items-center justify-center gap-2 border  text-center p-2 rounded-sm mx-auto text-sm  text-[#6C696D]">
                <span>Admin</span>
                <Icon
                  icon="material-icon-theme:folder-admin-open"
                  className="size-5"
                />
              </div>
            </Dropdown.Item>

            <Dropdown.Item onPress={() => router.push("/my-books")}>
              <div className="flex w-full  items-center justify-center gap-2 border  text-center p-2 rounded-sm mx-auto text-sm  text-[#6C696D]">
                <span>My Books</span>
                <Icon icon="noto:books" className="size-5" />
              </div>
            </Dropdown.Item>

            <Dropdown.Item onPress={() => router.push("/destination")}>
              <div className="flex w-full  items-center justify-center gap-2 border  text-center p-2 rounded-sm mx-auto text-sm  text-[#6C696D]">
                <span>Destinations</span>
                <Icon
                  icon="streamline-flex-color:location-heart-pin-flat"
                  className="size-5"
                />
              </div>
            </Dropdown.Item>
            <Dropdown.Item onPress={() => router.push("/add-destination")}>
              <div className="flex w-full  items-center justify-center gap-2 border  text-center p-2 rounded-sm mx-auto text-sm  text-[#6C696D]">
                <span>Add Destination</span>
                <Icon icon="glyphs-poly:layer-plus" className="size-6" />
              </div>
            </Dropdown.Item>

            <Dropdown.Item onPress={() => router.push("/login")}>
              <div className="flex w-full  items-center justify-center gap-2 border  text-center p-2 rounded-sm mx-auto text-sm  text-[#6C696D]">
                <span>Login</span>
                <Icon
                  icon="streamline-ultimate-color:login-key"
                  className="size-5"
                />
              </div>
            </Dropdown.Item>

            <Dropdown.Item onPress={() => router.push("/signup")}>
              <span className="flex w-full  items-center justify-center gap-2  p-2    text-center py-3 bg-blue-600 text-white rounded-sm mx-auto">
                Sign Up
              </span>
            </Dropdown.Item>

            <Dropdown.Item
              onPress={() => router.push("/logout")}
              className="text-danger"
              color="danger"
            >
              <div className="flex w-full  items-center justify-center gap-2 border  text-center p-2 rounded-sm mx-auto text-sm  text-[#6C696D]">
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
