import FAQ from "@/components/home/FAQ";
import GetFullAcess from "@/components/home/GetFullAcess";
import Hero from "@/components/home/Hero";
import Plans from "@/components/home/Plans";
import Subject from "@/components/home/Subject";
import Testimonial from "@/components/home/Testimonial";

export default async function Home() {
  async function fetchSubjects() {
    try {
      const response = await fetch("http://localhost:3000/api/subjects");
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || `HTTP error! status: ${response.status}`);
      }

      const subjects = data.subjects?.rows || [];

      if (subjects.length === 0) {
        console.log("No subjects found");
        return [];
      }

      return subjects;
    } catch (error) {
      console.error("Failed to fetch subjects:", error.message);
      return [];
    }
  }

  const subjects = await fetchSubjects();

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
            return index < 6 ? <Subject key={index} subject={subject} /> : "";
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
