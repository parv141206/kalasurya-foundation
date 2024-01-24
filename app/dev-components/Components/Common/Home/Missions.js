import React from "react";
import ClassyCard from "../../Utils/ClassyCard";
import { GiTorch } from "react-icons/gi";
export default function Missions() {
  const data = [
    {
      key: 1,
      title: "Missions",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, quidemLorem ipsum dolor sit amet consectetur adipisicing elit. Iure, quidemLorem ipsum dolor sit amet consectetur adipisicing elit. Iure, quidem",
      footer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, quidem.",
    },
    {
      key: 2,
      title: "Missions",
      content:
        "Lorem ipsum dolor sit amet conLorem ipsum dolor sit amet consectetur adipisicing elit. Iure, quidemLorem ipsum dolor sit amet consectetur adipisicing elit. Iure, quidemLorem ipsum dolor sit amet consectetur adipisicing elit. Iure, quidemsectetur adipisicing elit. Iure, quidem.",
      footer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, quidem.",
    },
    {
      key: 3,
      title: "Missions",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, quidemLorem ipsum dolor sit amet consectetur adipisicing elit. Iure, quidemLorem ipsum dolor sit amet consectetur adipisicing elit. Iure, quidemLorem ipsum dolor sit amet consectetur adipisicing elit. Iure, quidem Iure, quidem.",
      footer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, quidem.",
    },
    {
      key: 4,
      title: "Missions",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, quidemLorem ipsum dolor sit amet consectetur adipisicing elit. Iure, quidemLorem ipsum dolor sit amet consectetur adipisicing elit. Iure, quidemLorem ipsum dolor sit amet consectetur adipisicing elit. Iure, quidem quidem.",
      footer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, quidem.",
    },
    {
      key: 5,
      title: "Missions",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, quidemLorem ipsum dolor sit amet consectetur adipisicing elit. Iure, quidemLorem ipsum dolor sit amet consectetur adipisicing elit. Iure, quidemLorem ipsum dolor sit amet consectetur adipisicing elit. Iure, quidemLorem ipsum dolor sit amet consectetur adipisicing elit. Iure, quidem quidem.",
      footer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, quidem.",
    },
  ];
  const renderData = () => {
    let counter = -1;
    return data.map((data) => {
      counter++;
      return counter % 2 == 0 ? (
        <div key={data.key} className="relative  md:flex">
          <div className="md:shadow-max md:dark:shadow-maxdark relative z-[10] shadow-white  md:w-[60%]">
            <ClassyCard
              title={data.title}
              content={data.content}
              footer={data.footer}
            />
          </div>
          <div className="bottom-[-35%] right-[25%] hidden h-[80%] w-[25%]  border-8  border-[var(--primary-light)] md:absolute md:block"></div>
        </div>
      ) : (
        <div key={data.key} className="relative flex">
          <div className="bottom-[-35%] left-[25%] hidden h-[80%] w-[25%]  border-8  border-[var(--primary-light)] md:absolute md:block"></div>
          <div className="md:w-[40%]"></div>
          <div className="md:shadow-max md:dark:shadow-maxdark relative z-10 md:w-[60%]">
            <ClassyCard
              title={data.title}
              content={data.content}
              footer={data.footer}
            />
          </div>
        </div>
      );
    });
  };
  return (
    <div>
      <h1 className="shadow-max dark:shadow-maxdark relative z-10 my-8 flex bg-white py-3 text-5xl font-extrabold shadow-white dark:bg-slate-950">
        <GiTorch />
        Our ongoing missions
      </h1>
      <div className="mx-5  flex flex-col gap-10 md:m-5">{renderData()}</div>
    </div>
  );
}
