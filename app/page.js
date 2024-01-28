import { Suspense, lazy } from "react";
import Goals from "./dev-components/Components/Common/Home/Goals";
import AboutTheFounder from "./dev-components/Components/Common/Home/AboutTheFounder";
import Divider from "./dev-components/Components/Utils/Divider";

export const metadata = {
  title: "Kalasurya Foundation",
  description: "Kalasurya Foundation",
};
export default function Home() {
  const Missions = lazy(
    () => import("@/app/dev-components/Components/Common/Home/Missions"),
  );
  const Updates = lazy(
    () => import("@/app/dev-components/Components/Common/Home/Updates"),
  );

  return (
    <div className="home container relative mx-auto md:px-5">
      {/* <div className="absolute h-[100%] border-4 border-slate-200 dark:border-[var(--secondary-dark)]"></div> */}
      <Goals />
      <div className="w-full">
        <div className="fancy-card shadow-custom-shadow dark:shadow-custom-shadow-dark">
          <div className="text-xl">
            Join us in this adventure of Human to Humanity!
          </div>
        </div>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Missions />
        <Updates />
        <AboutTheFounder />
      </Suspense>
    </div>
  );
}
