import { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';

export default function About() {
  const [course, setCourse] = useState(null);
  const { category, id } = useParams();
  const [isEnrolled, setIsEnrolled] = useState(false);
  useEffect(()=>{
    const enrolled = JSON.parse(localStorage.getItem('LIBELLUS_ENROLLED')) || [];
    const index = enrolled.findIndex((enroll)=>enroll.id === id)
    setIsEnrolled(index > -1);
  },[id])
  const toggleEnrolled = () =>{
    setIsEnrolled(!isEnrolled);
    const enrolled = JSON.parse(localStorage.getItem('LIBELLUS_ENROLLED')) || [];
    const index = enrolled.findIndex((enroll)=>enroll.id === id)

    if(index > -1) enrolled.splice(index,1);
    else enrolled.push(course)

    localStorage.setItem('LIBELLUS_ENROLLED', JSON.stringify(enrolled));
  }
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
        className={`w-screen h-[550px] ${bgColor} flex flex-col justify-between items-start text-d-text font-bold gap-4 px-40 pt-28`}>
        <div className="flex flex-col gap-4 relative">
          <div className="uppercase text-2xl text-d-text px-4 py-1 rounded-lg border-2 w-fit font-normal">
            {category}
          </div>
          <div className="text-6xl w-[40vw]">{course.title}</div>
          <div className="font-light text-xl w-[40vw] line-clamp-2">{course.description}</div>
          <div className="h-fit flex text-xl rounded-xl flex-col justify-start">
            <div className="flex gap-4 ">
              {course.tags.map((tag, index) => {
                return <div className="font-normal py-1 px-4 border-[1px] rounded-lg">{tag}</div>;
              })}
            </div>
          </div>
        </div>
        <button onClick={toggleEnrolled} className={`bg-d-accent py-4 px-8 text-2xl rounded-lg relative`}>{isEnrolled ? 'Drop Course' : 'Enroll Course'}</button>
      </div>
      <div className="text-d-text px-40 flex justify-between">
        <div className=" flex flex-col gap-4 w-full">
          <h1 className="text-4xl font-bold">About this course</h1>
          <h2 className="text-xl text-gray-400 ">{course.about}</h2>
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
