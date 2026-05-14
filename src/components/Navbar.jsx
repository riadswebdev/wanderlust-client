import Image from "next/image";
import MobileMenu from "./MobileMenu";
import NavLink from "./NavLink";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { Button } from "@heroui/react";
import LogOutBtn from "./LogOutBtn";

const Navbar = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const Active = session?.user;

  return (
    <div className="w-full max-w-300 mx-auto  sticky z-50  top-1 mb-10">
      <nav className="relative flex backdrop-blur-2xl items-center justify-between p-2 md:p-4 md:mx-5 xl:mx-0 md:rounded-full">
        <div className="md:hidden ">
          <MobileMenu />
        </div>

        <ul className="  items-center gap-5 hidden md:flex p-">
          <li>
            <NavLink href="/">Home</NavLink>
          </li>
          <li>
            <NavLink href="/destination">Destinations</NavLink>
          </li>
          <li>
            <NavLink href="/my-books">My Books</NavLink>
          </li>
          <li>
            <NavLink href="/admin">Admin</NavLink>
          </li>
          <li>
            <NavLink href="/add-destination">AD</NavLink>
          </li>
        </ul>
        <div className="absolute md:relative right-5 top">
          <Image
            src={"/assets/Wanderlast.png"}
            alt="Description"
            width={100}
            height={100}
          />
        </div>
        <ul className=" items-center gap-5 hidden md:flex">
          <li>
            <NavLink href="/profile">Profile</NavLink>
          </li>
          {Active ?
            <>
              <li>
                <LogOutBtn />
              </li>
            </>
          : <>
              <li>
                <NavLink href="/login">Login</NavLink>
              </li>
              <li>
                <NavLink href="/signup">Sign Up</NavLink>
              </li>
            </>
          }
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
