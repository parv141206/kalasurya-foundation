import React from "react";
import Image from "next/image";
export default function Layout_3(props) {
  const { title, content, image1, image2 } = props;
  return (
    <div>
      <div className="container">
        <div className="my-3 text-5xl font-extrabold">{title}</div>
        <div className="flex flex-col gap-5 md:flex-row">
          <div className=" md:order-1t order-2 flex  gap-5   md:w-1/2">
            <Image
              className="order-2 rounded-lg  md:order-1 md:w-1/2"
              objectFit="cover"
              objectPosition="center"
              src={image1}
              alt="design"
              width={500}
              height={500}
            />
          </div>
          <div className="order-1 flex flex-col gap-5 md:order-2 md:w-1/2">
            <div className=" rounded-lg border-2 border-black border-opacity-15 bg-[var(--primary-light)] p-4 dark:border-slate-600 dark:bg-[var(--primary-dark)] ">
              {content}
            </div>
            <Image
              className="order-2 rounded-lg  md:order-1 md:w-1/2"
              objectFit="cover"
              objectPosition="center"
              src={image2}
              alt="design"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
