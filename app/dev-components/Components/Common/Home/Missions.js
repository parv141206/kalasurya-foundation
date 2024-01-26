import React from "react";
import ClassyCard from "../../Utils/ClassyCard";
import { GiTorch } from "react-icons/gi";
export default function Missions() {
  const data = [
    {
      key: 1,
      title: "Joint Family is a Happy Family",
      content:
        "At Kalasurya Foundation, we believe the warmth of family is like sunshine on a chilly day. It nourishes, it comforts, and it lights the way forward. We see firsthand the joy and richness that comes from living in joint families, where generations weave their stories together.",
      footer:
        "કાલસૂર્ય ફાઉન્ડેશનમાં, અમે માનીએ છીએ કે પરિવારની હૂંફ ઠંડીના દિવસે સૂર્યપ્રકાશ જેવી છે. તે પોષણ આપે છે, તે આરામ આપે છે અને તે આગળના માર્ગને પ્રકાશિત કરે છે. સંયુક્ત કુટુંબોમાં રહેવાથી જે આનંદ અને સમૃદ્ધિ મળે છે તે આપણે સૌ પ્રથમ જોઈ શકીએ છીએ.",
      image: [1, "/images/goals/1-family.jpg"],
    },
    {
      key: 2,
      title: "Devmai",
      content:
        "Deep within every girl, there's a dancer waiting to take flight. At Kalasurya Foundation, we see that spark, that flicker of rhythm and grace. We believe every girl deserves a chance to let that flame burn bright. That's why we offer Bharatnatyam, a dance as rich as history itself, to girls. We open our doors wide, making sure cost is never a barrier to their dreams.",
      footer:
        "દેવમઈ અંતર્ગત ૪ વર્ષથી વધુ વયની દીકરીઓને તથા સ્ત્રીઓને સામાન્ય ફી લઇ ભરતનાટ્યમ નૃત્યની તાલીમ આપવામાં આવે છે જેનો મુખ્ય ઉદ્દેશ્ય શાસ્ત્રીય નૃત્યમાં પ્રસરેલા વેપારીકરણથી દૂર રહી આધ્યાત્મિક મૂલ્યોને વધુમાં વધુ લોકો સુધી પહોંચાડવાનો છે.",
      image: [2, "/images/goals/2.jpg"],
    },
    {
      key: 3,

      title: "Protecting Earth",
      content:
        "Mother earth is the generator of not only human life but life itself. Kalasurya foundation through it's conscious efforts in protecting the planet conducts various programs that provides information on water conservation, organis- es tree plantation programs, promotes the minimum possible use of plastic products as well as imparts the knowledge about the true methods of waste disposal. All these activities also helps in making citizens more conscious to- wards such issues.",
      footer:
        "માત્ર માનવ જીવનની જ નહીં, જીવ માત્રની જનક એવી આપણી આ પૃથ્વીના રક્ષણ માટે જાગૃત એવું કલાસૂર્યા ફાઉન્ડેશન જળ બચાવને લાગતી માહિતી આપવા, વૃક્ષારોપણ કાર્યક્રમોનું આયોજન, પ્લાસ્ટિકના ઉપયોગને ટાળવા તેમજ તેના વપરાશથી થતાં નુકસાન વિશે જણાવતા, કચરાનો નિકાલ કરવાની સાચી પદ્ધતિની સમજ આપતા અનેક કાર્યક્રમો સમયાંતરે કરતુ રહે છે. આ સઘળી પ્રવૃત્તિઓ અનેક જાગૃત નાગરિકોના સર્જનમાં પણ મદદકરતાં બની રહે છે",
      image: [1, "/images/goals/3.jpg"],
    },
    {
      key: 4,
      title: "Power of Youth",
      content:
        "All the young members of this club are given an identity card along with a 'declaration on oath' that they follow. This youth club through various programs all over Gujarat spreads awareness for traffic rules, de-addiction, career along with various social issues. Such activities carried out by the youth leads the society in the right direction specially when the future of the country is in their hands.",
      footer:
        "આ ક્લબના તમામ યુવાન મેમ્બર્સને આઈ.ડી. કાર્ડ સાથે એક પ્રતિજ્ઞા પત્ર આપવામાં આવે છે જેને અનુસરવું ફરજીયાત છે. ટ્રાફિકના નિયમો, વ્યસન મુક્તિ, કરિઅર (કારકિર્દી) અને સામાજીક જીવનના તમામ મુદ્દાઓને લગતાં અનેક કાર્યક્રમો કરતી આ ક્લબ સમગ્ર ગુજરાતમાં સક્રિય છે. યુવાનોના હાથમાં જ જ્યારે દેશનું સુકાન હોય ત્યારે યુવાનો દ્વારા જ થતી આવી પ્રવૃત્તિઓ સમાજને સાચી દિશામાં દોરવાનું કાર્ય કરે છે.",
      image: [2, "/images/goals/4.jpg"],
    },
    {
      key: 5,
      title: "Night Learning",
      content:
        "This initiative helps kids living in slums, women and men in learning Hindi & English with writing & reading skills so they can lead a self- sufficient life while eliminating the act of begging from their daily lives.",
      footer:
        "આ અભિયાન ફુટપાથ પર અને ઝૂંપડામાં રહેતા બાળકો, સ્ત્રીઓ અને પુરુષો ગુજરાતી, હિંદી અને અંગ્રેજી ભાષા લખતાં-વાંચતા શીખે અને સાથે તેઓ ભીખ માંગવાના કામથી દૂર રહી એક સ્વાવલંબી જીવન જીવવા તરફ વળે એ દિશામાં પ્રયત્નશીલ રહે છે.",
    },
  ];
  const renderData = () => {
    let counter = -1;
    return data.map((data) => {
      counter++;
      return counter % 2 == 0 ? (
        <div key={data.key} className="relative  md:flex">
          <div className="relative z-[10] shadow-white md:w-[60%] md:shadow-max  md:dark:shadow-maxdark">
            <ClassyCard
              title={data.title}
              content={data.content}
              footer={data.footer}
              image={data.image}
            />
          </div>
          <div className="bottom-[-35%] right-[25%] hidden h-[80%] w-[25%]  border-8  border-[var(--primary-light)] md:absolute md:block"></div>
        </div>
      ) : (
        <div key={data.key} className="relative flex">
          <div className="bottom-[-35%] left-[25%] hidden h-[80%] w-[25%]  border-8  border-[var(--primary-light)] md:absolute md:block"></div>
          <div className="md:w-[40%]"></div>
          <div className="relative z-10 md:w-[60%] md:shadow-max md:dark:shadow-maxdark">
            <ClassyCard
              title={data.title}
              content={data.content}
              footer={data.footer}
              image={data.image}
            />
          </div>
        </div>
      );
    });
  };
  return (
    <div className="missions">
      <h1 className="relative z-10 my-8 flex gap-3 bg-white p-3 text-5xl font-extrabold shadow-max shadow-white dark:bg-slate-950 dark:shadow-maxdark">
        <GiTorch />
        Our ongoing missions
      </h1>
      <div className="mx-5  flex flex-col gap-10 md:m-5">{renderData()}</div>
    </div>
  );
}
