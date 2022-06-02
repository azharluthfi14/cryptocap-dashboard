import React from "react";

const Hero = () => {
  return (
    <section className="flex w-full justify-center items-center">
      <div className="p-32 text-center">
        <h1 className="text-5xl py-1 font-black">
          Start and Build Your Crypto Portfolio Here
        </h1>
        <p className="font-light mt-8">
          Only at CryptoCap, you can build a good portfolio and learn best
          practices about cryptocurrency.
        </p>
        <button className="px-10 text-md py-3.5 text-white  rounded mt-12 bg-violet-500 hover:bg-violet-600">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;
