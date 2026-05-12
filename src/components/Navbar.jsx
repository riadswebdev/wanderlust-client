import Image from "next/image";
import MobileMenu from "./MobileMenu";
import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <div className=" pr-5 xl:pr-0 shadow sticky z-50 backdrop-blur-2xl top-0 mb-10">
      <nav className="relative flex items-center justify-between p-4 w-full max-w-300 mx-auto">
        <div className="md:hidden ">
          <MobileMenu />
        </div>

        <ul className="  items-center gap-5 hidden md:flex">
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
        <div className="absolute md:relative right-0 top">
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
          <li>
            <NavLink href="/login">Login</NavLink>
          </li>
          <li>
            <NavLink href="/signup">Sign Up</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
