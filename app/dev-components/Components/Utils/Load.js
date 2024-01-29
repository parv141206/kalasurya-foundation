import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
export default function Load() {
  return (
    <div className="absolute left-0 top-0 flex h-[100vh] w-[100vw] items-center justify-center bg-white dark:bg-slate-950">
      <div className="animate-spin">
        <AiOutlineLoading3Quarters />
      </div>
    </div>
  );
}
