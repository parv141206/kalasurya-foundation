"use client";
import React, { useContext, useEffect, useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { FaHome } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaCloudSun } from "react-icons/fa";
export default function Navbar() {
  const [expanded, setExpanded] = useState(false);
  const path = usePathname();
  console.log(path);
  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
  };
  const isActive = (pathname) => {
    return path === pathname
      ? "bg-[var(--primary-light)] dark:bg-[var(--primary-dark)] p-3 rounded-lg"
      : "";
  };
  return (
    <div className={`relative w-full px-5 py-5 md:px-10`}>
      <div className="flex flex-col justify-between font-bold dark:text-white md:flex-row">
        <ul className="flex justify-between">
          <div className="heading-font font-extrabold">
            Kalasurya Foundation
          </div>
          <button className="md:hidden" onClick={() => setExpanded(!expanded)}>
            <CiMenuBurger />
          </button>
        </ul>
        <ul
          className={`flex items-center justify-center gap-3 ${expanded ? "flex-col md:flex-row" : "hidden md:flex"} `}
        >
          <li>
            <Link href="/">
              <FaHome style={{ width: "1.5rem", height: "1.5rem" }} />
            </Link>
          </li>
          <li>
            <Link href="/activities" className={isActive("/activities")}>
              Activities
            </Link>
          </li>
          <li>
            <Link href="/milestones" className={isActive("/milestones")}>
              Milestones
            </Link>
          </li>
          <li>
            <Link href="/missions" className={isActive("/missions")}>
              Missions
            </Link>
          </li>
          <li>
            <Link href="/about" className={isActive("/about")}>
              About
            </Link>
          </li>
          <li>
            <Link href="/donate" className={isActive("/donate")}>
              Donate
            </Link>
          </li>
          <ul className="md:hidden" onClick={toggleTheme}>
            <FaCloudSun className="text-3xl" />
          </ul>
        </ul>
        <ul className="hidden md:block" onClick={toggleTheme}>
          <FaCloudSun className="text-3xl" />
        </ul>
      </div>
    </div>
  );
}
