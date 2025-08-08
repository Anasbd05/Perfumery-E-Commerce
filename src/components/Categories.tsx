import Image from "next/image";
import React from "react";
import menperfumes from "../assets/menperfumes.jpg";
import womenperfumes from "../assets/womenperfumes.jpg";
import Link from "next/link";

const Categories = () => {
  return (
    <section className=" py-14 px-4 sm:px-5 lg:w-11/12 mx-auto">
      <main className="flex flex-col lg:flex-row items-center justify-center w-full gap-x-8 gap-y-2">
        <div className="flex w-full lg:w-2/4 flex-col mb-4">
          <h2 className="font-medium text-neutral-800 text-sm">
            Perfume product
          </h2>
          <h1 className=" text-nature text-3xl font-semibold ">
            Perfume for everyone
          </h1>
        </div>
        <p
          className="text-neutral-800 mb-4
           text-sm  w-full lg:w-2/4 font-medium "
        >
          Explore our men&apos;s and women&apos;s fragrance categories, where
          each fragrance is selected for its unique character.
        </p>
      </main>
      <main className="flex flex-col lg:flex-row items-center justify-center w-full gap-8">
        <div className="flex w-full lg:w-2/4 flex-col">
          <main className="w-full flex flex-coL relative">
            <Image
              draggable={false}
              alt=""
              src={menperfumes}
              width={500}
              height={700}
              className=" w-full h-80 lg:h-[350px] brightness-75  "
            />
            <div className="flex flex-col gap-0.5 absolute bottom-0 px-4  py-5 ">
              <h1 className="text-4xl text-white font-serif font-medium">
                Men perfumes
              </h1>
              <Link href={"/"} className="text-white text-sm font-header ">
                View perfumes
              </Link>
            </div>
          </main>
        </div>
        <div className="flex w-full lg:w-2/4 flex-col items-center gap-2">
          <main className="w-full flex flex-coL relative">
            <Image
              draggable={false}
              alt=""
              src={womenperfumes}
              width={400}
              height={700}
              className=" w-full h-[350px]  brightness-75 "
            />
            <div className="flex flex-col gap-0.5 absolute bottom-0 px-4  py-5 ">
              <h1 className="text-4xl text-white font-serif font-medium">
                Women perfumes
              </h1>
              <Link href={"/"} className="text-white text-sm font-header ">
                View perfumes
              </Link>
            </div>
          </main>
        </div>
      </main>
    </section>
  );
};

export default Categories;
