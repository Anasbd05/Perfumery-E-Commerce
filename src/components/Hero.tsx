import Image from "next/image";
import React from "react";
import nature from "../assets/nature.jpg";
import perfumehero from "../assets/perfumehero.jpg";

const Hero = () => {
  return (
    <section className=" -mt-30 flex w-full">
      <main className="w-2/4 hidden lg:flex flex-col items-center relative">
        <Image
          draggable={false}
          alt=""
          src={perfumehero}
          width={500}
          height={700}
          className=" w-full lg:h-[650px] xl:h-[750px]  "
        />
        <p className="text-[12px] uppercase text-center absolute leading-relaxed tracking-wider text-neutral-900 top-50 ">
          Products designed to ignite the senses with timeless elegance. <br />
          A curated collection of perfumes with sophisticated aromas and <br />
          minimalist aesthetics for modern connoisseurs.
        </p>
      </main>
      <main className=" w-full lg:w-2/4  flex flex-col items-center relative">
        <Image
          draggable={false}
          alt=""
          src={nature}
          width={500}
          height={700}
          className=" w-full h-[800px] md:h-[900px]  lg:h-[650px] xl:h-[750px] object-cover"
        />
        <h1 className="text-3xl md:text-4xl absolute md:top-80 lg:bottom-52 bottom-70 text-center text-white font-header font-medium leading-snug mb-4">
          HOME FRAGRANCE <br /> &PERSONAL PERFUMERY
        </h1>
        <p className="absolute bottom-40 md:bottom-60 lg:bottom-30 text-neutral-200 text-center max-w-[300px] mb-6">
          Elevate your environment and self with scents that tell a story
        </p>
        <button className="bg-black absolute md:bottom-48 bottom-30 lg:bottom-20 text-white px-10 cursor-pointer py-3 text-sm tracking-widest uppercase hover:opacity-80 transition">
          Go to shop
        </button>
      </main>
    </section>
  );
};

export default Hero;
