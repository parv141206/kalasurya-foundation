import { Suspense, lazy } from "react";
import Goals from "./dev-components/Components/Common/Home/Goals";

export default function Home() {
  const Missions = lazy(
    () => import("@/app/dev-components/Components/Common/Home/Missions"),
  );
  const Updates = lazy(
    () => import("@/app/dev-components/Components/Common/Home/Updates"),
  );

  return (
    <div className="container relative mx-auto md:px-5">
      <div className="absolute h-[100%] border-4 border-[var(--secondary-light)] dark:border-[var(--secondary-dark)]"></div>
      <Goals />
      <Suspense fallback={<div>Loading...</div>}>
        <Missions />
        <Updates />
      </Suspense>
    </div>
  );
}
