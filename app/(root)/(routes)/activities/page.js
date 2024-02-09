import React from "react";
import { GiTorch } from "react-icons/gi";
import ClassyCard from "../../../dev-components/Components/Utils/ClassyCard";
export default function page() {
  const data = [
    {
      key: 1,
      title: "Community Centers",
      content: `Individuals of all ages and with different social, economic & physical abilities, especially the elderly, need help from society. In this community center, elders, orphans, young ones, widows, abandoned persons, the disabled or anyone who needs support can take shelter and can experience the warmth of a family. As there is also an activity of education here, one learns to stand on own with confidence, an individual understanding the importance & spirit of co-operation is always good for human society. The person living in the old age home feels him/herself as worthless as well as helpless. We have to understand that the family is made up of people belonging to different age groups and not just with the bunch of people of same age, even in old age one can re-live one's childhood with only a child, and only an elderly person can teach the life lessons to a young person with his/her experience, so we have to accept that our society needs more of such community center and not old age homes.
        Activities, services and facilities at the community center
- Accommodation for people of all ages.
- Training and opportunity to become self-reliant.
- School, college and skill training center for children.
- Hospital.
- Manufacturing, management and sales center.
        `,
      footer:
        "સમાજમાં તમામ ઉંમરના અને વિવિધ સામાજીક-આર્થિક-શારીરિક ક્ષમતા ધરાવતી વ્યક્તિઓ, ખાસ કરીને વડીલ વૃદ્ધોને મદદ-સહારાની જરૂર પડે છે. આ કોમ્યૂનિટિ સેન્ટરમાં વડીલો, અનાથ બાળકો-યુવાનો, વિધવા સ્ત્રીઓ, ત્યક્ત વ્યક્તિઓ, દિવ્યાંગ કે કોઈપણ વ્યક્તિ જેને સહારાની જરૂર હોય એ અહી આશ્રય લઇ એક પરિવારની હુંફ મેળવી શકે છે. અહીં શિક્ષણની વ્યવસ્થા પણ હોવાથી વ્યક્તિ આત્મવિશ્વાસ સાથે પોતાના પગ પર ઉભા રહેતા શીખે છે જેથી સાથ-સહકારની ભાવનાનું મહત્વ સમજતો એક નાગરિક પણ દેશને મળી રહે છે. વૃદ્ધાશ્રમમાં રહેતી વ્યક્તિને પોતે વૃદ્ધ અને બિનઉપયોગી ઉપરાંત લાચાર હોવાનો અહેસાસ થાય છે. પરિવાર જુદી-જુદી ઉંમરના લોકોથી જ બને છે નહી કે એક સરખી ઉંમરના વ્યક્તિઓના ટોળાથી, ઘડપણમાં પણ એક બાળક સાથે જ ફરીથી પોતાનું બાળપણ જીવી શકાય અને બાળપણ હોય કે યુવાની અનુભવના પાઠ ઉંમરલાયક વ્યક્તિ જ શીખવી શકે, માટે આપણા સમાજને વૃદ્ધાશ્રમની નહીં પરંતુ કોમ્યૂનિટિ સેન્ટરની જરૂર છે એ વાત માનવી રહી. કોમ્યૂનિટિ સેન્ટરમાં થતી પ્રવૃત્તિ, સેવા અને સુવિધા - દરેક ઉંમરની વ્યક્તિ માટે રહેવા-જમવાની સુવિધા. - પગભર થવાની કેળવણી અને તક. - બાળકો માટે સ્કૂલ, કોલેજ અને સ્કિલ ટ્રેનીંગ સેન્ટર. - હોસ્પિટલ. - ઉત્પાદન, વ્યવસ્થા અને વેચાણ કેન્દ્ર.",
    },
    {
      key: 2,
      title: "Daughter's Kitchen",
      content: `In daughter's kitchen initiative Free of Cost distribution of Khichadi(Rice & Lentil Hotchpotch) & Vegetable Curry is carried out through the joint service & volunteership of elders and youth. The aim of the organization behind this activity is to provide meals to the poor, needy people and students who can not get nutritious food at home. Meals are distributed from our center every evening from 6 to 9 pm. This is a humble attempt by the organization to stop more and more people from becoming malnourished.`,
      footer: `આ પ્રવૃત્તિમાં વડીલો અને યુવાનોના સંયુક્ત સેવા-યોગદાન દ્વારા ખીચડી અને વેજીટેબલ કરીનું વિતરણ વિનામૂલ્યે કરવામાં આવે છે. આ અભિયાન પાછળ સંસ્થાનો હેતુ ગરીબ, જરૂરીયાતમંદ લોકો તથા એવા વિધાર્થીઓ કે જે ઘરનું બનેલું પોષણક્ષમ ભોજન ના મેળવી શકતા હોય તેમને ભોજન પૂરું પાડવાનો છે, અમારા સેન્ટર પરથી દરરોજ સાંજે ૬ થી ૯ દરમિયાન ભોજનનું વિતરણ કરવામાં આવે છે . વધુમાં વધુ લોકો કુપોષણનો શિકાર બનતા અટકે એ માટે સંસ્થાનો આ એક નમ્ર પ્રયાસ છે.`,
    },
    {
      key: 3,

      title: "And more",
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
    <div className="container mx-auto">
      <h1 className="relative z-10 my-8 flex w-fit gap-3 bg-white p-3  text-5xl font-extrabold shadow-max shadow-white dark:bg-slate-950  dark:shadow-maxdark">
        <GiTorch />
        Activities at Kalasurya Foundation
      </h1>
      <div className="mx-5  flex flex-col gap-10 md:m-5">{renderData()}</div>
    </div>
  );
}
