import { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';

export default function About() {
  const [course, setCourse] = useState(null);
  const { category, id } = useParams();
  const [isEnrolled, setIsEnrolled] = useState(false);
  useEffect(() => {
    const enrolled = JSON.parse(localStorage.getItem('LIBELLUS_ENROLLED')) || [];
    const index = enrolled.findIndex((enroll) => enroll.id === id);
    setIsEnrolled(index > -1);
  }, [id]);

  const toggleEnrolled = () => {
    setIsEnrolled(!isEnrolled);
    const enrolled = JSON.parse(localStorage.getItem('LIBELLUS_ENROLLED')) || [];
    const index = enrolled.findIndex((enroll) => enroll.id === id);

    if (index > -1) enrolled.splice(index, 1);
    else enrolled.push(course);

    localStorage.setItem('LIBELLUS_ENROLLED', JSON.stringify(enrolled));
  };

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
        className={`w-screen h-[550px] ${bgColor} flex flex-col justify-between items-start text-d-text font-bold gap-8 px-6 md:px-12 lg:px-16 xl:px-40 pt-36`}>
        <div className="flex flex-col w-full gap-4 relative">
          <div className="uppercase text-2xl text-d-text px-4 py-1 rounded-lg border-2 w-fit font-normal">
            {category}
          </div>
          <div className="text-4xl w-full md:text-6xl">{course.title}</div>
          <div className="font-light text-md w-full line-clamp-3 md:text-xl">{course.description}</div>
          <div className="h-fit flex text-lg rounded-xl flex-col justify-start md:text-xl ">
            <div className="flex gap-4 overflow-x-scroll">
              {course.tags.map((tag, index) => {
                return <div key={index} className="font-normal text-sm py-1 px-2 border-2 rounded-lg md:px-4 w-fit whitespace-nowrap">{tag}</div>;
              })}
            </div>
          </div>
        </div>
        <button
          onClick={toggleEnrolled}
          className={`bg-d-accent py-4 px-8 text-xl rounded-lg relative md:text-2xl`}>
          {isEnrolled ? 'Drop Course' : 'Enroll Course'}
        </button>
      </div>
      <div className="text-d-text flex justify-between px-6 md:px-12 lg:px-16 xl:px-40">
        <div className=" flex flex-col gap-2 w-full">
          <h1 className="text-2xl font-bold md:text-3xl">What you will learn</h1>
          <h2 className="text-md text-gray-400 md:text-xl">{course.about}</h2>
        </div>
      </div>

      <div className="flex flex-col px-6 md:px-12 lg:px-16 xl:px-40">
        {course.topics.map((topic, index) => {
          return (
            <div
              key={topic.lessonID}
              className="text-d-text py-4 border-b-[1px] border-d-secondary md:py-8">
              <h2 className="text-md text-gray-400 md:text-lg">Lesson {index + 1}</h2>
              <h1 className="text-xl font-bold capitalize md:text-xl">{topic.title}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}
