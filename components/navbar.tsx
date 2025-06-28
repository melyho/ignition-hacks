"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const iconClass =
  "w-[1.5rem] h-[1.5rem] hover:scale-110 transition-transform duration-300";
const sections = ["ignition hacks", "about", "past", "faq", "sponsors", "team"];

export default function Navbar() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            const index = sections.indexOf(id);
            if (index !== -1) {
              setActiveIndex(index);
              if (progressRef.current) {
                const percentage = (index / (sections.length - 1)) * 84 + 8;
                progressRef.current.style.width = `${percentage}%`;
              }
            }
          }
        });
      },
      { threshold: 0.1, root: null }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <nav className="sticky top-0 z-50 w-full aspect-[7/1] sm:aspect-[15/1] flex justify-between items-center bg-gradient-to-b from-[#DDDDDD] via-[#FFFFFF] to-[#DDDDDD] shadow border-[5px] border-[#6B6B6B]">
        <div className="basis-1/5 sm:border-r-[5px] sm:border-r-[#6B6B6B] flex justify-between items-center h-full">
          <div className="relative h-[70%] aspect-[1/1] m-auto">
            <Image
              src="/svg/Vector.svg"
              alt="Logo"
              fill
              className="object-contain"
            />
          </div>
        </div>

        <div className="hidden sm:block sm:basis-3/5 h-max w-full px-10 py-8 pt-4">
          <div className="relative w-full h-[0.8rem] bg-gray-400 rounded-full flex-col items-start justify-start">
            {/* Purple fill */}
            <div
              ref={progressRef}
              className="absolute h-full bg-[#A69DFF] rounded-full transition-[width] duration-800 ease-in-out"
              style={{ width: "10%" }}
            ></div>

            {/* Markers */}
            <div className="absolute top-[110%] left-0 w-full grid grid-cols-6 gap-0 transform -translate-y-[1.2rem]">
              {sections.map((id, idx) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className="flex flex-col items-center w-full"
                >
                  <div
                    className={`w-[1.3rem] h-[1.3rem] mb-1 border-[0.24rem] rounded-full hover:scale-110 transition-transform duration-300 ${
                      idx === activeIndex
                        ? "bg-white border-[#393939]"
                        : "bg-white border-[#393939]"
                    }`}
                  />
                  <span className="sm:text-[0.6rem] md:text-[0.7rem] lg:text-[0.8rem] xl:text-[0.9rem] capitalize text-center leading-tight font-[550] text-[#1b1b1b]">
                    {id === "past" ? "Past Events" : id === "faq" ? "FAQ" : id}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
        {/* Mobile hamburger icon */}
        <div className="sm:hidden flex items-center justify-center basis-1/5 h-full">
          <button
            aria-label="Menu"
            className="p-2 focus:outline-none"
            onClick={() => setMenuOpen(true)}
          >
            <svg
              className="w-6 h-6 text-gray-800"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <div className="hidden sm:flex sm:basis-1/5 h-full border-l-[5px] border-l-[#6B6B6B] items-center justify-center">
          <div className="w-full flex flex-row justify-evenly items-center">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/ignitionhacks/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <img
                src="/svg/instagram.svg"
                alt="Instagram"
                className={iconClass}
              />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/ignition-hacks/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <img
                src="/svg/linkedin.svg"
                alt="LinkedIn"
                className={iconClass}
              />
            </a>

            {/* Instagram */}
            <a
              href="mailto:ignitionhacks@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Mail"
            >
              <img
                src="/svg/mail.svg"
                alt="Mail"
                className="w-[auto] h-[1.3rem]"
              />
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile side drawer */}
      <div
        className={`fixed inset-0 z-100 transition-opacity ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50"
          onClick={() => setMenuOpen(false)}
        />

        {/* Drawer panel – slides in from the right */}
        <div
          className={`fixed top-0 right-0 h-full w-4/5 max-w-xs bg-[#EEEEEE] shadow-lg transform transition-transform duration-300 flex flex-col ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Close (X) button */}
          <button
            aria-label="Close menu"
            className="absolute top-4 right-4 p-2"
            onClick={() => setMenuOpen(false)}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="black"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Progress bar & markers */}
          <div className="my-auto h-[70%] w-full px-14">
            <div className="relative h-full flex">
              {/* vertical track */}
              <div className="absolute ml-1 h-full w-[0.8rem] bg-gray-400 rounded-full" />

              {/* markers + labels */}
              <div className="flex flex-col justify-between py-2 z-50">
                {sections
                  .filter((id) => id !== "team")
                  .map((id) => (
                    <a
                      key={id + "-mobile"}
                      href={`#${id}`}
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center gap-4"
                    >
                      <div className="w-[1.3rem] aspect-square shrink-0 border-[0.24rem] border-[#393939] rounded-full bg-white" />
                      <span className="text-base text-black capitalize">
                        {id === "past"
                          ? "Past Events"
                          : id === "faq"
                          ? "FAQ"
                          : id}
                      </span>
                    </a>
                  ))}
              </div>
            </div>
          </div>

          {/* Social icons aligned at bottom */}
          <div className="absolute bottom-6 left-0 w-full flex justify-evenly">
            <a
              href="https://www.instagram.com/ignitionhacks/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <img
                src="/svg/instagram.svg"
                alt="Instagram"
                className={iconClass}
              />
            </a>
            <a
              href="https://www.linkedin.com/company/ignition-hacks/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <img
                src="/svg/linkedin.svg"
                alt="LinkedIn"
                className={iconClass}
              />
            </a>
            <a
              href="mailto:ignitionhacks@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Mail"
            >
              <img
                src="/svg/mail.svg"
                alt="Mail"
                className="w-auto h-[1.3rem]"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
