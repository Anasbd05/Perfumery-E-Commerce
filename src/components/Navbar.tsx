import { Eclipse, ShoppingBag } from "lucide-react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center sticky z-50 backdrop-blur-md justify-between border-b py-4 px-18 mt-2 mx-2 lg:mx-8 rounded-lg shadow-md">
      <div className="hidden md:flex gap-12 items-center">
        <Link
          className="font-semibold cursor-pointer hover:text-neutral-800 "
          href={"/"}
        >
          Home
        </Link>
        <Link
          className="font-semibold cursor-pointer hover:text-neutral-800 "
          href={"/collections"}
        >
          Collections
        </Link>
      </div>
      <main className="flex items-center gap-1.5">
        <Eclipse size={25} />
        <span className="font-bold text-xl font-header text-nature ">
          ZoneDupes
        </span>
      </main>
      <div className="hidden md:flex items-center gap-12">
        <Link
          href={"#contact"}
          className=" py-2 px-5 bg-nature text-white hover:opacity-80 cursor-pointer rounded-md "
        >
          Contact
        </Link>
        <ShoppingBag
          size={25}
          className=" cursor-pointer hover:text-neutral-800  "
        />
      </div>
    </nav>
  );
};

export default Navbar;
