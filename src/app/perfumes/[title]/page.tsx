import { bestSellers } from "@/assets/assets";
import { MoveRight } from "lucide-react";
import { ArrowBigDownDash } from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const PerfumeDetails = ({ params }: { params: Promise<{ title: string }> }) => {
  const { title } = React.use(params);

  const selectedperfume = bestSellers.find(
    (perfume) => perfume.title.replaceAll(" ", "") === title
  );

  return (
    <section className=" py-14 ">
      <main className=" grid grid-cols-3 gap-10 w-[95%] mx-auto ">
        {/* first section */}
        <section className="flex flex-col">
          <div>
            <h1 className="text-4xl font-bold mb-2 font-header text-nature ">
              {selectedperfume?.brandName}
            </h1>
            <h3 className=" font-medium ">{selectedperfume?.title}</h3>
          </div>
          <div className="flex items-center gap-3 mt-10 ">
            <button className=" py-2 px-4 bg-black text-white rounded-sm ">
              30 ml
            </button>
            <button className=" py-2 px-4 bg-black text-white rounded-sm ">
              50 ml
            </button>
            <button className=" py-2 px-4 bg-black text-white rounded-sm ">
              100 ml
            </button>
          </div>
          <p className=" text-2xl font-bold mt-8 mb-6">
            ${selectedperfume?.price}
          </p>

          <div className="flex flex-col gap-3">
            <ul className="flex w-full items-center justify-between">
              <li className=" font-semibold ">pick-up point</li>
              <span className="text-neutral-700">between 24h-48h</span>
            </ul>
            <ul className="flex w-full items-center justify-between">
              <li className=" font-semibold ">Courier delivery</li>
              <span className="text-neutral-700">Tomorrow</span>
            </ul>
            <Link
              href={"/"}
              className="flex w-full items-center hover:opacity-70 justify-between"
            >
              <p className=" font-semibold  ">More about delivery</p>
              <MoveRight className=" text-neutral-700" />
            </Link>
          </div>
          <button className="py-2 mt-5 bg-nature text-white hover:opacity-80 ">
            Add to cart
          </button>
        </section>

        {/* second section */}
        <section>
          <Image alt="" src={selectedperfume?.image} />
          <div className=" items-center justify-center flex gap-4 ">
            <Image
              alt=""
              src={selectedperfume?.image}
              className=" opacity-50 h-14 w-14"
            />
            <Image
              alt=""
              src={selectedperfume?.image}
              className=" h-14 border border-neutral-800 rounded-md  w-14"
            />
            <Image
              alt=""
              src={selectedperfume?.image}
              className=" opacity-50 h-14 w-14"
            />
          </div>
        </section>
        {/* third section */}
        <section>
          <div className="flex mb-8">
            <button className="py-2 px-4 border font-medium border-neutral-300 rounded-r-none rounded-md ">
              Details
            </button>
            <button className="py-2 px-4 border text-neutral-500 font-medium border-neutral-300 ">
              About brand
            </button>
            <button className="py-2 px-4 border text-neutral-500 font-medium rounded-l-none border-neutral-300 rounded-md ">
              Delivery
            </button>
          </div>
          <main className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <h3 className=" mb-1 font-bold text-nature ">Characteristics</h3>
              <ul className="flex w-full items-center justify-between">
                <span className="text-neutral-700">fragrances </span>
                <li className=" font-semibold flex gap-2 ">
                  {selectedperfume?.characteristics
                    .slice(0, 2)
                    .map((frag, index) => (
                      <span key={index}>{frag}</span>
                    ))}
                </li>
              </ul>
              <ul className="flex w-full items-center justify-between">
                <span className="text-neutral-700">perfumer</span>
                <li className=" font-semibold ">
                  {selectedperfume?.perfumer}{" "}
                </li>
              </ul>
              <ul className="flex w-full items-center justify-between">
                <span className="text-neutral-700">release date</span>
                <li className=" font-semibold ">
                  {selectedperfume?.releaseDate}{" "}
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-1.5">
              <h3 className=" mb-1 font-bold text-nature">Notes</h3>
              {selectedperfume?.notes.splice(0, 5).map((note, index) => (
                <div key={index} className="w-full flex items-center gap-10 ">
                  <p className="text-medium">{note.name}</p>
                  <div className="w-full bg-gray-200 rounded-full h-1">
                    <div
                      className="bg-nature h-1 rounded-full"
                      style={{ width: note.percent }}
                    ></div>
                  </div>
                </div>
              ))}
              <div className="flex mt-2 cursor-pointer hover:opacity-70  items-center gap-2">
                <span className=" text-sm font-semibold ">View all notes</span>
                <ArrowBigDownDash className="" size={18} />
              </div>
            </div>
          </main>
        </section>
      </main>
    </section>
  );
};

export default PerfumeDetails;
