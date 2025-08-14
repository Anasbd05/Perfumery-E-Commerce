"use client";
import { perfumes } from "@/assets/assets";
import { ListFilter, Search, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const ALLPerfumes = () => {
  const [perfumeSearch, setperfumeSearch] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [category, setCategory] = useState("All");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  // Close filter drawer when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (
        mobileFiltersOpen &&
        e.target.closest(".mobile-filter-panel") === null &&
        e.target.closest(".filter-btn") === null
      ) {
        setMobileFiltersOpen(false);
      }
    };
    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, [mobileFiltersOpen]);

  // Filtering perfumes
  const filteredPerfumes = perfumes.filter((item) => {
    const matchescategory = item.genre.toLowerCase() === "male";

    const matchesSearch =
      item.title.toLowerCase().includes(perfumeSearch.toLowerCase()) ||
      item.brandName.toLowerCase().includes(perfumeSearch.toLowerCase());

    const matchesPrice =
      (minPrice === "" || item.price >= Number(minPrice)) &&
      (maxPrice === "" || item.price <= Number(maxPrice));

    return matchescategory && matchesSearch && matchesPrice;
  });

  const FilterContent = () => (
    <div className="flex flex-col gap-5 p-4">
      {/* Filters header */}
      <div className="flex items-center justify-between border-b border-neutral-300 pb-2">
        <div className="flex items-center gap-2">
          <ListFilter className=" text-nature" />
          <h3 className=" text-lg font-semibold font-header">Filters</h3>
        </div>
        <X
          className="cursor-pointer xl:hidden"
          onClick={() => setMobileFiltersOpen(false)}
        />
      </div>

      {/* Price range filter */}
      <div className="flex flex-col gap-4">
        <h3 className="font-semibold font-header">Price Range</h3>
        <div className="flex items-center gap-2">
          <input
            type="number"
            placeholder="Min"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            className="w-1/2 p-2 border border-gray-300 rounded-lg"
          />
          <span>-</span>
          <input
            type="number"
            placeholder="Max"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className="w-1/2 p-2 border border-gray-300 rounded-lg"
          />
        </div>
        <button
          onClick={() => {
            setMinPrice(minPrice);
            setMaxPrice(maxPrice);
          }}
          className="bg-nature text-white py-2 px-4 rounded-lg hover:bg-nature-dark"
        >
          Apply
        </button>
      </div>
    </div>
  );

  return (
    <section>
      <div className="flex flex-col px-4 sm:px-5 items-center py-20 gap-7">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl mb-2 font-bold text-nature font-header">
            Discover Our Collections
          </h1>
          <p className=" text-neutral-700">
            Explore our curated selection of luxury fragrances, each telling its
            own unique story
          </p>
        </div>

        {/* Search + Filter Button (mobile) */}
        <div className="flex items-center gap-2.5 w-80 lg:w-[630px]">
          <div className="flex items-center gap-2.5 shadow px-4 hover:shadow-md border rounded-full border-neutral-300 w-full">
            <Search className=" text-neutral-400" size={22} />
            <input
              value={perfumeSearch}
              onChange={(e) => setperfumeSearch(e.target.value)}
              type="text"
              placeholder="Search fragrances..."
              className="outline-none border-none text-sm w-full py-3 bg-transparent"
            />
          </div>
          <button
            className="filter-btn xl:hidden flex items-center gap-1 bg-nature text-white px-3 py-2 rounded-lg"
            onClick={() => setMobileFiltersOpen(true)}
          >
            <ListFilter size={20} />
            Filter
          </button>
        </div>
      </div>

      <section className="py-10 bg-white">
        <main className="flex items-start gap-10 w-[95%] mx-auto">
          {/* Filter sidebar for desktop */}
          <div className="xl:w-1/5 p-4 shadow-md h-96 border border-neutral-100 bg-white rounded-lg hidden xl:flex flex-col gap-5">
            <FilterContent />
          </div>

          {/* Perfumes cards */}
          <main className="xl:w-4/5 w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredPerfumes.map((perfume, index) => (
              <Link
                href={`/perfumes/${perfume.title.replaceAll(" ", "")}`}
                key={index}
                className="flex shadow-md rounded-md flex-col"
              >
                <Image
                  alt=""
                  className="h-44 md:h-52 bg-gray-100"
                  src={perfume.image}
                />
                <div className="flex flex-col gap-2 px-2 py-4">
                  <div className="flex flex-col">
                    <h4 className=" text-nature uppercase text-lg font-semibold font-header">
                      {perfume.brandName}
                    </h4>
                    <h2 className="font-medium text-sm">{perfume.title}</h2>
                  </div>
                  <span className="mt-1.5 font-semibold text-nature text-sm">
                    ${perfume.price}
                  </span>
                </div>
              </Link>
            ))}
          </main>
        </main>
      </section>

      {/* Mobile filter drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-50 mobile-filter-panel ${
          mobileFiltersOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <FilterContent />
      </div>
    </section>
  );
};

export default ALLPerfumes;
