import { Eclipse, Search, ShoppingBag } from "lucide-react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center sticky z-50 backdrop-blur-md justify-between border-b py-4 px-18 mt-2 mx-8 rounded-lg shadow-md">
      <div className="flex gap-12 items-center">
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
        <span className="font-bold text-xl font-header ">ZoneDupes</span>
      </main>
      <div className="flex items-center gap-12">
        <div className="flex gap-2.5 cursor-pointer hover:bg-neutral-100 py-2 px-4 rounded-md ">
          <Search size={25} />
          <span className="font-medium ">Search</span>
        </div>
        <ShoppingBag
          size={25}
          className=" cursor-pointer hover:text-neutral-800  "
        />
      </div>
    </nav>
  );
};

export default Navbar;
