"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MoveRight, ArrowBigDownDash, ArrowBigUpDash } from "lucide-react";
import { perfumes } from "@/assets/assets";

const PerfumeDetails = ({ params }: { params: Promise<{ title: string }> }) => {
  const { title } = React.use(params);

  const selectedPerfume = perfumes.find(
    (perfume) => perfume.title.replaceAll(" ", "") === title
  );

  const [view, setView] = useState<"details" | "brand">("details");
  const [showAllNotes, setShowAllNotes] = useState(false);
  const [selectedSize, setSelectedSize] = useState("");

  return (
    <section className="py-14">
      <main className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 w-[95%] mx-auto">
        {/* First section */}
        <section className="flex flex-col">
          <div>
            <h1 className="text-4xl font-bold mb-2 font-header text-nature">
              {selectedPerfume?.brandName}
            </h1>
            <h3 className="font-medium">{selectedPerfume?.title}</h3>
          </div>

          <div className="flex items-center gap-3 mt-10">
            {["30 ml", "50 ml", "100 ml"].map((size, idx) => (
              <button
                onClick={() => setSelectedSize(size)}
                key={idx}
                className={` ${
                  size === selectedSize
                    ? " py-2 px-4 bg-black text-white  rounded-sm "
                    : "py-2 px-4 border border-neutral-300 shadow cursor-pointer  rounded-sm"
                }`}
              >
                {size}
              </button>
            ))}
          </div>

          <p className="text-2xl font-bold mt-8 mb-6">
            ${selectedPerfume?.price}
          </p>

          <div className="flex flex-col gap-3">
            <ul className="flex w-full items-center justify-between">
              <li className="font-semibold">Pick-up point</li>
              <span className="text-neutral-700">Between 24h-48h</span>
            </ul>
            <ul className="flex w-full items-center justify-between">
              <li className="font-semibold">Courier delivery</li>
              <span className="text-neutral-700">Tomorrow</span>
            </ul>
            <Link
              href="/"
              className="flex w-full items-center hover:opacity-70 justify-between"
            >
              <p className="font-semibold">More about delivery</p>
              <MoveRight className="text-neutral-700" />
            </Link>
          </div>

          <button className="py-2 mt-5 bg-nature text-white hover:opacity-80">
            Add to cart
          </button>
        </section>

        {/* Second section */}
        <section>
          <Image alt="" src={selectedPerfume?.image || ""} />
          <div className="items-center justify-center flex gap-4 mt-4">
            {[0, 1, 2].map((i) => (
              <Image
                key={i}
                alt=""
                src={selectedPerfume?.image || ""}
                className={`h-14 w-14 ${
                  i === 1
                    ? "border border-neutral-800 rounded-md"
                    : "opacity-50"
                }`}
              />
            ))}
          </div>
        </section>

        {/* Third section */}
        <section>
          <div className="flex mb-8">
            <button
              onClick={() => setView("details")}
              className={`${
                view === "details"
                  ? " font-medium py-2 px-4 border rounded-r-none rounded-md border-neutral-300"
                  : "text-neutral-500 py-2 px-4 cursor-pointer border rounded-r-none rounded-md border-neutral-300 "
              }`}
            >
              Details
            </button>
            <button
              onClick={() => setView("brand")}
              className={`${
                view === "brand"
                  ? " font-medium py-2 px-4 border rounded-l-none rounded-md border-neutral-300"
                  : "text-neutral-500 py-2 px-4 cursor-pointer border rounded-l-none rounded-md border-neutral-300"
              }`}
            >
              About brand
            </button>
          </div>

          {view === "details" ? (
            <main className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <h3 className="mb-1 font-bold text-nature">Characteristics</h3>
                <ul className="flex w-full items-center justify-between">
                  <span className="text-neutral-700">Fragrances</span>
                  <li className="font-semibold capitalize">
                    {selectedPerfume?.characteristics.slice(0, 2).join(", ")}
                  </li>
                </ul>
                <ul className="flex w-full items-center justify-between">
                  <span className="text-neutral-700">Perfumer</span>
                  <li className="font-semibold">{selectedPerfume?.perfumer}</li>
                </ul>
                <ul className="flex w-full items-center justify-between">
                  <span className="text-neutral-700">Release date</span>
                  <li className="font-semibold">
                    {selectedPerfume?.releaseDate}
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-1.5">
                <h3 className="mb-1 font-bold text-nature">Notes</h3>
                {(showAllNotes
                  ? selectedPerfume?.notes
                  : selectedPerfume?.notes.slice(0, 5)
                )?.map((note, index) => (
                  <div key={index} className="w-full flex items-center gap-10">
                    <p className="text-medium text-neutral-700 w-2/4">
                      {note.name}
                    </p>
                    <div className="w-2/4">
                      <div className="w-full bg-gray-200 rounded-full h-1">
                        <div
                          className="bg-nature h-1 rounded-full"
                          style={{ width: note.percent }}
                        />
                      </div>
                    </div>
                  </div>
                ))}

                <div
                  className="flex mt-2 cursor-pointer hover:opacity-70 items-center gap-2"
                  onClick={() => setShowAllNotes((prev) => !prev)}
                >
                  <span className="text-sm font-semibold">
                    {showAllNotes ? (
                      <div className="flex gap-1 items-center">
                        {" "}
                        <span>View less</span> <ArrowBigUpDash size={18} />{" "}
                      </div>
                    ) : (
                      <div className="flex gap-1 items-center">
                        {" "}
                        <span>View all notes</span>{" "}
                        <ArrowBigDownDash size={18} />{" "}
                      </div>
                    )}
                  </span>
                </div>
              </div>
            </main>
          ) : (
            <p className="text-lg font-medium">{selectedPerfume?.aboutBrand}</p>
          )}
        </section>
      </main>
    </section>
  );
};

export default PerfumeDetails;
