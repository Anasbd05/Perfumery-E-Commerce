import Image from "next/image";
import React from "react";
import menperfumes from "../assets/menperfumes.jpg";
import womenperfumes from "../assets/womenperfumes.jpg";
import Link from "next/link";

const Categories = () => {
  return (
    <section className="py-20 lg:w-11/12 mx-auto">
      <main className="flex items-center justify-center w-full gap-8">
        <div className="flex w-2/4 flex-col mb-4">
          <h2 className="font-medium text-neutral-800 text-sm">
            Perfume product
          </h2>
          <h1 className=" text-nature text-3xl font-semibold ">
            Perfume for everyone
          </h1>
        </div>
        <p
          className="text-neutral-800 mb-4
           text-sm w-2/4 font-medium "
        >
          Explorez nos catégories de parfum pour homme et pour femme, où chaque
          fragrance est sélectionnée pour son caractère unique.
        </p>
      </main>
      <main className="flex items-center justify-center w-full gap-8">
        <div className="flex w-2/4 flex-col">
          <main className="w-full flex flex-coL relative">
            <Image
              draggable={false}
              alt=""
              src={menperfumes}
              width={500}
              height={700}
              className=" w-full h-[350px] brightness-75  "
            />
            <h1 className="text-4xl absolute bottom-0 px-4 py-5 text-white font-serif font-medium mb-4">
              Men perfumes
            </h1>
            <Link
              href={"/"}
              className="absolute bottom-4   px-4 text-white text-sm font-header "
            >
              View perfumes
            </Link>
          </main>
        </div>
        <div className="flex w-2/4 flex-col items-center gap-2">
          <main className="w-full flex flex-coL relative">
            <Image
              draggable={false}
              alt=""
              src={womenperfumes}
              width={400}
              height={700}
              className=" w-full h-[350px]  brightness-75 "
            />
            <h1 className="text-4xl absolute bottom-0 px-4  py-5 text-white font-serif font-medium mb-4">
              Women perfumes
            </h1>
            <Link
              href={"/"}
              className="absolute bottom-4 px-4 text-white text-sm font-header "
            >
              View perfumes
            </Link>
          </main>
        </div>
      </main>
    </section>
  );
};

export default Categories;
