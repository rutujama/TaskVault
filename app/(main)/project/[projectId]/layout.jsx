import { Suspense } from "react";
import { BarLoader } from "react-spinners";

export default async function ProjectLayout({ children }) {
  return (
    <div className="mx-auto">
      <Suspense fallback={<span>Loading Projects....</span>}>
        {children}
      </Suspense>
    </div>
  );
}
