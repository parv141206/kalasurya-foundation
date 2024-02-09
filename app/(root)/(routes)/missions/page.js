import React from "react";
import Layout_1 from "./components-mission/Layout_1";
import Layout_2 from "./components-mission/Layout_2";
import Layout_3 from "./components-mission/Layout_3";
import YouTubeCard from "@/app/dev-components/Components/Utils/YouTubeCard";
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
    {
      title: "Dikari Ne Apo Pankh",
      content1:
        "The aim of the campaign is to educate the daughters about the values of life and to make them aware of the spiritual aspects so that they can stand on their own feet in difficult situations, become mentally strong and give the right direction to their life and keep the whole family united.",
      content2:
        "The campaign includes various competitions, seminars, workshops and pic- nics for the daughters, topics covered during these activities mainly include fetal rites (garbha sanskar), yoga-meditation, physical and mental beauty, legal information, self-defense, understanding of menstruation and products used during it, correct way of choosing innerwear, hair-makeup, kitchen as a pharmacy, menopause, child upbringing and the difficulties of old age, which are covered under the following heads/activities... <br/> <br/> <ul class='list-disc list-inside'>  <li>Sangee the light</li> <li>Today's Women</li> <li>Devmai</li> </ul>",
      image1: "/images/Missions/2.jpg",
      image2: "/images/Missions/4.jpg",
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
      <div className="flex items-center justify-center">
        <YouTubeCard
          title="Interviewing a Thriving Joint Family of 125 Members!"
          link="https://www.youtube.com/watch?v=gBEAKBnTP6k"
        />
      </div>
      <Layout_2
        title={data[1].title}
        content1={data[1].content1}
        content2={data[1].content2}
        image1={data[1].image1}
        image2={data[1].image2}
      />
      <ul className="container mx-auto list-inside rounded-3xl bg-[var(--secondary-light)] p-7 dark:bg-[var(--primary-dark)]">
        <li>
          <div className="heading-font text-3xl">Sangee the Light</div>

          <div>
            The purpose of this campaign is to educate the daughters about the
            products used during menstruation period, harm caused by the use of
            inappropriate things and to encourage them to use the menstrual
            cups. Menstrual cups are distributed free of cost (in collaboration
            with donors) at various schools, colleges, corporate houses,
            women&apos;s associations and residential areas. Programs like Bike
            Rally, Bicycle Rally, Marathon, Seminar etc. are also organized to
            bring awareness in general about this subject.
          </div>
          <h1 className="text-2xl">Have a look at following videos,</h1>
          <div className="flex items-center justify-center">
            <YouTubeCard
              title="Menstrual Cups experiences in Rajkot jail."
              link="https://www.youtube.com/watch?v=Q69_kdm1pvs"
            />
            <YouTubeCard
              title="Menstrual Cups awareness seminar."
              link="https://www.youtube.com/watch?v=87OwF8l-xWg"
            />
          </div>
        </li>
        <li className="">
          <div className="heading-font text-3xl">Todays Women</div>

          <div>
            The main objective of this campaign is to organize programs to
            understand the physical and mental changes that takes place in women
            after marriage and to give an appropriate understanding of their
            diagnosis. Here experts give understanding about how to protect a
            person in childhood and old age, from the psychological and physical
            nutritional side. Women are also given training to keep their body
            fit and healthy so that they can take care of the family along with
            themselves and make life enjoyable.
          </div>
        </li>
        <li className="">
          <div className="heading-font text-3xl">Devmai</div>

          <div>
            Under Devmai, BharatNatyam dance training is imparted to girls and
            women above 4 years of age for a modest fee. The aim of doing this
            is to impart spi- ritual values while being away from the
            commercialization of it. As part of efforts to maintain their
            connect with our organization, In addition to dance training the
            daughters are made aware of their spiritual and family values so
            that they can be successful in life after studying the art art for 7
            years. From time to time the &quot;Arangetram&quot; is presented by
            the girls in the temple precin- cts with the intention of devotion
            so that the main purpose of our art i.e. de- votion remains alive.
          </div>
          <h1 className=" text-2xl">Have a look at following videos,</h1>
          <div className="flex flex-wrap items-center justify-center">
            <YouTubeCard
              title="Ms Bhakti Ramanuj Aarangatram"
              link="https://www.youtube.com/watch?v=JthV1deIJrU"
            />
            <YouTubeCard
              title="Ramayan I Bhakti Ramanuj I Raag : Malika Taal : Aadi"
              link="https://www.youtube.com/watch?v=QXN3Fd4DtBg"
            />
            <YouTubeCard
              title="Puspanjali I Bhakti Ramanuj "
              link="https://www.youtube.com/watch?v=2gbVdTl3gEs"
            />
          </div>
        </li>
      </ul>
    </div>
  );
}
