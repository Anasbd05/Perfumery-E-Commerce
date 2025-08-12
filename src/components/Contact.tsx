import { contacts } from "@/assets/assets";
import React from "react";

const Contact = () => {
  return (
    <section id="contact" className=" py-14 px-4 sm:px-5 lg:w-11/12 mx-auto">
      <div className="flex gap-10 flex-col lg:flex-row items-start w-full">
        <main className=" w-full lg:w-4/6">
          <div className="flex flex-col mb-10 gap-2">
            <h2 className=" font-semibold uppercase text-2xl text-nature">
              Contact Us
            </h2>
            <p className="text-neutral-700 text-sm ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Distinctio voluptate similique laudantium illum temporibus, at
              consequatur ducimus voluptas nobis.{" "}
            </p>
          </div>
          <div className="flex flex-col gap-5 ">
            <input
              type="text"
              placeholder="Your Name"
              className=" py-1.5 px-3 border font-medium outline-none border-neutral-400 rounded-sm "
            />
            <input
              type="text"
              placeholder="Your Email"
              className=" py-1.5 px-3 border font-medium outline-none border-neutral-400 rounded-sm "
            />
            <textarea
              placeholder="Your Message"
              className=" h-40  py-1.5 px-3 border font-medium outline-none border-neutral-400 rounded-sm "
            />
            <button className="py-2 w-28 cursor-pointer hover:opacity-80 bg-nature text-white font-medium ">
              Submit
            </button>
          </div>
        </main>
        <main className=" w-full lg:w-2/6 p-6 lg:p-4 bg-black">
          <div className="flex flex-col gap-2">
            <h2 className=" font-semibold uppercase text-2xl text-white ">
              Zone Dupes
            </h2>
            <p className="text-sm text-neutral-100">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur quis unde quo.{" "}
            </p>
          </div>
          <div className="flex flex-col mt-10 gap-5">
            {contacts.map((contact, index) => (
              <ul key={index} className="flex ic text-white gap-2.5">
                {contact.icon}
                <li className="flex flex-col gap-0.5">
                  <h3 className="text-lg font-medium">{contact.title}</h3>
                  <p className="text-neutral-200 text-sm">{contact.des}</p>
                </li>
              </ul>
            ))}
          </div>
        </main>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40075.2763447644!2d-0.25874577832028756!3d51.113907000000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4875ee1e2fe75035%3A0xb75c22965b750c91!2sThe%20Fragrance%20Shop!5e0!3m2!1sen!2sma!4v1754589898732!5m2!1sen!2sma"
        height="450"
        className=" border-none mt-8 h-[450px] w-[350px] sm:w-[650px] mx-auto md:w-[700px] lg:w-11/12 "
        loading="lazy"
      />
    </section>
  );
};

export default Contact;
