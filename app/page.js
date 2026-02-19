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
        <div className="mt-15 max-w-xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-black lg:text-5xl sm:text-5xl">
            Subjects
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            Amet minim mollit non deserunt ullam co est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </p>
        </div>
        <div className="p-10 grid sm:grid-cols-3 gap-10">
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
