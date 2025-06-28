"use client";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Carousel from "@/components/carousel";
import FaqSection from "@/components/faqSection";
import Sponsors from "@/components/sponsors";
import Team from "@/components/team";
import { useState, useEffect } from "react";
import RegisterButton from "@/components/RegisterButton";

const images = [
  "/pastEvents/PastEvent1.jpg",
  "/pastEvents/PastEvent2.jpg",
  "/pastEvents/PastEvent3.jpg",
  "/pastEvents/PastEvent4.jpg",
  "/pastEvents/PastEvent5.jpg",
  "/pastEvents/PastEvent6.jpg",
  "/pastEvents/PastEvent7.jpg",
  "/pastEvents/PastEvent8.jpg",
];

export default function Home() {
  const [doorClosed, setDoorClosed] = useState(true);
  const [showTitle, setShowTitle] = useState(false);
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((current + 1) % images.length);
  const prev = () => setCurrent((current - 1 + images.length) % images.length);

  useEffect(() => {
    const timeout = setTimeout(() => setDoorClosed(false), 500);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => setShowTitle(true), 2800);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black">
      {/* Sticky Navbar */}
      <Navbar />

      {/* Main content starts here */}
      <main className="h-full w-full">
        {/* Hero Section */}
        <section
          id="ignition hacks"
          className="w-screen aspect-[18/16] sm:aspect-[34.6/16] flex items-center justify-center text-center scroll-mt-[12vh]"
        >
          <div className="hidden sm:block w-[24vw] h-full z-45">
            <div className="h-full w-full">
              <div className="h-full w-full">
                <div className="h-full w-full bg-gradient-to-b from-[#E5DDFF] to-[#322C55] relative">
                  <div className="absolute right-0 top-0 h-full w-[8px] bg-gradient-to-b from-[#6C6C6C] to-[#100F0F]" />

                  <div className="relative w-[80%] h-[60%] mr-auto">
                    <Image
                      src="/svg/LeftPoster.svg"
                      alt="Logo"
                      loading="eager"
                      fill
                      className="absolute left-0 mt-5"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-[52vw] h-full flex relative">
            <div
              className={`relative bg-gradient-to-b from-[#E5DDFF] to-[#322C55] w-[50%] aspect-[9/16] z-30 [mask-image:linear-gradient(white,white),linear-gradient(black,black)]
                        [mask-size:100%_100%,60%_62%] 
                        [mask-position:0_0,50%_30%]
                        [mask-repeat:no-repeat]
                        [mask-composite:exclude]
                        [mask-mode:alpha]
                        transition-[translate] duration-2000 ease-in-out ${
                          doorClosed ? "-translate-x-full" : "translate-x-0"
                        }
                        `}
            >
              <div className="absolute bg-transparent w-[70%] aspect-[9/16] top-[7.5%] left-[15%] border-[10px] border-[#7072BF] z-40 rounded-[20px] bg-gradient-to-r from-[#8d8fce] to-[#8A87D5]" />
              <div className="absolute right-0 top-0 h-full w-[8px] bg-gradient-to-b from-[#6C6C6C] to-[#100F0F] z-30" />
              <div className="mt-[70vh] mx-auto px-4 pt-2 pb-0 bg-[#3A3358] w-fit text-white ">
                <div className="border-t-2 border-white py-2 text-[0.8rem]/[1rem] width-[100%]">
                  &lt; Hybrid Hackathon &gt;
                </div>
              </div>
            </div>
            <div
              className={`relative bg-gradient-to-b from-[#E5DDFF] to-[#322C55] w-[50%] aspect-[9/16] z-30   
                [mask-image:linear-gradient(white,white),linear-gradient(black,black)]
                        [mask-size:100%_100%,60%_62%] 
                        [mask-position:0_0,50%_30%]
                        [mask-repeat:no-repeat]
                        [mask-composite:exclude]
                        [mask-mode:alpha]
                        transition-[translate] duration-2000 ease-in-out ${
                          doorClosed ? "-translate-x-[-100%]" : "translate-x-0"
                        }
                        `}
            >
              <div className="absolute bg-transparent w-[70%] aspect-[9/16] top-[7.5%] left-[15%] border-[10px] border-[#7072BF] z-40 rounded-[20px] bg-gradient-to-r from-[#8d8fce] to-[#8A87D5]" />
              <div className="absolute left-0 top-0 h-full w-[8px] bg-gradient-to-b from-[#6C6C6C] to-[#100F0F] z-30" />
              <div className="mt-[70vh] mx-auto px-4 pt-2 pb-0 bg-[#3A3358] w-fit text-white ">
                <div className="border-t-2 border-white py-2 text-[0.8rem]/[1rem]">
                  &lt; Register Today &gt;
                </div>
              </div>
            </div>
            <div
              className={`absolute top-2/5 left-1/2 translate-x-[-50%] translate-y-[-50%] z-46 w-[55%] h-[55%] transition-opacity duration-1000 delay-0 ${
                showTitle ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image loading="eager" src="/svg/Title.svg" alt="Logo" fill />
            </div>
            <div className="absolute bottom-0 w-full h-full opacity-[0.85] sm:mb-[-4rem]">
              <Image
                src="/svg/CityBackdrop.svg"
                alt="Logo"
                loading="eager"
                fill
              />
            </div>
          </div>
          <div className="hidden sm:block w-[24vw] h-full z-45">
            <div className="h-full w-full">
              <div className="h-full w-full">
                <div className="h-full w-full bg-gradient-to-b from-[#E5DDFF] to-[#322C55] relative">
                  <div className="absolute left-0 top-0 h-full w-[8px] bg-gradient-to-b from-[#6C6C6C] to-[#100F0F]" />
                  <div className="relative w-[80%] h-[60%] ml-auto">
                    <Image
                      src="/svg/RightPoster.svg"
                      alt="Logo"
                      loading="eager"
                      fill
                      className="absolute right-0 mt-5"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="hidden sm:block w-full h-[40vh]">
          <div className="relative w-full h-full bg-[linear-gradient(180deg,#605471,#010101)]">
            <div className="absolute top-0 left-0 h-full w-[24%] transform origin-top-left skew-x-[-30deg] border-r-[8px] bg-black border-r-transparent [border-image:linear-gradient(180deg,#393045,#010101)_1]" />
            <div className="absolute top-0 right-0 h-full w-[24%] transform origin-top-right skew-x-[30deg] bg-black border-l-[8px] border-l-transparent [border-image:linear-gradient(180deg,#393045,#010101)_1]" />
            <div className="absolute top-0 right-[50%] translate-x-[50%] h-[14px] w-[calc(52%+14px)] bg-[#393045]" />
          </div>
        </section>

        {/* Other Sections */}
        <section
          id="about"
          className="text-center flex flex-col items-center justify-center py-[7vh] scroll-mt-[10vh]"
        >
          <div className="flex flex-col gap-[4vh] text-white max-w-[70vw] mx-auto px-4 text-[1.5vw]">
            <h1 className="text-3xl sm:text-[3vw] font-bold mb-6">
              What is Ignition Hacks?
            </h1>
            <p className="max-w-2xl mx-auto text-lg leading-relaxed mb-6">
              Ignition Hacks is a student-led hackathon built to empower the
              next generation of innovative minds.
            </p>
            <p className="max-w-2xl mx-auto text-lg leading-relaxed mb-6">
              {" "}
              This year, we are creating more than just a hackathon, we want to
              use our platform to build an organization supporting education and
              opportunities for students to help.{" "}
            </p>
            <p className="max-w-2xl mx-auto text-lg leading-relaxed">
              {" "}
              Last year, we supported 600+ participants internationally offering
              15+ workshops, 1-on-1 mentorship opportunities, and co-op fairs
              all while fostering a career-forward environment.
            </p>

            <div className="mt-8">
              <RegisterButton href="https://docs.google.com/forms/d/e/1FAIpQLSf3kNu2WlKENNfGuWwK9oLLSzKz31RFqZ-Qv_JbxU_unmjCPg/viewform" />
            </div>
          </div>

          <div className="relative w-[90%] sm:w-[76.5%] aspect-[2.5/1] mt-[20vh] bg-[url('/svg/Stats.svg')] bg-cover bg-center"></div>
        </section>

        <section
          id="past"
          className="text-center flex items-center justify-center mt-[20vh] scroll-mt-[10vh]"
        >
          <div className="relative w-[90%] md:w-[70%] aspect-[1.2/1]">
            <button
              onClick={prev}
              className="absolute top-[35%] left-[16%] transform  -translate-y-1/2 -translate-x-1/2 w-[4%] aspect-[59/209] bg-[url('/svg/leftcarousel.svg')] bg-center bg-no-repeat bg-contain hover:scale-105 transition-transform duration-100 ease-in-out z-40 cursor-pointer"
              aria-label="Previous Slide"
            ></button>

            <button
              onClick={next}
              className="absolute top-[35%] right-[16%] transform -translate-y-1/2 -translate-x-[-50%] w-[4%] aspect-[59/209] bg-[url('/svg/rightcarousel.svg')] bg-center bg-no-repeat bg-contain hover:scale-105 transition-transform duration-100 ease-in-out z-40 cursor-pointer"
              aria-label="Next Slide"
            ></button>
            <Carousel current={current} images={images} />
            <Image
              src="/svg/Carousel.svg"
              alt="Logo"
              fill
              className="absolute"
            />
          </div>
        </section>

        <section
          id="faq"
          className="relative w-full h-fit mt-[20vh] text-center flex items-center justify-center pb-[10vh] scroll-mt-[10vh]"
        >
          <div className="absolute md:bottom-0 w-full aspect-[1.4/1] sm:bg-[url('/svg/FAQ.svg')] sm:bg-cover sm:bg-bottom z-0"></div>
          <div className="relative w-full h-fit mb-[10%]">
            <FaqSection />
          </div>
        </section>

        <section
          id="sponsors"
          className="w-full h-fit mt-[10vh] text-centers scroll-mt-[10vh]"
        >
          <Sponsors />
        </section>

        <section
          id="team"
          className="hidden sm:block w-full h-fit text-centers scroll-mt-[10vh]"
        >
          <Team />
        </section>
      </main>
    </div>
  );
}
