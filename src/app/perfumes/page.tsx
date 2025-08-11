import { bestSellers, perfumes } from "@/assets/assets";
import { ListFilter, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ALLPerfumes = () => {
  return (
    <section className="">
      <div className="flex flex-col items-center py-20 gap-7">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl mb-2 font-bold text-nature font-header">
            Discover Our Collections
          </h1>
          <p className=" text-neutral-700">
            Explore our curated selection of luxury fragrances, each telling its
            own unique story
          </p>
        </div>
        <div className="flex items-center gap-2.5 w-80 lg:w-[630px] shadow px-4 hover:shadow-md border rounded-full border-neutral-300 ">
          <Search className=" text-neutral-400 " size={22} />
          <input
            type="text"
            placeholder="Search fragrances..."
            className="outline-none border-none text-sm w-full py-3 bg-transparent "
          />
        </div>
      </div>
      <section className="py-10 bg-white ">
        <main className="  flex gap-10 w-[95%] mx-auto ">
          {/*Filter  */}
          <div className=" w-1/5 p-4 shadow-md bg-white rounded-lg flex flex-col gap-5 ">
            <div className="flex items-center gap-2 py-2 border-b border-neutral-300 ">
              <ListFilter className=" text-nature " />
              <h3 className=" text-lg font-semibold font-header">Filters</h3>
            </div>
            <div className="flex flex-col gap-4 ">
              <h3 className="font-semibold font-header">Category</h3>
              <div className="grid grid-cols-2 gap-2">
                <button className=" py-2 px-5 bg-gray-100 rounded-lg ">
                  All
                </button>
                <button className=" py-2 px-5 bg-gray-100 rounded-lg ">
                  Male
                </button>
                <button className=" py-2 px-5 bg-gray-100 rounded-lg ">
                  Female
                </button>
                <button className=" py-2 px-5 bg-gray-100 rounded-lg ">
                  Unisex
                </button>
              </div>
            </div>
          </div>
          {/* perfumes cards */}
          <main className=" w-4/5 grid grid-cols-4 gap-4 ">
            {bestSellers.map((perfume, index) => (
              <Link
                href={`/perfumes/${perfume.title.replaceAll(" ", "")}`}
                key={index}
                className="flex shadow-md rounded-md flex-col"
              >
                <Image
                  alt=""
                  className="h-44 md:h-52 bg-gray-100  "
                  src={perfume.image}
                />
                <div className="flex flex-col gap-2 px-2 py-4">
                  <div className="flex flex-col ">
                    <h4 className=" text-nature uppercase text-lg font-semibold font-header ">
                      {perfume.brandName}
                    </h4>
                    <h2 className="font-medium text-sm ">{perfume.title} </h2>
                  </div>
                  <div className="flex justify-between mt-1.5 items-center">
                    <span className=" font-semibold text-nature text-sm ">
                      ${perfume.price}
                    </span>
                    <button className=" py-1.5 text-sm px-4 rounded-full bg-black cursor-pointer hover:opacity-80 text-white ">
                      Add to cart
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </main>
        </main>
      </section>
    </section>
  );
};

export default ALLPerfumes;
