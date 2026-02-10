import FAQ from "../components/home/FAQ";
import GetFullAcess from "../components/home/GetFullAcess";
import Hero from "../components/home/Hero";
import Plans from "../components/home/Plans";
import Subject from "../components/home/Subject";
import Testimonial from "../components/home/Testimonial";

export default function Home() {
  const subjects = [
    {
      id: 1,
      name: "Mathematics",
      description:
        "Basic counting, arithmetic, and problem-solving (grades 1-5); algebra, geometry, and advanced math (grades 6-12).",
      image:
        "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h-300&fit=crop",
    },
    {
      id: 2,
      name: "Language Arts",
      description:
        "Reading, writing, spelling, grammar, and comprehension skills development for all grade levels.",
      image:
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h-300&fit=crop",
    },
    {
      id: 3,
      name: "Science",
      description:
        "Nature exploration (grades 1-3); life/earth science (grades 4-6); biology, chemistry, physics (grades 7-12).",
      image:
        "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h-300&fit=crop",
    },
    {
      id: 4,
      name: "Social Studies",
      description:
        "Community helpers and maps (grades 1-3); state/national history (grades 4-8); world history/government (grades 9-12).",
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h-300&fit=crop",
    },
    {
      id: 5,
      name: "Art",
      description:
        "Basic drawing, coloring, and crafts (grades 1-3); art techniques and art history (grades 4-12).",
      image:
        "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h-300&fit=crop",
    },
    {
      id: 6,
      name: "Music",
      description:
        "Singing, rhythm games, and basic instruments (grades 1-5); music theory, band, or choir (grades 6-12).",
      image:
        "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h-300&fit=crop",
    },
    {
      id: 7,
      name: "Physical Education",
      description:
        "Basic movement, games, and teamwork (grades 1-5); sports, fitness, and health education (grades 6-12).",
      image:
        "https://images.unsplash.com/photo-1549060279-7e168fce7090?w=400&h-300&fit=crop",
    },
    {
      id: 8,
      name: "Computer Basics",
      description:
        "Mouse/keyboard skills and educational games (grades 1-3); typing, internet safety, basic software (grades 4-12).",
      image:
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h-300&fit=crop",
    },
    {
      id: 9,
      name: "Health",
      description:
        "Hygiene, nutrition, and safety (grades 1-5); human development, mental health, and wellness (grades 6-12).",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h-300&fit=crop",
    },
    {
      id: 10,
      name: "Reading",
      description:
        "Phonics and early reading (grades 1-2); reading fluency and comprehension (grades 3-12).",
      image:
        "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h-300&fit=crop",
    },
    {
      id: 11,
      name: "Writing",
      description:
        "Letter formation and simple sentences (grades 1-2); paragraphs, essays, and research papers (grades 3-12).",
      image:
        "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h-300&fit=crop",
    },
    {
      id: 12,
      name: "Geography",
      description:
        "Maps, continents, and oceans (grades 2-5); countries, cultures, and physical geography (grades 6-12).",
      image:
        "https://images.unsplash.com/photo-1528164344705-47542687000d?w=400&h-300&fit=crop",
    },
    {
      id: 13,
      name: "Foreign Language",
      description:
        "Optional: Basic vocabulary and songs (grades K-5); structured language learning (grades 6-12).",
      image:
        "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=400&h-300&fit=crop",
    },
    {
      id: 14,
      name: "Algebra",
      description:
        "Typically offered in middle school (grades 7-8) and high school as Algebra I and II.",
      image:
        "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h-300&fit=crop",
    },
    {
      id: 15,
      name: "Geometry",
      description:
        "High school mathematics focusing on shapes, angles, proofs, and spatial reasoning.",
      image:
        "https://images.unsplash.com/photo-1589256469067-ea99122bbdc4?w=400&h-300&fit=crop",
    },
    {
      id: 16,
      name: "Biology",
      description:
        "High school life science covering cells, genetics, ecosystems, and human body systems.",
      image:
        "https://images.unsplash.com/photo-1530026405186-1d7d6a343b0c?w=400&h-300&fit=crop",
    },
    {
      id: 17,
      name: "Chemistry",
      description:
        "High school physical science studying matter, elements, compounds, and chemical reactions.",
      image:
        "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?w=400&h-300&fit=crop",
    },
    {
      id: 18,
      name: "Physics",
      description:
        "High school science exploring motion, forces, energy, and the laws of the physical world.",
      image:
        "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h-300&fit=crop",
    },
    {
      id: 19,
      name: "U.S. History",
      description:
        "American history from colonization to present day, typically taught in middle and high school.",
      image:
        "https://images.unsplash.com/photo-1580130379624-3a069adbffc5?w=400&h-300&fit=crop",
    },
    {
      id: 20,
      name: "World History",
      description:
        "Survey of global civilizations, events, and cultures from ancient times to modern era.",
      image:
        "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h-300&fit=crop",
    },
    {
      id: 21,
      name: "Civics/Government",
      description:
        "Study of political systems, citizenship, rights, and responsibilities (grades 8-12).",
      image:
        "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?w=400&h-300&fit=crop",
    },
    {
      id: 22,
      name: "Economics",
      description:
        "High school social science covering money, markets, supply/demand, and personal finance.",
      image:
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h-300&fit=crop",
    },
    {
      id: 23,
      name: "Computer Science",
      description:
        "Coding, programming, and digital literacy skills for middle and high school students.",
      image:
        "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&h-300&fit=crop",
    },
    {
      id: 24,
      name: "Literature",
      description:
        "Reading and analyzing novels, poetry, drama, and literary techniques (grades 6-12).",
      image:
        "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?w=400&h-300&fit=crop",
    },
    {
      id: 25,
      name: "Drama/Theater",
      description:
        "Performance, stagecraft, and dramatic literature for elementary through high school.",
      image:
        "https://images.unsplash.com/photo-1514306191717-452ec28c7814?w=400&h-300&fit=crop",
    },
    {
      id: 26,
      name: "Home Economics",
      description:
        "Life skills including cooking, sewing, budgeting, and home management.",
      image:
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h-300&fit=crop",
    },
    {
      id: 27,
      name: "Driver's Education",
      description:
        "High school course covering traffic laws, vehicle operation, and road safety.",
      image:
        "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=400&h-300&fit=crop",
    },
    {
      id: 28,
      name: "Psychology",
      description:
        "High school elective studying human behavior, brain function, and mental processes.",
      image:
        "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h-300&fit=crop",
    },
    {
      id: 29,
      name: "Business Education",
      description:
        "High school courses in entrepreneurship, marketing, accounting, and management.",
      image:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h-300&fit=crop",
    },
    {
      id: 30,
      name: "Study Skills",
      description:
        "Organization, time management, note-taking, and test preparation strategies.",
      image:
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h-300&fit=crop",
    },
  ];

  return (
    <>
      <Hero />
      <div>
        <h2 className="text-3xl font-bold text-center pt-10">Subjects</h2>
        <div className="p-10 grid sm:grid-cols-3 gap-10">
          {subjects.map((subject, index) => {
            return index < 6 ? (
              <Subject key={subject.id} subject={subject} />
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
