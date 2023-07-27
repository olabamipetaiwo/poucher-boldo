import React from "react";
import LogoIcon from "assets/svgs/logo.svg";
import Link from "next/link";
import { useCycle } from "framer-motion";
import Trigger from "assets/svgs/trigger.svg";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const [open, cycleOpen] = useCycle(false, true);

  const links = [
    {
      id: 1,
      title: "Product",
      links: "/product",
    },
    {
      id: 2,
      title: "Sercvices",
      links: "/services",
    },
    {
      id: 3,
      title: "About",
      links: "/about",
    },
  ];
  return (
    <>
      <nav className="nav ">
        <Link href="/">
          <figure className="cursor-pointer">
            <LogoIcon />
          </figure>
        </Link>

        <ul className="flex items-center">
          {links.map((_link) => {
            return (
              <li key={_link.id} className="mr-12">
                <Link
                  href="/check-in"
                  className="text-dark-blue hover:text-black font-sans text-base font-bold"
                >
                  {_link?.title}
                </Link>
              </li>
            );
          })}
          <li>
            <button className="btn btn-outline !py-2 !w-[128px]">Log In</button>
          </li>
        </ul>
      </nav>

      <nav className="flex md:hidden bg-white fit-x-bleed py-4">
        <div className="flex items-center justify-between w-full ">
          <Link passHref href="/">
            <figure className="flex items-center justify-center basis-[1/4] cursor-pointer">
              <LogoIcon />
            </figure>
          </Link>
          <button onClick={cycleOpen} className="cursor-pointer">
            <Trigger />
          </button>
        </div>
      </nav>

      {open && (
        <div className="navMobile">
          <MobileNav open={open} cycleOpen={cycleOpen} />
        </div>
      )}
    </>
  );
};

export default Navbar;
