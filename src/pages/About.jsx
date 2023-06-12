import { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';

export default function About() {
  const [course, setCourse] = useState(null);
  const { category, id } = useParams();
  useEffect(() => {
    const data = require('../lib/data/CoursesData.json');
    const categoryCourses = data.courses[category];
    const foundCourse = categoryCourses.find((c) => c.id === id);
    setCourse(foundCourse);
  }, [category, id]);

  if (!course) return <div>Loading...</div>;

  let bgColor, brColor;
  if (course.difficulty === 'Beginner') {
    bgColor = 'bg-gradient-to-b from-d-easy';
    brColor = 'border-d-easy';
  } else if (course.difficulty === 'Intermediate') {
    bgColor = 'bg-gradient-to-b from-d-med';
    brColor = 'border-d-med';
  } else if (course.difficulty === 'Advanced') {
    bgColor = 'bg-gradient-to-b from-d-hard';
    brColor = 'border-d-hard';
  }
  return (
    <div className="flex flex-col gap-12">
      <div
        className={`w-screen h-[500px] ${bgColor} flex flex-col justify-between items-start text-d-text font-bold gap-4 px-40 `}>
        <div className="flex flex-col gap-4 relative top-36">
          <div className="uppercase text-2xl text-d-text px-4 py-1 rounded-lg border-2 w-fit font-normal">
            {category}
          </div>
          <div className="text-6xl w-[40vw]">{course.title}</div>
          <div className="font-light text-xl w-[40vw] line-clamp-2">{course.description}</div>
        </div>
        <button className="bg-d-accent py-4 px-8 text-2xl rounded-lg relative">Enroll Course</button>
      </div>
      <div className='text-d-text px-40 flex justify-between'>
        <div className=" flex flex-col gap-4 w-1/2">
          <h1 className="text-4xl font-bold">About this course</h1>
          <h2 className="text-xl text-gray-400">{course.about}</h2>
        </div>
        <div className='h-fit flex w-[30%] border-2 px-4 py-2 rounded-xl'>
          {course.tags.map((tag, index)=>{
            return index === tag.length - 1 ? tag : `${tag}, `;
          })}
        </div>
      </div>

      <div className="flex flex-col  px-40">
        {course.topics.map((topic, index) => {
          return (
            <div
              key={topic.lessonID}
              className="text-d-text py-8 border-b-[1px] border-d-secondary">
              <h2 className="text-xl text-gray-400">Lesson {index + 1}</h2>
              <h1 className="text-2xl font-bold uppercase">{topic.title}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}
