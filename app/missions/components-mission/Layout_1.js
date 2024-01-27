import React from "react";
import Image from "next/image";
export default function Layout_1(props) {
  const { title, content, image1, image2, image3 } = props;
  return (
    <div className="container">
      <div className="my-3 text-5xl font-extrabold">{title}</div>
      <div className="flex flex-col gap-5 ">
        <div className="flex flex-col gap-5 md:flex-row">
          <Image
            className="image  order-2 rounded-3xl  md:order-1 md:w-1/2"
            objectFit="cover"
            objectPosition="center"
            src={image1}
            alt="design"
            width={500}
            height={500}
          />
          <div className="order-1 rounded-lg border-2 border-black border-opacity-15 bg-[var(--primary-light)] p-4 dark:border-slate-600 dark:bg-[var(--primary-dark)] md:order-2 md:w-1/2">
            <p>{content}</p>
          </div>
        </div>
        <div className="flex flex-col gap-5 md:flex-row">
          <Image
            className="image order-2 rounded-3xl md:order-1 md:w-1/2"
            objectFit="cover"
            objectPosition="center"
            src={image2}
            alt="design"
            width={500}
            height={500}
          />
          <Image
            className="image order-2 rounded-3xl md:order-1 md:w-1/2"
            objectFit="cover"
            objectPosition="center"
            src={image3}
            alt="design"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
}
