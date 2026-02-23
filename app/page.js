import FAQ from "@/components/home/FAQ";
import GetFullAcess from "@/components/home/GetFullAcess";
import Hero from "@/components/home/Hero";
import Plans from "@/components/home/Plans";
import Subject from "@/components/home/Subject";
import Testimonial from "@/components/home/Testimonial";
// import { headers } from "next/headers";
import { stackServerApp } from "@/stack/server";

export default async function Home() {
  // In a Server Component or API route
  const user = await stackServerApp.getUser();
  if (user) {
    console.log("User is signed in:", user);
  } else {
    console.log("User is not signed in");
  }
  // const headersList = await headers();
  // const protocol = headersList.get("x-forwarded-proto") || "http";
  // const host = headersList.get("host");
  // const baseUrl = `${protocol}://${host}`;

  // const response = await fetch(`${baseUrl}/api/subjects`);

  // if (!response.ok) {
  //   throw new Error("Http error", response.status);
  // }

  // const data = await response.json();
  // const subjects = data.subjects;

  const subjects = [
    {
      subject_name: "Mathematics",
      description:
        "Study of numbers, quantities, and shapes. Includes algebra, geometry, and calculus.",
      grade_range_start: 1,
      grade_range_end: 12,
    },
    {
      subject_name: "English Language Arts",
      description:
        "Reading, writing, speaking, and listening skills. Includes literature, grammar, and composition.",
      grade_range_start: 1,
      grade_range_end: 12,
    },
    {
      subject_name: "Science",
      description:
        "Exploration of the natural world through biology, chemistry, and physics.",
      grade_range_start: 1,
      grade_range_end: 12,
    },
    {
      subject_name: "History",
      description:
        "Study of past events, civilizations, and their impact on the present.",
      grade_range_start: 6,
      grade_range_end: 12,
    },
    {
      subject_name: "Physical Education",
      description: "Physical fitness, sports, and health education.",
      grade_range_start: 1,
      grade_range_end: 12,
    },
    {
      subject_name: "Art",
      description:
        "Creative expression through drawing, painting, sculpture, and digital media.",
      grade_range_start: 1,
      grade_range_end: 12,
    },
    {
      subject_name: "Music",
      description:
        "Vocal and instrumental instruction, music theory, and appreciation.",
      grade_range_start: 1,
      grade_range_end: 12,
    },
    {
      subject_name: "Computer Science",
      description:
        "Programming, algorithms, web development, and computational thinking.",
      grade_range_start: 9,
      grade_range_end: 12,
    },
    {
      subject_name: "Foreign Language - Spanish",
      description:
        "Introduction to Spanish language, culture, and communication.",
      grade_range_start: 7,
      grade_range_end: 12,
    },
    {
      subject_name: "Foreign Language - French",
      description:
        "Introduction to French language, culture, and communication.",
      grade_range_start: 7,
      grade_range_end: 12,
    },
    {
      subject_name: "Chemistry",
      description:
        "Study of matter, its properties, composition, and reactions.",
      grade_range_start: 10,
      grade_range_end: 12,
    },
    {
      subject_name: "Physics",
      description:
        "Study of matter, energy, motion, and forces in the universe.",
      grade_range_start: 10,
      grade_range_end: 12,
    },
    {
      subject_name: "Biology",
      description:
        "Study of living organisms, their structure, function, and evolution.",
      grade_range_start: 9,
      grade_range_end: 12,
    },
    {
      subject_name: "Algebra",
      description:
        "Mathematical concepts including equations, functions, and graphs.",
      grade_range_start: 8,
      grade_range_end: 11,
    },
    {
      subject_name: "Geometry",
      description: "Study of shapes, sizes, and properties of space.",
      grade_range_start: 9,
      grade_range_end: 11,
    },
    {
      subject_name: "World Literature",
      description:
        "Study of literary works from various cultures and time periods.",
      grade_range_start: 9,
      grade_range_end: 12,
    },
    {
      subject_name: "Economics",
      description: "Study of production, consumption, and transfer of wealth.",
      grade_range_start: 11,
      grade_range_end: 12,
    },
    {
      subject_name: "Government",
      description:
        "Study of political systems, civic rights, and responsibilities.",
      grade_range_start: 11,
      grade_range_end: 12,
    },
    {
      subject_name: "Environmental Science",
      description:
        "Study of the environment and solutions to environmental problems.",
      grade_range_start: 9,
      grade_range_end: 12,
    },
    {
      subject_name: "Health",
      description: "Personal health, wellness, and life skills education.",
      grade_range_start: 6,
      grade_range_end: 12,
    },
  ];

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
