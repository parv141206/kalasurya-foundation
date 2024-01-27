import React from "react";
import Image from "next/image";
export default function Layout_2(props) {
  const { title, content1, content2, image1, image2 } = props;
  return (
    <div>
      <div className="container">
        <div className="my-10 text-5xl font-extrabold">{title}</div>
        <div className="my-5 flex flex-col gap-10 rounded-3xl bg-[var(--tertiary-light)] p-10 dark:bg-[var(--secondary-dark)] ">
          <div className="flex flex-col gap-5 md:flex-row">
            <Image
              className="order-2 rounded-3xl md:order-1 md:w-1/2"
              objectFit="cover"
              objectPosition="center"
              src={image1}
              alt="design"
              width={500}
              height={500}
            />
            {/* Adjusted classes for content1 to match Layout_1 styling */}
            <div
              className="order-1 md:order-2 md:w-1/2"
              dangerouslySetInnerHTML={{ __html: content1 }}
            />
          </div>
          <div className="flex flex-col gap-5 md:flex-row">
            {/* Adjusted classes for content2 to match Layout_1 styling */}
            <div
              className="md:w-1/2"
              dangerouslySetInnerHTML={{ __html: content2 }}
            />
            <Image
              className="order-2 rounded-3xl md:order-1 md:w-1/2"
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
