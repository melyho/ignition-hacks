import React from "react";
import ProfileTooltip from "./profileTooltip";

const chairBgCol = "#A49BFF";
const chairBorCol = "#423e66";
const directorBgCol = "#FFFFFF";
const directorBorCol = "#666666";
const sponsorshipBgCol = "#FF9255";
const sponsorshipBorCol = "#663a23";
const marketingBgCol = "#A49BFF";
const marketingBorCol = "#423e66";
const logisticsBgCol = "#FFAC7E";
const logisticsBorCol = "#663a23";
const uiuxBgCol = "#FFAC7E";
const uiuxBorCol = "#663a23";
const devBgCol = "#956AEC";
const devBorCol = "#402e65";

const Team = () => {
  return (
    <div className="w-full aspect-[1630/1253] text-center text-black bg-[url('/MeetTheTeam.svg')] bg-cover bg-center relative">
      /*Chair*/
      <p className="absolute left-[47%] bottom-[70%] text-[1.5vw] font-bold tracking-[0.6vw] block">
        Chair
      </p>
      <div className="absolute w-[13.5%] aspect[2:1] left-[54.25%] bottom-[68.8%] flex flex-row flex-wrap">
        <div className="w-1/2 aspect-[1/1] p-[5%]">
          <ProfileTooltip
            imgUrl="/team/Franklin.jpg"
            name="Franklin Ramirez"
            role="Co-Chair"
            bgCol={chairBgCol}
            borCol={chairBorCol}
          />
        </div>
        <div className="w-1/2 aspect-[1/1] p-[5%]">
          <ProfileTooltip
            imgUrl="/team/Helena.jpg"
            name="Helena Xu"
            role="Co-Chair"
            bgCol={chairBgCol}
            borCol={chairBorCol}
          />
        </div>
      </div>
      /*Directors*/
      <p className="absolute left-[26.5%] bottom-[32.15%] text-[1.5vw] font-bold tracking-[0.6vw] [writing-mode:vertical-rl] [text-orientation:upright] block">
        Directors
      </p>
      <div className="absolute w-[13.5%] aspect[1:2] left-[29%] bottom-[32.15%] flex flex-row flex-wrap">
        <div className="w-1/2 aspect-[1/1] p-[5%]">
          <ProfileTooltip
            imgUrl="/cat2.jpg"
            name=""
            role=""
            bgCol={directorBgCol}
            borCol={directorBorCol}
          />
        </div>
        <div className="w-1/2 aspect-[1/1] p-[5%]">
          <ProfileTooltip
            imgUrl="/cat2.jpg"
            name=""
            role=""
            bgCol={directorBgCol}
            borCol={directorBorCol}
          />
        </div>
        <div className="w-1/2 aspect-[1/1] p-[5%]">
          <ProfileTooltip
            imgUrl="/cat2.jpg"
            name=""
            role=""
            bgCol={directorBgCol}
            borCol={directorBorCol}
          />
        </div>
        <div className="w-1/2 aspect-[1/1] p-[5%]">
          <ProfileTooltip
            imgUrl="/cat2.jpg"
            name=""
            role=""
            bgCol={directorBgCol}
            borCol={directorBorCol}
          />
        </div>
        <div className="w-1/2 aspect-[1/1] p-[5%]">
          <ProfileTooltip
            imgUrl="/cat2.jpg"
            name=""
            role=""
            bgCol={directorBgCol}
            borCol={directorBorCol}
          />
        </div>
        <div className="w-1/2 aspect-[1/1] p-[5%]">
          <ProfileTooltip
            imgUrl="/cat2.jpg"
            name=""
            role=""
            bgCol={directorBgCol}
            borCol={directorBorCol}
          />
        </div>
        <div className="w-1/2 aspect-[1/1] p-[5%]">
          <ProfileTooltip
            imgUrl="/cat2.jpg"
            name=""
            role=""
            bgCol={directorBgCol}
            borCol={directorBorCol}
          />
        </div>
        <div className="w-1/2 aspect-[1/1] p-[5%]">
          <ProfileTooltip
            imgUrl="/cat2.jpg"
            name=""
            role=""
            bgCol={directorBgCol}
            borCol={directorBorCol}
          />
        </div>
      </div>
      /*Sponsorship*/
      <p className="absolute left-[45%] bottom-[60.5%] text-[1.5vw] font-bold tracking-[0.42vw] block">
        Sponsorship
      </p>
      <div className="absolute w-[13.5%] aspect[2:3] left-[44.9%] bottom-[33%] flex flex-row flex-wrap">
        <div className="w-1/2 aspect-[1/1] p-[5%]">
          <ProfileTooltip
            imgUrl="/cat2.jpg"
            name=""
            role=""
            bgCol={sponsorshipBgCol}
            borCol={sponsorshipBorCol}
          />
        </div>
        <div className="w-1/2 aspect-[1/1] p-[5%]">
          <ProfileTooltip
            imgUrl="/cat2.jpg"
            name=""
            role=""
            bgCol={sponsorshipBgCol}
            borCol={sponsorshipBorCol}
          />
        </div>
        <div className="w-1/2 aspect-[1/1] p-[5%]">
          <ProfileTooltip
            imgUrl="/cat2.jpg"
            name=""
            role=""
            bgCol={sponsorshipBgCol}
            borCol={sponsorshipBorCol}
          />
        </div>
        <div className="w-1/2 aspect-[1/1] p-[5%]">
          <ProfileTooltip
            imgUrl="/cat2.jpg"
            name=""
            role=""
            bgCol={sponsorshipBgCol}
            borCol={sponsorshipBorCol}
          />
        </div>
        <div className="w-1/2 aspect-[1/1] p-[5%]">
          <ProfileTooltip
            imgUrl="/cat2.jpg"
            name=""
            role=""
            bgCol={sponsorshipBgCol}
            borCol={sponsorshipBorCol}
          />
        </div>
        <div className="w-1/2 aspect-[1/1] p-[5%]">
          <ProfileTooltip
            imgUrl="/cat2.jpg"
            name=""
            role=""
            bgCol={sponsorshipBgCol}
            borCol={sponsorshipBorCol}
          />
        </div>
      </div>
      /*Marketing*/
      <p className="absolute left-[63%] bottom-[35%] text-[1.5vw] font-bold tracking-[0.42vw] block">
        Marketing
      </p>
      <div className="absolute w-[19.3%] aspect[3:1] left-[61.19%] bottom-[39%] flex flex-row flex-wrap">
        <div className="w-1/3 aspect-[1/1] p-[3%]">
          <ProfileTooltip
            imgUrl="/cat2.jpg"
            name="Harshpreet Singh"
            role="Marketing Director"
            bgCol={marketingBgCol}
            borCol={marketingBorCol}
          />
        </div>
        <div className="w-1/3 aspect-[1/1] p-[3%]">
          <ProfileTooltip
            imgUrl="/cat2.jpg"
            name="Christopher Ma"
            role="Marketing Executive"
            bgCol={marketingBgCol}
            borCol={marketingBorCol}
          />
        </div>
        <div className="w-1/3 aspect-[1/1] p-[3%]">
          <ProfileTooltip
            imgUrl="/cat2.jpg"
            name="Neel Patel"
            role="Marketing Executive"
            bgCol={marketingBgCol}
            borCol={marketingBorCol}
          />
        </div>
      </div>
      /*Logistics*/
      <p className="absolute left-[77%] bottom-[55%] text-[1.5vw] font-bold tracking-[0.42vw] block">
        Logistics
      </p>
      <div className="absolute w-[6%] aspect[1:3] left-[82.35%] bottom-[30%] flex flex-col flex-wrap">
        <div className="w-full aspect-[1/1] p-[5%]">
          <ProfileTooltip
            imgUrl="/cat2.jpg"
            name=""
            role="Logistics Director"
            bgCol={logisticsBgCol}
            borCol={logisticsBorCol}
          />
        </div>
        <div className="w-full aspect-[1/1] p-[5%]">
          <ProfileTooltip
            imgUrl="/cat2.jpg"
            name=""
            role="Logistics Director"
            bgCol={logisticsBgCol}
            borCol={logisticsBorCol}
          />
        </div>
        <div className="w-full aspect-[1/1] p-[5%]">
          <ProfileTooltip
            imgUrl="/cat2.jpg"
            name=""
            role="Logistic Executive"
            bgCol={logisticsBgCol}
            borCol={logisticsBorCol}
          />
        </div>
      </div>
      <div className="absolute w-[12.5%] aspect[1:1] left-[76.1%] bottom-[12.9%] flex flex-row flex-wrap gap-0 justify-center">
        <div className="w-1/2 aspect-[1/1] p-[3%]">
          <ProfileTooltip
            imgUrl="/cat2.jpg"
            name=""
            role="Logistic Executive"
            bgCol={logisticsBgCol}
            borCol={logisticsBorCol}
          />
        </div>
        <div className="w-1/2 aspect-[1/1] p-[3%]">
          <ProfileTooltip
            imgUrl="/cat2.jpg"
            name=""
            role="Logistic Executive"
            bgCol={logisticsBgCol}
            borCol={logisticsBorCol}
          />
        </div>
        <div className="w-1/2 aspect-[1/1] p-[3%]">
          <ProfileTooltip
            imgUrl="/cat2.jpg"
            name=""
            role="Logistic Executive"
            bgCol={logisticsBgCol}
            borCol={logisticsBorCol}
          />
        </div>
        <div className="w-1/2 aspect-[1/1] p-[3%]">
          <ProfileTooltip
            imgUrl="/cat2.jpg"
            name=""
            role="Logistic Executive"
            bgCol={logisticsBgCol}
            borCol={logisticsBorCol}
          />
        </div>
      </div>
      /*UI/UX*/
      <p className="absolute left-[14.5%] bottom-[35%] text-[1.5vw] font-bold tracking-[0.42vw] block">
        UI/UX
      </p>
      <div className="absolute w-[12.5%] aspect[1:1] left-[11.25%] bottom-[13.75%] flex flex-row flex-wrap">
        <div className="w-1/2 aspect-[1/1] p-[5%]">
          <ProfileTooltip
            imgUrl="/cat2.jpg"
            name=""
            role=""
            bgCol={uiuxBgCol}
            borCol={uiuxBorCol}
          />
        </div>
        <div className="w-1/2 aspect-[1/1] p-[5%]">
          <ProfileTooltip
            imgUrl="/cat2.jpg"
            name=""
            role=""
            bgCol={uiuxBgCol}
            borCol={uiuxBorCol}
          />
        </div>
        <div className="w-1/2 aspect-[1/1] p-[5%]">
          <ProfileTooltip
            imgUrl="/cat2.jpg"
            name=""
            role=""
            bgCol={uiuxBgCol}
            borCol={uiuxBorCol}
          />
        </div>
        <div className="w-1/2 aspect-[1/1] p-[5%]">
          <ProfileTooltip
            imgUrl="/cat2.jpg"
            name=""
            role=""
            bgCol={uiuxBgCol}
            borCol={uiuxBorCol}
          />
        </div>
      </div>
      /*Dev*/
      <p className="absolute left-[68%] bottom-[17.5%] text-[1.5vw] font-bold tracking-[0.6vw] [writing-mode:vertical-rl] [text-orientation:upright] block">
        Dev
      </p>
      <div className="absolute w-[27%] aspect[4:2] left-[38.9%] bottom-[12.5%] flex flex-row flex-wrap">
        <div className="w-1/4 aspect-[1/1] p-[3%]">
          <ProfileTooltip
            imgUrl="/cat2.jpg"
            name="AJ"
            role="Development Director"
            bgCol={devBgCol}
            borCol={devBorCol}
          />
        </div>
        <div className="w-1/4 aspect-[1/1] p-[3%]">
          <ProfileTooltip
            imgUrl="/cat2.jpg"
            name="Melissa Ho"
            role="Development Director"
            bgCol={devBgCol}
            borCol={devBorCol}
          />
        </div>
        <div className="w-1/4 aspect-[1/1] p-[3%]">
          <ProfileTooltip
            imgUrl="/cat2.jpg"
            name="Addi"
            role="Developer"
            bgCol={devBgCol}
            borCol={devBorCol}
          />
        </div>
        <div className="w-1/4 aspect-[1/1] p-[3%]">
          <ProfileTooltip
            imgUrl="/cat2.jpg"
            name="Alay Parikh"
            role="Developer"
            bgCol={devBgCol}
            borCol={devBorCol}
          />
        </div>
        <div className="w-1/4 aspect-[1/1] p-[3%]">
          <ProfileTooltip
            imgUrl="/cat2.jpg"
            name="Aryan Vasudevan"
            role="Developer"
            bgCol={devBgCol}
            borCol={devBorCol}
          />
        </div>
        <div className="w-1/4 aspect-[1/1] p-[3%]">
          <ProfileTooltip
            imgUrl="/cat2.jpg"
            name="Di Nguyen"
            role="Developer"
            bgCol={devBgCol}
            borCol={devBorCol}
          />
        </div>
        <div className="w-1/4 aspect-[1/1] p-[3%]">
          <ProfileTooltip
            imgUrl="/cat2.jpg"
            name="Karthik Krishna Viriyala"
            role="Developer"
            bgCol={devBgCol}
            borCol={devBorCol}
          />
        </div>
        <div className="w-1/4 aspect-[1/1] p-[3%]">
          <ProfileTooltip
            imgUrl="/cat2.jpg"
            name="Noah Kostesku"
            role="Developer"
            bgCol={devBgCol}
            borCol={devBorCol}
          />
        </div>
      </div>
    </div>
  );
};

export default Team;
