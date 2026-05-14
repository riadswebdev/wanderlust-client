"use client";

import { ArrowRightFromSquare } from "@gravity-ui/icons";
import { Avatar, Dropdown } from "@heroui/react";
import { useRouter } from "next/navigation";
import { Icon } from "@iconify/react";
import { authClient } from "@/lib/auth-client";
import RoundedLoading from "./Loading";

const MobileMenu = () => {
  const router = useRouter();

  const { data: session, isPending } = authClient.useSession();
  const Active = session?.user;

  const handleLogOutBtn = async () => {
    await authClient.signOut();
    router.replace("/login");
  };

  // if (isPending) {
  //   return <RoundedLoading/>
  // }

  return (
    <div>
      <Dropdown>
        <Dropdown.Trigger>
          <Avatar>
            {isPending ?
              <RoundedLoading />
            : <Avatar.Image
                referrerPolicy="no-referrer"
                className="object-cover"
                alt={Active?.name || "user"}
                src={Active?.image}
              />
            }
            <Avatar.Fallback delayMs={600}>
              {Active?.name?.charAt(0) || (
                <Icon icon="tdesign:user-unknown" className="size-5" />
              )}
            </Avatar.Fallback>
          </Avatar>
        </Dropdown.Trigger>
        <Dropdown.Popover className="w-[60%]">
          <div className="px-3 pt-3 pb-1">
            <div className="flex items-center gap-2">
              <Avatar size="sm">
                {isPending ?
                  <RoundedLoading />
                : <Avatar.Image
                    referrerPolicy="no-referrer"
                    className="object-cover"
                    alt={Active?.name || "user"}
                    src={Active?.image}
                  />
                }
                <Avatar.Fallback delayMs={600}>
                  {Active?.name?.charAt(0) || (
                    <Icon icon="tdesign:user-unknown" className="size-5" />
                  )}
                </Avatar.Fallback>
              </Avatar>
              <div className="flex flex-col gap-0">
                <p className="text-sm leading-5 font-medium">
                  {Active?.name || "unknown"}
                </p>
                <p className="text-xs leading-none text-muted">
                  {Active?.email || "Unavailable Email "}
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

            {!Active ?
              <>
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
              </>
            : <>
                <Dropdown.Item
                  onPress={handleLogOutBtn}
                  className="text-danger"
                  color="danger"
                >
                  <div className="flex w-full  items-center justify-center gap-2 border  text-center p-2 rounded-sm mx-auto text-sm  text-[#6C696D]">
                    <span>Log Out</span>
                    <ArrowRightFromSquare className="size-3.5" />
                  </div>
                </Dropdown.Item>
              </>
            }
          </Dropdown.Menu>
        </Dropdown.Popover>
      </Dropdown>
    </div>
  );
};

export default MobileMenu;
