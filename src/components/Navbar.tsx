"use client";
import { Eclipse, Menu, ShoppingBag, Trash2, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useCart } from "react-use-cart";

const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // NEW: mobile menu state
  const { items, totalItems, updateItemQuantity, removeItem } = useCart();

  return (
    <>
      <nav className="flex items-center sticky z-50 backdrop-blur-md justify-between border-b py-4 px-4 lg:px-18 mt-2 mx-2 lg:mx-8 rounded-lg shadow-md">
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(true)}>
            <Menu size={25} className="hover:text-neutral-800" />
          </button>
        </div>

        {/* Desktop links */}
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

        {/* Logo */}
        <main className="flex items-center gap-1.5">
          <Eclipse size={25} />
          <span className="font-bold text-xl font-header text-nature ">
            ZoneDupes
          </span>
        </main>

        {/* Desktop right section */}
        <div className="hidden md:flex items-center gap-12">
          <Link
            href={"/#contact"}
            className=" py-2 px-5 bg-nature text-white hover:opacity-80 cursor-pointer rounded-md "
          >
            Contact
          </Link>
          <div
            onClick={() => setIsCartOpen(true)}
            className=" relative  cursor-pointer "
          >
            <ShoppingBag
              size={25}
              className="cursor-pointer hover:text-neutral-800"
            />
            <span className=" cursor-pointer bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs text-center absolute -top-1 -right-1 ">
              {totalItems}
            </span>
          </div>
        </div>

        {/* Mobile cart icon */}
        <div className="md:hidden">
          <button onClick={() => setIsCartOpen(true)}>
            <ShoppingBag
              size={25}
              className="cursor-pointer hover:text-neutral-800"
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu drawer */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex bg-black/40 md:hidden">
          <div className="w-64 bg-white shadow-lg p-6 py-10 space-y-6 relative">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-4 right-4"
            >
              <X size={20} />
            </button>
            <Link
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className="block font-semibold hover:text-neutral-800"
            >
              Home
            </Link>
            <Link
              href="#categories"
              onClick={() => setIsMenuOpen(false)}
              className="block font-semibold hover:text-neutral-800"
            >
              Collections
            </Link>
            <Link
              href="/#contact"
              onClick={() => setIsMenuOpen(false)}
              className=" py-2 px-4 bg-nature flex justify-center text-white rounded-md hover:opacity-80"
            >
              Contact
            </Link>
          </div>
        </div>
      )}

      {/* Cart drawer (unchanged) */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/40">
          <div
            className="relative w-screen max-w-sm bg-gray-100 px-4 py-6 sm:px-4 lg:px-6"
            aria-modal="true"
            role="dialog"
            tabIndex={-1}
          >
            <button
              onClick={() => setIsCartOpen(false)}
              className="absolute end-4 top-4 text-gray-600 transition hover:scale-110"
            >
              <span className="sr-only">Close cart</span>
              <X size={20} className=" cursor-pointer " />
            </button>
            <div className="mt-4 space-y-6">
              <ul className="space-y-4">
                {items.map((item) => (
                  <li
                    key={item.id}
                    className="flex items-start gap-4 border-t py-2 border-neutral-300"
                  >
                    <Image
                      src={item.image}
                      alt=""
                      height={25}
                      width={25}
                      className=" h-18 w-18  rounded-sm bg-gray-200"
                    />
                    <div className="flex-1">
                      <h3 className="text-sm text-gray-900">{item.title}</h3>
                      <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                        <div>
                          <dt className="inline">Size:</dt>
                          <dd className="inline font-medium mx-1 ">
                            {item.size}
                          </dd>
                        </div>
                      </dl>
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() =>
                            updateItemQuantity(
                              item.id,
                              (item.quantity ?? 0) - 1
                            )
                          }
                          className="px-2 py-0.5 bg-gray-200 rounded hover:bg-gray-300"
                        >
                          −
                        </button>
                        <span className="text-sm font-medium">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateItemQuantity(
                              item.id,
                              (item.quantity ?? 0) + 1
                            )
                          }
                          className="px-2 py-0.5 bg-gray-200 rounded hover:bg-gray-300"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <Trash2
                      onClick={() => removeItem(item.id)}
                      className=" text-red-500 hover:opacity-80 cursor-pointer "
                    />
                  </li>
                ))}
              </ul>
              <div className="space-y-4 text-center">
                <Link
                  href="/checkout"
                  onClick={() => setIsCartOpen(false)}
                  className="block rounded-sm bg-nature px-5 py-3 text-sm text-gray-100 transition hover:opacity-80"
                >
                  Checkout
                  <span> ({totalItems}) </span>
                </Link>
                <Link
                  href="/perfumes"
                  onClick={() => setIsCartOpen(false)}
                  className="inline-block text-sm text-gray-500 underline underline-offset-4 transition hover:text-gray-600"
                >
                  Continue shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
