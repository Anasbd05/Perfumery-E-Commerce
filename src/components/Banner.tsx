import React from "react";
import { services } from "../assets/assets";

const Banner = () => {
  return (
    <section className=" py-12 mt-16 flex items-center justify-center w-11/12 mx-auto ">
      <main className="grid grid-cols-4 gap-18">
        {services.map((service, index) => (
          <div key={index} className="flex gap-4 items-center">
            {service.icon}
            <div className="flex flex-col gap-[1px] ">
              <h2 className=" font-semibold text-lg text-nature">
                {" "}
                {service.title}
              </h2>
              <p className="text-xs text-neutral-700">{service.desc}</p>
            </div>
          </div>
        ))}
      </main>
    </section>
  );
};

export default Banner;
