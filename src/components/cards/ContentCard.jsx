import { Link } from 'react-router-dom';

export default function ContentCard({ courses, category }) {
  let bgColor, brColor;
  if (courses.difficulty === 'Beginner') {
    bgColor = 'bg-d-easy';
    brColor = 'border-d-easy';
  } else if (courses.difficulty === 'Intermediate') {
    bgColor = 'bg-d-med';
    brColor = 'border-d-med';
  } else if (courses.difficulty === 'Advanced') {
    bgColor = 'bg-d-hard';
    brColor = 'border-d-hard';
  }

  return (
    <Link to={`/details/${category}/${courses.id}`}>
      <div
        className={`text-d-text bg-d-secondary w-60 h-60 rounded-md ${brColor} border-2 flex-col shadow-md mx-auto justify-between md:h-64 md:w-80 relative`}>
        <div className={`w-full ${bgColor} bg-d-easy px-4 py-2 rounded-t-sm  text-md font-medium capitalize`}>
          {courses.category}
        </div>
        <div className="p-4">
          <div className=" text-lg font-bold mb-2 line line-clamp-2">{courses.title}</div>
          <div className="text-sm text-gray-300 line-clamp-2">{courses.description}</div>
        </div>
        <div className="absolute text-d-text text-sm font-bold p-4 bottom-0 flex flex-col">
          <h1 className="font-normal">{courses.difficulty}</h1>
          <h1>
            {courses.lessons}
            <span className="font-light"> Lessons</span>
          </h1>
        </div>
      </div>
    </Link>
  );
}
