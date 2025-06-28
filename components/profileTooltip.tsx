/* components/ProfileTooltip.tsx */
"use client";
import Image from "next/image";
import { FC } from "react";

interface ProfileTooltipProps {
  /** URL of the person’s photo */
  imgUrl: string;
  /** Person’s full name */
  name: string;
  /** Person’s role or title */
  role: string;
  /** Background color */
  bgCol: string;
  /** Border color */
  borCol: string;
}

const ProfileTooltip: FC<ProfileTooltipProps> = ({
  imgUrl,
  name,
  role,
  bgCol,
  borCol,
}) => {
  return (
    <div className="w-full aspect-[1/1] relative inline-block group cursor-pointer">
      {/* ── Collapsed circular avatar ───────────────────────────────────────── */}
      <Image
        src={imgUrl}
        alt={name}
        fill
        sizes="(max-width:640px) 33vw, 150px"
        className="rounded-full object-cover border-[0.25vw] border-[#D9D9D9] shadow-lg"
      />

      {/* ── Tooltip panel (re-uses the same image, larger, plus text) ───────── */}
      <div
        className={`
          pointer-events-none absolute left-1/2 bottom-full mb-3
          w-[220px] -translate-x-1/2 transform-gpu
          scale-95 opacity-0 transition-all duration-200 ease-out
          group-hover:scale-100 group-hover:opacity-100
          z-30
        `}
      >
        <div
          style={{
            backgroundColor: bgCol,
            borderColor: borCol,
          }}
          className="rounded-2xl border-8 shadow-xl ring-1 ring-black/5 py-4 px-0 backdrop-blur"
        >
          <div className="w-1/2 aspect-square relative mx-auto">
            <Image
              src={imgUrl}
              alt={name}
              fill
              className="rounded-xl object-cover"
              sizes="110px"
            />
          </div>
          <p className="text-center font-semibold text-black">{name}</p>
          <p className="text-center text-sm text-gray-900">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileTooltip;
