import React from "react";
import Image from "next/image";
export default function page() {
  return (
    <div className="h-screen items-center justify-center md:flex">
      <div className="md:w-1/2">
        The Kalasurya Foundation was established in January 2018 with the main
        objective of creating a society without old age homes. According to Miss
        Sangeeta Patel, the founder of the organization ... &ldquo;This task is
        very challenging but not impossible. In order to maintain not only the
        spirit of joint family but also order in the society, family values and
        spirituality should be inculcated in the children from an early age
        along with education. If it is explained that marriage is not just a
        duty but a process and a responsibility of making two families into a
        one, then the formation of a prosperous society without old age homes
        can be made certain. There is no doubt that using the experiences of our
        elders can be beneficial not only to our family but also to social work,
        in doing so will make them feel mentally healthy and dignified.&ldquo;
        After nearly five years of research, Miss Sangeeta started some special
        campaigns to achieve her main objective!
      </div>
      <div className="flex items-center justify-center opacity-15 md:w-1/2">
        <Image
          alt="about"
          src="/images/founder-2.png"
          width={400}
          height={400}
        ></Image>
      </div>
    </div>
  );
}
