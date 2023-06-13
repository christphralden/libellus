import { Link } from 'react-router-dom';

export default function DashContentCard({ courses, category, state }) {
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

  if (state === true) {
    return (
      <Link to={`/details/${category}/${courses.id}`}>
        <div
          className={`text-d-text bg-d-secondary w-full aspect-square rounded-md ${brColor} border-2 flex-col shadow-md mx-auto justify-between max-h-64 max-w-80 relative`}>
          <div className={`w-full ${bgColor} bg-d-easy px-4 py-1 rounded-t-sm text-sm font-medium capitalize`}>
            {courses.category}
          </div>
          <div className="p-4">
            <div className=" text-sm font-bold mb-2 line line-clamp-2 md:text-md gi">{courses.title}</div>
            <div className="text-xs text-gray-300 line-clamp-1 hidden md:block">{courses.description}</div>
          </div>
          <div className="absolute text-d-text text-xs font-bold p-4 bottom-0 flex flex-col">
            <h1 className="font-normal ">{courses.difficulty}</h1>
            <h1>
              {courses.lessons}
              <span className="font-light"> Lessons</span>
            </h1>
          </div>
        </div>
      </Link>
    );
  }
  else if(state === false){
    return(
        <Link to={`/details/${category}/${courses.id}`}>
            <div
          className={`text-d-text bg-d-secondary w-full h-40 mb-4 aspect-square rounded-md ${brColor} border-2 flex-col shadow-md mx-auto justify-between relative`}>
          <div className={`w-full ${bgColor} bg-d-easy px-4 py-1 rounded-t-sm  text-sm font-medium capitalize`}>
            {courses.category}
          </div>
          <div className="p-4">
            <div className=" text-sm font-bold mb-2 line line-clamp-2">{courses.title}</div>
            <div className="text-xs text-gray-300 line-clamp-2 hidden md:flex">{courses.description}</div>
          </div>
          <div className="absolute text-d-text text-xs font-bold p-4 bottom-0 flex flex-col">
            <h1 className="font-normal ">{courses.difficulty}</h1>
            <h1>
              {courses.lessons}
              <span className="font-light"> Lessons</span>
            </h1>
          </div>
        </div>

        </Link>
    );
  }
}
