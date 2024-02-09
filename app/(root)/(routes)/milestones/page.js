import React from "react";
import Image from "next/image";
export default function page() {
  // const renderImages = () => {
  //   let images = [];
  //   for (let i = 1; i < 9; i++) {
  //     images.push(
  //       <Image
  //         className={`ml-[${Math.random() * 2000}px] mt-[${Math.random() * 2000}px]`}
  //         key={i}
  //         alt="milestone"
  //         src={`/images/Milestones/${i}.jpg`}
  //         width={270}
  //         height={270}
  //       />,
  //     );
  //   }
  //   return images;
  // };
  return (
    <div className="flex items-center justify-center md:h-[80vh]">
      <div className="absolute -z-10 flex   opacity-5 ">
        <Image
          className=""
          alt="milestone"
          src="/images/Milestones/combined.png"
          width={1200}
          height={1200}
        ></Image>
      </div>
      <div className="heading-font text-3xl">Countless Milestones</div>
    </div>
  );
}
