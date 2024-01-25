import React from "react";
import Image from "next/image";
export default function Goals() {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center dark:text-white md:h-[90vh]">
      <Image
        className="animate-spin-slow  absolute right-[-28%]  z-[-1] "
        alt="design"
        src="/images/design-1.png"
        width={500}
        height={500}
      ></Image>
      <div className="h-full gap-5 px-5 md:flex md:justify-center md:px-10">
        <div className="goals-card self-end bg-[var(--secondary-light)] dark:bg-[var(--secondary-dark)]">
          <div className="flex flex-col gap-3">
            <div className="text-2xl">No More Old age Homes!</div>
            <div className="text-xl">વૃદ્ધ લોકો પરિવારનું ગૌરવ છે</div>
          </div>
        </div>
        <div className="goals-card self-start bg-[var(--primary-light)]  dark:bg-[var(--primary-dark)]">
          <Image
            alt="design"
            src="/images/logo-trans.svg"
            width={100}
            height={100}
          />
          <div className="text-2xl">Welcome to Kalasurya Foundation</div>
        </div>
        <div className="goals-card self-end bg-[var(--tertiary-light)] dark:bg-[var(--tertiary-dark)]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat aut
          eius vitae quibusdam, nesciunt optio maxime? Rem distinctio aperiam
          architecto facere recusandae numquam. Aspernatur voluptas, illum
          beatae labore voluptatum reiciendis!
        </div>
      </div>
    </div>
  );
}
