import SubjectCard from "@/components/practice_exercises/SubjectCard";

async function page({}) {
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
    <div>
      <div className="pt-10 sm:p-20 grid sm:grid-cols-3 gap-5">
        {subjects.map((subject) => {
          return <SubjectCard key={subject.subject_id} subject={subject} />;
        })}
      </div>
    </div>
  );
}

export default page;
