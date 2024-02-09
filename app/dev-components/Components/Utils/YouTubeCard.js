import React, { Suspense } from "react";
import Image from "next/image";
export default function YouTubeCard(props) {
  const { title, link } = props;
  return (
    <a target="_blank" href={link}>
      <div className="m-4 flex items-center justify-center rounded-3xl border-2 border-black border-opacity-10 bg-[var(--tertiary-light)] p-4 shadow-md dark:border-white dark:bg-[var(--secondary-dark)] md:w-[30vw]">
        <div className="w-[30%]">
          <Suspense fallback={<div>Loading...</div>}>
            <Image
              src="/images/logos/yt.png"
              width={500}
              height={500}
              className="rounded-3xl"
              alt="design"
            />
          </Suspense>
        </div>
        <div className="flex w-[auto] flex-col">
          <div>{title}</div>
          <div>{link}</div>
        </div>
      </div>
    </a>
  );
}
