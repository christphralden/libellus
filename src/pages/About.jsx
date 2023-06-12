import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function About() {
  const [course, setCourse] = useState(null);
  const { category, id } = useParams();
  useEffect(() => {
    const data = require("../lib/data/CoursesData.json");
    const categoryCourses = data.courses[category];
    const foundCourse = categoryCourses.find((c) => c.id === id);
    setCourse(foundCourse);
  }, [category, id]);

  if (!course) return <div>Loading...</div>;

  let bgColor, brColor;
  if (course.difficulty === "Beginner") {
    bgColor = "bg-gradient-to-b from-d-easy";
    brColor = "border-d-easy";
  } else if (course.difficulty === "Intermediate") {
    bgColor = "bg-gradient-to-b from-d-med";
    brColor = "border-d-med";
  } else if (course.difficulty === "Advanced") {
    bgColor = "bg-gradient-to-b from-d-hard";
    brColor = "border-d-hard";
  }

  return (
    <div
      className={`w-screen h-[500px] ${bgColor} flex flex-col justify-center items-center text-d-text font-bold`}
    >
      <div className="text-6xl mb-6">{course.title}</div>
      <div className="font-light text-xl text-center w-[1000px] line-clamp-2">
        {course.description}
      </div>
    </div>
  );
}
