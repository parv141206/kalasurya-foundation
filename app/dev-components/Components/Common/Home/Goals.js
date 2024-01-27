"use client";

import React, { useContext } from "react";
import Image from "next/image";
import Theme from "@/app/dev-components/Context/ThemeProvider";
export default function Goals() {
  return (
    <div
      className={`goals container mx-auto flex flex-col items-center justify-center dark:text-white md:h-[70vh]`}
    >
      <Image
        className="absolute right-[-28%] z-[-1]  hidden animate-spin-slow  md:block "
        alt="design"
        src="/images/design-1.png"
        width={500}
        height={500}
      ></Image>
      <div className="heading-font text-5xl">
        Welcome to Kalasurya Foundation
      </div>
      <div className="h-full gap-5 px-5 md:flex md:justify-center md:px-10">
        <div className="goals-card subtle-shadow self-end ">
          <div className="flex flex-col gap-3">
            <div className=" font-extrabold md:text-2xl">
              No More Old age Homes!
            </div>
            <div className="md:text-xl">વૃદ્ધ લોકો પરિવારનું ગૌરવ છે</div>
          </div>
        </div>
        <div className="goals-card self-start bg-[var(--primary-light)] dark:bg-[var(--primary-dark)]  md:h-auto">
          <div className="">
            <Image
              className=""
              alt="design"
              src="/images/logo-trans.svg"
              width={300}
              height={300}
            />
            <br />
            <div className="md:text-2xl">Welcome to Kalasurya Foundation</div>
            <div className="md:text-xl">
              કાલસૂર્ય ફાઉન્ડેશનમાં આપનું સ્વાગત છે
            </div>
          </div>
        </div>
        <div className="goals-card self-end bg-[var(--tertiary-light)] dark:bg-[var(--tertiary-dark)]">
          <div className="md:text-2xl">With quality bharatnatyam!</div>
        </div>
      </div>
    </div>
  );
}
