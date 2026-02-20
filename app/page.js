import FAQ from "../components/home/FAQ";
import GetFullAcess from "../components/home/GetFullAcess";
import Hero from "../components/home/Hero";
import Plans from "../components/home/Plans";
import Subject from "../components/home/Subject";
import Testimonial from "../components/home/Testimonial";
import { headers } from "next/headers";

export default async function Home() {
  const headersList = await headers();
  const protocol = headersList.get("x-forwarded-proto") || "http";
  const host = headersList.get("host");
  const baseUrl = `${protocol}://${host}`;

  const response = await fetch(`${baseUrl}/api/subjects`);

  if (!response.ok) {
    throw new Error("Http error", response.status);
  }

  const data = await response.json();
  const subjects = data.subjects;

  return (
    <>
      <Hero />
      <div>
        <div className="flex flex-col items-center mt-10">
          <h1 className="font-medium text-4xl md:text-[48px] text-slate-800 text-center">
            Subjects
          </h1>
          <p className="text-base/7 text-zinc-500 max-w-sm text-center mt-4">
            Choose a plan that supports your business growth and digital goals.
          </p>
        </div>
        <div className="sm:p-20 p-5 grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {subjects.map((subject, index) => {
            return index < 6 ? (
              <Subject key={subject.subject_id} subject={subject} />
            ) : (
              ""
            );
          })}
        </div>
      </div>

      <div className="">
        <div className="p-10">
          <Plans />
        </div>
      </div>
      <Testimonial />
      <FAQ />
      <GetFullAcess />
    </>
  );
}
