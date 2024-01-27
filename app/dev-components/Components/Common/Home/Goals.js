"use client";

import React, { useContext } from "react";
import Image from "next/image";
import Theme from "@/app/dev-components/Context/ThemeProvider";
export default function Goals() {
  return (
    <div
      className={`goals container relative mx-auto flex flex-col items-center justify-center gap-4 pt-20 dark:text-white  md:h-[80vh]`}
    >
      <Image
        className="absolute  z-[-1] hidden  animate-spin-slow opacity-30 dark:opacity-10   md:block "
        alt="design"
        src="/images/design-1.png"
        width={500}
        height={500}
      ></Image>
      <div>
        <div className="text-center text-lg">Welcome to</div>
        <div className="heading-font text-7xl ">Kalasurya Foundation</div>
      </div>
      <div className="h-full items-center gap-5 px-5 md:flex md:justify-center md:px-10">
        <div className="goals-card subtle-shadow ">
          <div className="flex flex-col gap-3">
            <div className=" font-extrabold md:text-2xl  ">
              No More Old age Homes!
            </div>
            <div className="guj-heading font-extrabold md:text-xl">
              વૃદ્ધ લોકો પરિવારનું ગૌરવ છે
            </div>
          </div>
        </div>
        <div className="hidden h-full w-[1px] border-2 border-black  opacity-20 dark:border-white md:block"></div>
        <div className="goals-card md:h-auto">
          <div className=" flex flex-col items-center justify-center">
            <Image
              className="ml-[4%]"
              alt="design"
              src="/images/logo-trans.svg"
              width={200}
              height={200}
            />
            <br />
            <div className="guj-heading font-extrabold md:text-xl">
              કાલસૂર્ય ફાઉન્ડેશનમાં આપનું સ્વાગત છે
            </div>
          </div>
        </div>
        <div className="hidden h-full w-[1px] border-2 border-black  opacity-20 dark:border-white md:block"></div>
        <div className="goals-card  ">
          <div className="font-extrabold md:text-2xl">Empowering Women!</div>
        </div>
      </div>
    </div>
  );
}
