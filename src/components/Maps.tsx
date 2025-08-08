import React from "react";

const Maps = () => {
  return (
    <section className=" py-16 px-4 sm:px-5 lg:w-11/12 mx-auto">
      <div className="flex flex-col gap-1 mb-8 items-center w-full ">
        <h2 className="font-header text-nature text-4xl font-semibold">
          Our Store
        </h2>
        <p className="max-w-3xl text-center text-neutral-700">
          Discover our stores, combining quality and service. Enjoy a unique
          experience, personalized advice, and trendy products, close to home.
        </p>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40075.2763447644!2d-0.25874577832028756!3d51.113907000000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4875ee1e2fe75035%3A0xb75c22965b750c91!2sThe%20Fragrance%20Shop!5e0!3m2!1sen!2sma!4v1754589898732!5m2!1sen!2sma"
        width="900"
        height="450"
        className=" border-none h-[450px] w-[350px] mx-auto md:w-[700px] lg:w-[1000px] "
        loading="lazy"
      />
    </section>
  );
};

export default Maps;
