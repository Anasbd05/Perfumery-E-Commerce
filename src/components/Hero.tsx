import Image from "next/image";
import React from "react";
import nature from "../assets/nature.jpg";
import perfumehero from "../assets/perfumehero.jpg";

const Hero = () => {
  return (
    <section className=" h-screen  -mt-30 flex w-full">
      <main className="w-2/4 flex flex-col items-center relative">
        <Image
          draggable={false}
          alt=""
          src={perfumehero}
          width={500}
          height={700}
          className=" w-full h-[650px] "
        />
        <p className="text-[12px] uppercase text-center absolute leading-relaxed tracking-wider text-neutral-900 top-50 ">
          Products designed to ignite the senses with timeless elegance. <br />
          A curated collection of perfumes with sophisticated aromas and <br />
          minimalist aesthetics for modern connoisseurs.
        </p>
      </main>
      <main className="w-2/4 flex flex-col items-center relative">
        <Image
          draggable={false}
          alt=""
          src={nature}
          width={500}
          height={700}
          className=" w-full h-[650px] object-cover"
        />
        <h1 className="text-4xl absolute bottom-50 text-center text-white font-header font-medium leading-snug mb-4">
          HOME FRAGRANCE <br /> &PERSONAL PERFUMERY
        </h1>
        <p className="absolute bottom-10 text-neutral-200 text-center max-w-[300px] mb-6">
          Elevate your environment and self with scents that tell a story
        </p>
        <button className="bg-black absolute bottom-0 text-white px-10 cursor-pointer py-3 text-sm tracking-widest uppercase hover:opacity-80 transition">
          Go to shop
        </button>
      </main>
    </section>
  );
};

export default Hero;
