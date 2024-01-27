import React from "react";
import Layout_1 from "./components-mission/Layout_1";
import Layout_2 from "./components-mission/Layout_2";
import Layout_3 from "./components-mission/Layout_3";

export default function page() {
  const data = [
    {
      title: "A Joint Family Is a Happy Family",
      content: `
        At Kalasurya Foundation, we believe the warmth of family is like sunshine on a chilly day. It nourishes, it comforts, and it lights the way forward. We see firsthand the joy and richness that comes from living in joint families, where generations weave their stories together.
        
        But sometimes, life throws curveballs. We understand that caring for elders can be challenging, and alternative options might seem tempting. However, sending parents to old age homes can leave a hollowness, both in their hearts and yours.
        
        Remember, your parents have been your pillars, your anchor in life's storms. Let's return the favor. Let's build homes that echo with laughter, filled with the wisdom of grandparents and the vibrancy of youth. Let's keep our families close, not just in blood, but in love and shared experiences. That's the true legacy we can build, together.`,
      image1: "/images/CompleteMissions/JointFamily/1.jpg",
      image2: "/images/CompleteMissions/JointFamily/2.png",
      image3: "/images/CompleteMissions/JointFamily/3.jpg",
    },
  ];
  return (
    <div>
      <Layout_1
        title={data[0].title}
        content={data[0].content}
        image1={data[0].image1}
        image2={data[0].image2}
        image3={data[0].image3}
      />
      <Layout_2 />
      <Layout_3 />
    </div>
  );
}
