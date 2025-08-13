"use client";
import { Eclipse, ShoppingBag, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useCart } from "react-use-cart";

const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { items, totalItems, updateItemQuantity } = useCart();
  console.log(items);

  return (
    <>
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
            className="cursor-pointer hover:text-neutral-800"
            onClick={() => setIsCartOpen(true)}
          />
        </div>
      </nav>

      {/* Overlay */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/40">
          {/* Cart Drawer */}
          <div
            className="relative w-screen max-w-sm bg-white  px-4 py-6 sm:px-6 lg:px-8"
            aria-modal="true"
            role="dialog"
            tabIndex={-1}
          >
            {/* Close button */}
            <button
              onClick={() => setIsCartOpen(false)}
              className="absolute end-4 top-4 text-gray-600 transition hover:scale-110"
            >
              <span className="sr-only">Close cart</span>
              <X size={20} className=" cursor-pointer " />
            </button>

            {/* Cart Content */}
            <div className="mt-4 space-y-5 ">
              <ul className="space-y-4 ">
                {items.map((item) => (
                  <li key={item.id} className="flex items-center gap-4">
                    <Image
                      src={item.image}
                      alt=""
                      height={16}
                      width={16}
                      className=" h-16 w-16  rounded-sm bg-gray-200"
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
                        <div>
                          <dt className="inline">Price:</dt>
                          <dd className="inline font-medium mx-1 ">
                            ${item.price}
                          </dd>
                        </div>
                      </dl>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Buttons */}
              <div className="space-y-4 text-center">
                <Link
                  href="/checkout"
                  className="block rounded-sm bg-nature px-5 py-3 text-sm text-gray-100 transition hover:opacity-80"
                >
                  Checkout
                  <span> ({totalItems}) </span>
                </Link>
                <Link
                  href="/perfumes"
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
