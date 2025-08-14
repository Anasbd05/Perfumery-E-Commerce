"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MoveRight,
  ArrowBigDownDash,
  ArrowBigUpDash,
  MoveLeft,
} from "lucide-react";
import { perfumes } from "@/assets/assets";
import { useCart } from "react-use-cart";

const PerfumeDetails = ({ params }: { params: Promise<{ title: string }> }) => {
  const { title } = React.use(params);

  const selectedPerfume = perfumes.find(
    (perfume) => perfume.title.replaceAll(" ", "") === title
  );

  const [view, setView] = useState<"details" | "brand">("details");
  const [showAllNotes, setShowAllNotes] = useState(false);
  const [selectedSize, setSelectedSize] = useState("");
  const [error, setError] = useState("");

  const similarproduct = perfumes.filter(
    (perfume) =>
      perfume.brandName.replaceAll(" ", "") === selectedPerfume?.brandName ||
      perfume.genre === selectedPerfume?.genre
  );

  const { addItem, inCart, items, updateItemQuantity } = useCart();
  console.log(items);

  if (!selectedPerfume) {
    return (
      <section className="py-14 w-full text-center">
        <h2 className="text-2xl font-bold">Perfume not found</h2>
      </section>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      setError("Please select a size before adding to cart.");
      return;
    }
    setError("");
    addItem({
      id: `${selectedPerfume.title}-${selectedSize}`,
      price: selectedPerfume.price,
      title: selectedPerfume.title,
      image: selectedPerfume.image,
      size: selectedSize,
    });
  };

  return (
    <section className="py-14 w-full">
      <main className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 w-[95%] mx-auto">
        {/* First section */}
        <section className="flex flex-col">
          <div>
            <h1 className="text-4xl font-bold mb-2 font-header text-nature">
              {selectedPerfume.brandName}
            </h1>
            <h3 className="font-medium">{selectedPerfume.title}</h3>
          </div>

          <div className="flex items-center gap-3 mt-10">
            {["30 ml", "50 ml", "100 ml"].map((size, idx) => (
              <button
                onClick={() => {
                  setSelectedSize(size);
                  setError("");
                }}
                key={idx}
                className={` ${
                  size === selectedSize
                    ? " py-2 px-4 bg-black text-white rounded-sm "
                    : "py-2 px-4 border border-neutral-300 shadow cursor-pointer rounded-sm"
                }`}
              >
                {size}
              </button>
            ))}
          </div>

          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

          <p className="text-2xl font-bold mt-8 mb-6">
            ${selectedPerfume.price}
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

          {inCart(`${selectedPerfume.title}-${selectedSize}`) ? (
            items
              .filter(
                (item) => item.id === `${selectedPerfume.title}-${selectedSize}`
              )
              .map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-6 border w-full border-black bg-white py-2 mt-5 justify-center "
                >
                  <button
                    onClick={() =>
                      updateItemQuantity(item.id, (item.quantity ?? 0) - 1)
                    }
                    className="px-2 py-1 bg-gray-200 rounded w-2/5 hover:bg-gray-300"
                  >
                    −
                  </button>
                  <span className="text-sm font-medium ">{item.quantity}</span>
                  <button
                    onClick={() =>
                      updateItemQuantity(item.id, (item.quantity ?? 0) + 1)
                    }
                    className="px-2 py-1 bg-gray-200 rounded w-2/5 hover:bg-gray-300"
                  >
                    +
                  </button>
                </div>
              ))
          ) : (
            <button
              className="py-2 mt-5 bg-nature text-white hover:opacity-80"
              onClick={handleAddToCart}
            >
              Add to cart
            </button>
          )}
        </section>

        {/* Second section */}
        <section>
          <Image
            alt={selectedPerfume.title}
            src={selectedPerfume.image}
            width={500}
            height={500}
            className="object-cover"
          />
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
                    {selectedPerfume.characteristics.slice(0, 2).join(", ")}
                  </li>
                </ul>
                <ul className="flex w-full items-center justify-between">
                  <span className="text-neutral-700">Perfumer</span>
                  <li className="font-semibold">{selectedPerfume.perfumer}</li>
                </ul>
                <ul className="flex w-full items-center justify-between">
                  <span className="text-neutral-700">Release date</span>
                  <li className="font-semibold">
                    {selectedPerfume.releaseDate}
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-1.5">
                <h3 className="mb-1 font-bold text-nature">Notes</h3>
                {(showAllNotes
                  ? selectedPerfume.notes
                  : selectedPerfume.notes.slice(0, 5)
                ).map((note, index) => (
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
                        <span>View less</span> <ArrowBigUpDash size={18} />
                      </div>
                    ) : (
                      <div className="flex gap-1 items-center">
                        <span>View all notes</span>{" "}
                        <ArrowBigDownDash size={18} />
                      </div>
                    )}
                  </span>
                </div>
              </div>
            </main>
          ) : (
            <p className="text-lg font-medium">{selectedPerfume.aboutBrand}</p>
          )}
        </section>
      </main>

      {/* similar products */}
      <main className=" flex flex-col lg:flex-row w-[95%] mx-auto gap-8 items-start mt-16 ">
        <div className=" lg:w-[30%] flex flex-col gap-6 ">
          <h2 className=" text-3xl mb-4 font-semibold font-header ">
            Similar products
          </h2>
        </div>
        <main className=" w-full lg:w-[70%] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
          {similarproduct.slice(0, 4).map((perfume, index) => (
            <Link
              href={`/perfumes/${perfume.title.replaceAll(" ", "")}`}
              className="flex flex-col p-2 hover:scale-105 cursor-pointer duration-500 "
              key={index}
            >
              <Image
                src={perfume.image}
                alt={perfume.title}
                width={176}
                height={176}
                className="bg-gray-100 h-40 md:h-44 object-cover"
              />
              <h2 className=" font-semibold mt-2">{perfume.title}</h2>
            </Link>
          ))}
        </main>
      </main>
    </section>
  );
};

export default PerfumeDetails;
