import React from "react";
import Image from "next/image";

const Sponsors = () => {
  return (
    <div className="w-full aspect-[1728/2957] text-center text-white p-8 space-y-12 bg-[url('/svg/SponsorshipBackground.svg')] bg-cover bg-center">
      <h1 className="text-[15vw] sm:text-[7vw] font-bold font-sans mb-[1rem] tracking-wide">
        Sponsors
      </h1>
      {/* <h2 className="text-[1.5rem] text-gray-300 tracking-widest">
        Interested in becoming a sponsor?
      </h2> */}

      <section className="mt-[8%]">
        <h2 className="text-[2rem] sm:text-[4rem] font-semibold ">
          Blaze Sponsors
        </h2>
        <div className="mx-auto w-fit max-w-[50rem] py-[1rem] sm:p-[4rem] flex justify-center flex-wrap bg-[radial-gradient(70%_55%_at_center,_rgba(255,255,255,0.5)_0%,_transparent_80%)]">
          <div className="w-[25vw] sm:w-[15vw] h-fit aspect-square bg-white rounded-md sm:rounded-3xl m-2" />
          <div className="w-[25vw] sm:w-[15vw] h-fit aspect-square bg-white rounded-md sm:rounded-3xl m-2" />
        </div>
      </section>

      <section className="mt-[6%]">
        <h2 className="text-[1.8rem] sm:text-[2.5rem] font-semibold">
          Flame Sponsors
        </h2>
        <div className="mx-auto w-fit max-w-[50rem] py-[1rem] sm:p-[4rem] flex justify-center flex-wrap bg-[radial-gradient(70%_55%_at_center,_rgba(255,255,255,0.5)_0%,_transparent_80%)]">
          <div className="w-[20vw] sm:w-[11vw] h-fit aspect-square bg-white  rounded-md shadow-md m-2">
            <img
              src="/sponsors/0.jpg"
              alt="Sponsor 1"
              className="object-contain max-w-[90%] max-h-[90%] mx-auto my-auto"
            />
          </div>
          <div className="w-[20vw] sm:w-[11vw] h-fit aspect-square bg-white rounded-md shadow-md m-2" />
          <div className="w-[20vw] sm:w-[11vw] h-fit aspect-square bg-white rounded-md shadow-md m-2" />
        </div>
      </section>

      <section className="mt-[4%]">
        <h2 className="text-[1.3rem] sm:text-[2rem] font-semibold">
          Spark Sponsors
        </h2>
        <div className="mx-auto w-fit max-w-[50rem] py-[0.8rem] sm:p-[3rem] flex justify-center flex-wrap bg-[radial-gradient(70%_55%_at_center,_rgba(255,255,255,0.5)_0%,_transparent_80%)]">
          <div className="w-[18vw] sm:w-[9vw] h-fit aspect-square bg-white rounded-md shadow-md m-2" />
          <div className="w-[18vw] sm:w-[9vw] h-fit aspect-square bg-white rounded-md shadow-md m-2" />
          <div className="w-[18vw] sm:w-[9vw] h-fit aspect-square bg-white rounded-md shadow-md m-2" />
          <div className="w-[18vw] sm:w-[9vw] h-fit aspect-square bg-white rounded-md shadow-md m-2" />
          <div className="w-[18vw] sm:w-[9vw] h-fit aspect-square bg-white rounded-md shadow-md m-2" />
          <div className="w-[18vw] sm:w-[9vw] h-fit aspect-square bg-white rounded-md shadow-md m-2" />
          <div className="w-[18vw] sm:w-[9vw] h-fit aspect-square bg-white rounded-md shadow-md m-2" />
          <div className="w-[18vw] sm:w-[9vw] h-fit aspect-square bg-white rounded-md shadow-md m-2" />
        </div>
      </section>

      <section className="mt-[3%]">
        <h2 className="text-[1.2rem] sm:text-[1.8rem] font-semibold">
          Sponsors
        </h2>
        <div className="mx-auto w-fit max-w-[50rem] py-[0.5rem] sm:p-[3rem] flex justify-center flex-wrap bg-[radial-gradient(70%_55%_at_center,_rgba(255,255,255,0.5)_0%,_transparent_80%)]">
          <div className="w-[13vw] sm:w-[6.5vw] h-fit aspect-square bg-white rounded-md shadow-md m-2" />
          <div className="w-[13vw] sm:w-[6.5vw] h-fit aspect-square bg-white rounded-md shadow-md m-2" />
          <div className="w-[13vw] sm:w-[6.5vw] h-fit aspect-square bg-white rounded-md shadow-md m-2" />
          <div className="w-[13vw] sm:w-[6.5vw] h-fit aspect-square bg-white rounded-md shadow-md m-2" />
          <div className="w-[13vw] sm:w-[6.5vw] h-fit aspect-square bg-white rounded-md shadow-md m-2" />
          <div className="w-[13vw] sm:w-[6.5vw] h-fit aspect-square bg-white rounded-md shadow-md m-2" />
          <div className="w-[13vw] sm:w-[6.5vw] h-fit aspect-square bg-white rounded-md shadow-md m-2" />
          <div className="w-[13vw] sm:w-[6.5vw] h-fit aspect-square bg-white rounded-md shadow-md m-2" />
          <div className="w-[13vw] sm:w-[6.5vw] h-fit aspect-square bg-white rounded-md shadow-md m-2" />
          <div className="w-[13vw] sm:w-[6.5vw] h-fit aspect-square bg-white rounded-md shadow-md m-2" />
        </div>
      </section>
    </div>
  );
};

export default Sponsors;
