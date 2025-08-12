import { bestSellers } from "@/assets/assets";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BestSeller = () => {
  return (
    <section className=" py-14 px-4 sm:px-5 lg:w-11/12 mx-auto">
      <div className="flex justify-between items-center">
        <h2 className=" font-semibold text-2xl">Best sellers</h2>
        <Link href={"/perfumes"} className="flex gap-0.5 items-center">
          <h5 className="text-sm">All products</h5>
          <ArrowRight className=" font-medium" size={20} />
        </Link>
      </div>
      <main className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-10 mt-6 ">
        {bestSellers.map((perfume, index) => (
          <Link
            href={`/perfumes/${perfume.title.replaceAll(" ", "")}`}
            className="flex flex-col p-2 hover:scale-105 cursor-pointer duration-500 "
            key={index}
          >
            <Image
              src={perfume.image}
              alt=""
              className="bg-gray-100 h-44 md:h-60 "
            />
            <div className="flex flex-col mt-3 gap-0.5">
              <h2 className=" font-semibold">{perfume.title}</h2>
              <h4 className="text-nature text-sm font-medium">
                ${perfume.price}
              </h4>
            </div>
          </Link>
        ))}
      </main>
    </section>
  );
};

export default BestSeller;
