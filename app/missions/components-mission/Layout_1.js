import React from "react";
import Image from "next/image";
export default function Layout_1(props) {
  const { title, content, image1, image2, image3 } = props;
  return (
    <div className="container">
      <div className="my-10 text-5xl font-extrabold">{title}</div>
      <div className="my-5 flex flex-col gap-10 rounded-3xl bg-[var(--tertiary-light)] p-10 dark:bg-[var(--secondary-dark)] ">
        <div className="flex flex-col gap-10 md:flex-row">
          <Image
            className="  order-2 h-auto  rounded-3xl md:order-1 md:w-1/2"
            objectFit="cover"
            objectPosition="center"
            src={image1}
            alt="design"
            sizes="(max-width: 768px) 100%, (max-width: 1200px) 50%, 33%"
            // fill={true}
            width={500}
            height={500}
          />
          <div className="order-1 rounded-lg  p-4  md:order-2 md:w-1/2">
            <p>{content}</p>
          </div>
        </div>
        <div className="flex flex-col gap-5 md:flex-row">
          <Image
            className="  order-2 h-auto  rounded-3xl md:order-1 md:w-1/2"
            objectFit="cover"
            objectPosition="center"
            src={image2}
            alt="design"
            sizes="(max-width: 768px) 100%, (max-width: 1200px) 50%, 33%"
            // fill={true}
            width={500}
            height={500}
          />
          <Image
            className="  order-2 h-auto  rounded-3xl md:order-1 md:w-1/2"
            objectFit="cover"
            objectPosition="center"
            src={image3}
            alt="design"
            sizes="(max-width: 768px) 100%, (max-width: 1200px) 50%, 33%"
            // fill={true}
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
}
