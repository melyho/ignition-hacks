import React from "react";
import Image from "next/image";

const Sponsors = () => {
  return (
    <div className="w-full aspect-[1728/2957] text-center text-white p-8 space-y-12 bg-[url('/svg/SponsorshipBackground.svg')] bg-cover bg-center">
      <h1 className="text-[15vw] sm:text-[7vw] font-bold font-sans mb-[1rem] tracking-wide">
        Sponsors
      </h1>


      <section className="mt-[8%]">
        <h2 className="text-[2rem] sm:text-[4rem] font-semibold ">
          Blaze Sponsors
        </h2>
        <div className="mx-auto w-fit max-w-[50rem] py-[1rem] sm:p-[4rem] flex justify-center flex-wrap bg-[radial-gradient(70%_55%_at_center,_rgba(255,255,255,0.5)_0%,_transparent_80%)]">
          <div className="relative w-[25vw] sm:w-[15vw] h-fit aspect-square bg-white rounded-md sm:rounded-3xl m-2">
            <Image
              src="/sponsors/blaze/TheKapCo.png"
              alt="The Kap Co"
              fill
              className="object-cover p-2"
            />
          </div>
          <div className="relative w-[25vw] sm:w-[15vw] h-fit aspect-square bg-white rounded-md sm:rounded-3xl m-2">
            <Image
              src="/sponsors/blaze/InterviewCake.svg"
              alt="Interview Cake"
              fill
              className="object-contain p-2"
            />
          </div>
        </div>
      </section>

      <section className="mt-[6%]">
        <h2 className="text-[1.8rem] sm:text-[2.5rem] font-semibold">
          Flame Sponsors
        </h2>
        <div className="mx-auto w-fit max-w-[50rem] py-[1rem] sm:p-[4rem] flex justify-center flex-wrap bg-[radial-gradient(70%_55%_at_center,_rgba(255,255,255,0.5)_0%,_transparent_80%)]">
          <div className="relative w-[20vw] sm:w-[11vw] h-fit aspect-square bg-white  rounded-md shadow-md m-2">
            <Image
              src="/sponsors/flame/BespokeCx.png"
              alt="Bespoke CX"
              fill
              className="object-contain p-2"
            />
          </div>
          <div className="relative w-[20vw] sm:w-[11vw] h-fit aspect-square bg-white rounded-md shadow-md m-2">
            <Image
              src="/sponsors/flame/CpaOntario.svg"
              alt="CPA Ontario"
              fill
              className="object-contain p-2"
            />
          </div>
          <div className="relative w-[20vw] sm:w-[11vw] h-fit aspect-square bg-white rounded-md shadow-md m-2">
            <Image
              src="/sponsors/flame/Goliath.png"
              alt="Goliath Automation and Robotics"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </section>

      <section className="mt-[4%]">
        <h2 className="text-[1.3rem] sm:text-[2rem] font-semibold">
          Spark Sponsors
        </h2>
        <div className="mx-auto w-fit max-w-[50rem] py-[0.8rem] sm:p-[3rem] flex justify-center flex-wrap bg-[radial-gradient(70%_55%_at_center,_rgba(255,255,255,0.5)_0%,_transparent_80%)]">
          <div className="relative w-[18vw] sm:w-[9vw] h-fit aspect-square bg-white rounded-md shadow-md m-2">
            <Image
              src="/sponsors/spark/BestBuy.svg"
              alt="Best Buy"
              fill
              className="object-contain p-2"
            />
          </div>
          <div className="relative w-[18vw] sm:w-[9vw] h-fit aspect-square bg-white rounded-md shadow-md m-2">
            <Image
              src="/sponsors/spark/CryptoChicks.png"
              alt="Crypto Chicks"
              fill
              className="object-contain p-2"
            />
          </div>
          <a
            href="https://incogni.com/" target="_blank">
            <div className="relative w-[18vw] sm:w-[9vw] h-fit aspect-square bg-white rounded-md shadow-md m-2">
              <Image
                src="/sponsors/spark/Incogni.png"
                alt="Incogni"
                fill
                className="object-contain p-2"
              />
            </div>
          </a>
          <div className="relative w-[18vw] sm:w-[9vw] h-fit aspect-square bg-white rounded-md shadow-md m-2">
            <Image
              src="/sponsors/spark/Keel.png"
              alt="Keel Digital"
              fill
              className="object-contain p-2"
            />
          </div>
          <div className="relative w-[18vw] sm:w-[9vw] h-fit aspect-square bg-white rounded-md shadow-md m-2">
            <Image
              src="/sponsors/spark/Mef.avif"
              alt="UW Math Endowment Fund"
              fill
              className="object-contain p-2"
            />
          </div>
          <div className="relative w-[18vw] sm:w-[9vw] h-fit aspect-square bg-white rounded-md shadow-md m-2">
            <Image
              src="/sponsors/spark/NordPass.png"
              alt="Nord Pass"
              fill
              className="object-contain p-2"
            />
          </div>
          <a
            href="https://nordvpn.com/hackathons"
            target="_blank"
            rel="sponsored"
          >
            <div className="relative w-[18vw] sm:w-[9vw] h-fit aspect-square bg-white rounded-md shadow-md m-2">
              <Image
                src="/sponsors/spark/NordVpn.png"
                alt="Nord VPN"
                fill
                className="object-contain p-2"
              />
            </div>
          </a>
          <a href="https://nordprotect.com/" target="_blank">
          <div className="relative w-[18vw] sm:w-[9vw] h-fit aspect-square bg-white rounded-md shadow-md m-2">
            <Image
              src="/sponsors/spark/NordProtect.png"
              alt="NordProtect"
              fill
              className="object-contain p-2"
            />
          </div>
          </a>
          <div className="relative w-[18vw] sm:w-[9vw] h-fit aspect-square bg-white rounded-md shadow-md m-2">
            <Image
              src="/sponsors/spark/QueensComputing.png"
              alt="Queens Computing"
              fill
              className="object-contain p-2"
            />
          </div>
          <a href="https://saily.com/ " target="_blank">
            <div className="relative w-[18vw] sm:w-[9vw] h-fit aspect-square bg-white rounded-md shadow-md m-2">
              <Image
                src="/sponsors/spark/Saily.png"
                alt="Saily"
                fill
                className="object-contain p-2"
              />
            </div>
          </a>
          <div className="relative w-[18vw] sm:w-[9vw] h-fit aspect-square bg-white rounded-md shadow-md m-2">
            <Image
              src="/sponsors/spark/Scrimba.png"
              alt="Scrimba"
              fill
              className="object-contain p-2"
            />
          </div>
          {/* <div className="relative w-[18vw] sm:w-[9vw] h-fit aspect-square bg-white rounded-md shadow-md m-2">
            <Image
              src="/sponsors/spark/Wolfram.png"
              alt="Wolfram"
              fill
              className="object-contain p-2"
            />
          </div> */}
        </div>
      </section>

      <section className="mt-[3%]">
        <h2 className="text-[1.2rem] sm:text-[1.8rem] font-semibold">
          Sponsors
        </h2>
        <div className="mx-auto w-fit max-w-[50rem] py-[0.5rem] sm:p-[3rem] flex justify-center flex-wrap bg-[radial-gradient(70%_55%_at_center,_rgba(255,255,255,0.5)_0%,_transparent_80%)]">
          <div className="relative w-[13vw] sm:w-[6.5vw] h-fit aspect-square bg-white rounded-md shadow-md m-2">
            <Image
              src="/sponsors/sponsors/1Password.png"
              alt="1Password"
              fill
              className="object-contain p-2"
            />
          </div>
          <div className="relative w-[13vw] sm:w-[6.5vw] h-fit aspect-square bg-white rounded-md shadow-md m-2">
            <Image
              src="/sponsors/sponsors/Alfred.jpg"
              alt="Alfred App"
              fill
              className="object-contain p-2"
            />
          </div>
          <div className="relative w-[13vw] sm:w-[6.5vw] h-fit aspect-square bg-white rounded-md shadow-md m-2">
            <Image
              src="/sponsors/sponsors/Balsamiq.svg"
              alt="Balsamiq"
              fill
              className="object-contain p-2"
            />
          </div>
          <div className="relative w-[13vw] sm:w-[6.5vw] h-fit aspect-square bg-white rounded-md shadow-md m-2">
            <Image
              src="/sponsors/sponsors/Cleanshot.jpg"
              alt="Cleanshot"
              fill
              className="object-contain p-2"
            />
          </div>
          <div className="relative w-[13vw] sm:w-[6.5vw] h-fit aspect-square bg-white rounded-md shadow-md m-2">
            <Image
              src="/sponsors/sponsors/Kernels.png"
              alt="Kernels"
              fill
              className="object-contain p-2"
            />
          </div>
          <div className="relative w-[13vw] sm:w-[6.5vw] h-fit aspect-square bg-white rounded-md shadow-md m-2">
            <Image
              src="/sponsors/sponsors/Orielly.svg"
              alt="O'Reilly"
              fill
              className="object-contain p-2"
            />
          </div>
          <div className="relative w-[13vw] sm:w-[6.5vw] h-fit aspect-square bg-white rounded-md shadow-md m-2">
            <Image
              src="/sponsors/sponsors/Uber.svg"
              alt="Uber"
              fill
              className="object-contain p-2"
            />
          </div>
          <div className="relative w-[13vw] sm:w-[6.5vw] h-fit aspect-square bg-white rounded-md shadow-md m-2">
            <Image
              src="/sponsors/sponsors/VueSchool.png"
              alt="Vue School"
              fill
              className="object-contain p-2"
            />
          </div>
          <div className="relative w-[13vw] sm:w-[6.5vw] h-fit aspect-square bg-white rounded-md shadow-md m-2">
            <Image
              src="/sponsors/sponsors/Warp.png"
              alt="Warp"
              fill
              className="object-contain p-2"
            />
          </div>
          <div className="relative w-[13vw] sm:w-[6.5vw] h-fit aspect-square bg-white rounded-md shadow-md m-2">
            <Image
              src="/sponsors/sponsors/Wics.png"
              alt="UW Women in Computer Science"
              fill
              className="object-contain p-2"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sponsors;
