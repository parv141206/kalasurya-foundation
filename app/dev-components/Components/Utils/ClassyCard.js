import React from "react";
import Image from "next/image";
export default function ClassyCard(props) {
  const { title, content, footer, image } = props;
  return (
    <div className=" flex flex-col gap-3 rounded-3xl border border-opacity-20 bg-[var(--tertiary-light)] p-5 shadow-md dark:border-white dark:border-opacity-5 dark:bg-[var(--secondary-dark)] md:flex-row">
      {image && image[0] == 1 ? (
        <Image
          src={image[1]}
          className="mr-3 w-[50%] rounded-xl "
          alt="design"
          width={600}
          height={500}
        />
      ) : (
        <div></div>
      )}
      <div className={`${image && image[0] == 2 ? "md:w-[50%]" : ""}`}>
        <h1 className="border-b-2 border-blue-700 text-xl font-extrabold dark:border-red-500">
          {title}
        </h1>

        <br />
        <p className="text-base">{content}</p>
        <br />
        <p className="">{footer}</p>
      </div>
      {image && image[0] == 2 ? (
        <Image
          src={image[1]}
          className="mr-3 w-[50%] rounded-xl "
          alt="design"
          width={500}
          height={500}
        />
      ) : (
        <div></div>
      )}
    </div>
  );
}
