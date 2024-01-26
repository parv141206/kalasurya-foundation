import React from "react";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
export default function Footer() {
  return (
    <div className=" mt-10 flex flex-col justify-between gap-5 bg-[var(--primary-light)] p-8 dark:bg-slate-900 md:flex-row md:items-center">
      <div>
        <div className="text-3xl font-extrabold">Kalasurya Foundation</div>
        <div className="text-xl">From human to humanity</div>
      </div>
      <div className="flex flex-col gap-4">
        <a
          target="_blank"
          href="https://www.instagram.com/kalasuryafoundation"
          className="flex items-center gap-5"
        >
          <FaSquareInstagram style={{ width: "1.5rem", height: "1.5rem" }} />
          @kalasuryafoundation
        </a>
        <a
          target="_blank"
          href="https://www.facebook.com/kalasuryafoundation"
          className="flex items-center gap-5"
        >
          <FaFacebook style={{ width: "1.5rem", height: "1.5rem" }} />
          @Kalasurya Foundation
        </a>
        <a
          target="_blank"
          href="https://twitter.com/KalasuryaSanju"
          className="flex items-center gap-5"
        >
          <FaXTwitter style={{ width: "1.5rem", height: "1.5rem" }} />
          @Kalasuryasanju
        </a>
        <a
          target="_blank"
          href="https://www.youtube.com/@KalasuryaFoundation"
          className="flex items-center gap-5"
        >
          <FaYoutube style={{ width: "1.5rem", height: "1.5rem" }} />
          @KalasuryaFoundation
        </a>
      </div>
    </div>
  );
}
