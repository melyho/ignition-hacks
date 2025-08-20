import React from "react";
import ProfileTooltip from "./profileTooltip";

type GroupKey =
  | "chair"
  | "director"
  | "sponsorship"
  | "marketing"
  | "logistics"
  | "uiux"
  | "dev";

const GROUP_STYLES: Record<GroupKey, { bgCol: string; borCol: string }> = {
  chair: { bgCol: "#A49BFF", borCol: "#423e66" },
  director: { bgCol: "#FFFFFF", borCol: "#666666" },
  sponsorship: { bgCol: "#FF9255", borCol: "#663a23" },
  marketing: { bgCol: "#A49BFF", borCol: "#423e66" },
  logistics: { bgCol: "#FFAC7E", borCol: "#663a23" },
  uiux: { bgCol: "#FFAC7E", borCol: "#663a23" },
  dev: { bgCol: "#956AEC", borCol: "#402e65" },
};

interface Member {
  imgUrl: string;
  name: string;
  role: string;
}

interface GroupConfig {
  key: GroupKey;
  containerClass: string;
  itemWrapperClass: string;
  members: Member[];
}

const GROUPS: GroupConfig[] = [
  {
    key: "chair",
    containerClass:
      "absolute w-[13.5%] aspect-[2/1] left-[39%] bottom-[85%] flex flex-row flex-wrap",
    itemWrapperClass: "w-1/2 aspect-[1/1] p-[5%]",
    members: [
      {
        imgUrl: "/team/Franklin.webp",
        name: "Franklin Ramirez",
        role: "Co-Chair",
      },
    ],
  },
  {
    key: "director",
    containerClass:
      "absolute w-[13.5%] aspect-[1/2] left-[45%] bottom-[42%] flex flex-row flex-wrap",
    itemWrapperClass: "w-1/2 aspect-[1/1] p-[5%]",
    members: [
      {
        imgUrl: "/team/Daisy.webp",
        name: "Daisy",
        role: "Logistics Director",
      },
      {
        imgUrl: "/team/Emily.webp",
        name: "Emily Yu",
        role: "Logistics Director",
      },
      {
        imgUrl: "/team/AJ.webp",
        name: "AJ",
        role: "Development Director",
      },
      {
        imgUrl: "/team/Melissa.webp",
        name: "Melissa Ho",
        role: "Development Director",
      },
      {
        imgUrl: "/team/Helena.webp",
        name: "Helena Xu",
        role: "Sponsorship Director",
      },
      {
        imgUrl: "/team/Jamie.webp",
        name: "Jamie",
        role: "Sponsorship Director",
      },
      {
        imgUrl: "/team/Harshpreet.webp",
        name: "Harshpreet Singh",
        role: "Marketing Director",
      },
      {
        imgUrl: "/team/Christine.webp",
        name: "Chris",
        role: "UI/UX Director",
      },
    ],
  },
  {
    key: "sponsorship",
    containerClass:
      "absolute w-[13.5%] aspect-[1/1] left-[26%] bottom-[32%] flex flex-row flex-wrap",
    itemWrapperClass: "w-1/2 aspect-[1/1] p-[5%]",
    members: [
      {
        imgUrl: "/team/Jamie.webp",
        name: "Jamie",
        role: "Sponsorship Director",
      },
      {
        imgUrl: "/team/Sanvi.webp",
        name: "Sanvi Kaushik",
        role: "Sponsorship Executive",
      },
      {
        imgUrl: "/team/Youssef.webp",
        name: "Youssef Labidi",
        role: "Sponsorship Executive",
      },
    ],
  },
  {
    key: "marketing",
    containerClass:
      "absolute w-[27%] aspect-[4/1] left-[46.3%] bottom-[30%] flex flex-row flex-wrap",
    itemWrapperClass: "w-1/4 aspect-[1/1] p-[2.5%]",
    members: [
      {
        imgUrl: "/team/Harshpreet.webp",
        name: "Harshpreet Singh",
        role: "Marketing Director",
      },
      {
        imgUrl: "/team/Christopher.webp",
        name: "Christopher Ma",
        role: "Marketing Executive",
      },
      {
        imgUrl: "/team/Neel.webp",
        name: "Neel Patel",
        role: "Marketing Executive",
      },
      {
        imgUrl: "/team/Zoeya.webp",
        name: "Zoeya Maqbool",
        role: "Marketing Executive",
      },
    ],
  },
  {
    key: "logistics",
    containerClass:
      "absolute w-[13.5%] aspect-[2/4] left-[8.7%] bottom-[10%] flex flex-row flex-wrap",
    itemWrapperClass: "w-1/2 aspect-[1/1] p-[5%]",
    members: [
      {
        imgUrl: "/team/Daisy.webp",
        name: "Daisy",
        role: "Logistics Director",
      },
      {
        imgUrl: "/team/Emily.webp",
        name: "Emily Yu",
        role: "Logistics Director",
      },
      {
        imgUrl: "/team/Alice.webp",
        name: "Alice Nguyen",
        role: "Logistic Executive",
      },
      {
        imgUrl: "/team/Caden.webp",
        name: "Caden Chen",
        role: "Logistic Executive",
      },
      {
        imgUrl: "/team/Jacob.webp",
        name: "Jacob Tran",
        role: "Logistic Executive",
      },
      {
        imgUrl: "/team/Sanidhya.webp",
        name: "Sanidhya Barara",
        role: "Logistic Executive",
      },
      {
        imgUrl: "/team/Sharon.webp",
        name: "Sharon Basovich",
        role: "Logistic Executive",
      },
      {
        imgUrl: "/team/Vishal.webp",
        name: "Vishal Parvannan",
        role: "Logistic Executive",
      },
    ],
  },
  {
    key: "uiux",
    containerClass:
      "absolute w-[33.75%] aspect-[5/1] left-[46.7%] bottom-[9%] flex flex-row flex-wrap",
    itemWrapperClass: "w-1/5 aspect-[1/1] p-[2%]",
    members: [
      {
        imgUrl: "/team/Christine.webp",
        name: "Chris",
        role: "UI/UX Director",
      },
      {
        imgUrl: "/team/Aarnav.webp",
        name: "Aarnav Shah",
        role: "UIUX Executive",
      },
      {
        imgUrl: "/team/Ava.webp",
        name: "Ava So",
        role: "UIUX Executive",
      },
      {
        imgUrl: "/team/Katrina.webp",
        name: "Katrina Jin",
        role: "UIUX Executive",
      },
      {
        imgUrl: "/team/Lily.webp",
        name: "Lily Song",
        role: "UIUX Executive",
      },
    ],
  },
  {
    key: "dev",
    containerClass:
      "absolute w-[13.5%] aspect-[1/1] left-[26%] bottom-[10.4%] flex flex-row flex-wrap",
    itemWrapperClass: "w-1/2 aspect-[1/1] p-[5%]",
    members: [
      {
        imgUrl: "/team/AJ.webp",
        name: "AJ",
        role: "Development Director",
      },
      {
        imgUrl: "/team/Melissa.webp",
        name: "Melissa Ho",
        role: "Development Director",
      },
      {
        imgUrl: "/team/Addi.webp",
        name: "Addi",
        role: "Developer",
      },
      {
        imgUrl: "/team/Karthik.webp",
        name: "Karthik Krishna Viriyala",
        role: "Developer",
      },
    ],
  },
];

const Team = () => {
  return (
    <div className="w-full aspect-[1630/1253] textU-center text-black bg-[url('/svg/MeetTheTeam.svg')] bg-cover bg-center relative">
      {GROUPS.map(({ key, containerClass, itemWrapperClass, members }) => (
        <div key={key} className={containerClass}>
          {members.map((m, i) => (
            <div key={i} className={itemWrapperClass}>
              <ProfileTooltip
                imgUrl={m.imgUrl}
                name={m.name}
                role={m.role}
                bgCol={GROUP_STYLES[key].bgCol}
                borCol={GROUP_STYLES[key].borCol}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Team;
