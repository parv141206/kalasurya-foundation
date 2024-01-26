import React from "react";
import { IoPersonCircleSharp } from "react-icons/io5";
import ClassyCard from "../../Utils/ClassyCard";
export default function AboutTheFounder() {
  return (
    <div className="about">
      <h1 className="relative z-10 my-8 flex gap-3 bg-white py-3 text-5xl font-extrabold shadow-max shadow-white dark:bg-slate-950 dark:shadow-maxdark">
        <IoPersonCircleSharp />
        About The Founder
      </h1>
      <div className="flex md:p-10">
        <div className="md:w-[50%]">
          <ClassyCard
            title="Sangeeta Patel"
            content="Sangeeta Patel, who settled in Ahmedabad from an early age, was born on March 3, 1979 in Denap village near Visnagar. After graduating with a degree in Commerce, she did a postgraduate course in Bharatanatyam, as well as a diploma in Computer Science, Fashion Designing, Hair & Makeup, Yoga & Meditation, Naturopathy, Culinary and many more. From a young age, the spirit of giving happiness to others and the spirit of patriotism remained paramount in life. Inspired by his father's good deeds, mother's spiritual attitude and many real life legends' stories told by her grandmother, she finally entered the field of social service with an aim of making a positive change in the society."
            footer="Kalasurya Foundation"
          />
        </div>
        <div className="founder-image h-[50%] md:w-[50%] "></div>
      </div>
    </div>
  );
}
