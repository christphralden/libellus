import { useEffect, useState } from 'react';
import DashContentCard from '../components/cards/DashContentCard';

export default function Dashboard() {
  const [enrolled, setEnrolled] = useState([]);
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  useEffect(() => {
    const courses = JSON.parse(localStorage.getItem('LIBELLUS_ENROLLED')) || [];
    setEnrolled(courses || []);
  }, []);
  const user = 'Callista';
  const coursesAmount = enrolled.length;
  const coursesCompleted = 0;
  const level = (amount) => {
    if (amount <= 10) return 'Beginner';
    else if (amount > 10 && amount <= 20) return 'Intermediate';
    else if (amount > 20) return 'Advanced';
  };

  if (!enrolled || enrolled.length === 0) {
    return (
      <div className="w-full p-20 px-6 pt-26 flex gap-8 flex-col min-h-[100vh] md:px-12 lg:px-16 xl:px-40">
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <h1 className="text-d-text text-3xl font-bold">Dashboard</h1>
            <button onClick={handleToggle}>
              {!isToggled && (
                <img
                  className=" w-8 h-8 md:w-10 md:h-10"
                  src="https://img.icons8.com/material-rounded/48/fafafa/grid-2.png"
                  alt="grid-2"
                />
              )}
              {isToggled && (
                <img
                  className=" w-8 h-8 md:w-10 md:h-10"
                  src="https://img.icons8.com/material-rounded/48/fafafa/rows.png"
                  alt="rows"
                />
              )}
            </button>
          </div>
          <div className="flex-col gap-2 flex">
            <h1 className="text-lg text-d-text md:text-xl">
              Welcome back, <span className="font-bold text-d-accent">{user}</span>
            </h1>
            <div className="text-d-text bg-d-secondary p-4 rounded-lg gap-2 flex flex-col">
              {/* BUAT SEMENTARA PAKE CAMOUNT DULU, NANTI GANTI JADI COMPLETED */}
              <h1 className="px-2 py-1 rounded-lg text-xs border-2 w-fit md:text-sm">{level(coursesAmount)}</h1>
              <div className="flex flex-col gap-1 text-sm md:text-base">
                <h1>
                  <span className="font-bold">{coursesAmount}</span> Enrolled Courses
                </h1>
                <h1>
                  <span className="font-bold">{coursesCompleted}</span> Completed Courses
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 text-d-text ">
          <h1 className="text-2xl font-bold md:text-3xl">My Courses</h1>
          <h1 className='text-md'>No currently enrolled courses.<br/>Start learning now!</h1>
        </div>
      </div>
    );
  } else {
    return (
      <div className="w-full p-20 px-6 pt-26 flex gap-8 flex-col min-h-[100vh] md:px-12 lg:px-16 xl:px-40">
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <h1 className="text-d-text text-3xl font-bold">Dashboard</h1>
            <button onClick={handleToggle}>
              {!isToggled && (
                <img
                  className=" w-8 h-8 md:w-10 md:h-10"
                  src="https://img.icons8.com/material-rounded/48/fafafa/grid-2.png"
                  alt="grid-2"
                />
              )}
              {isToggled && (
                <img
                  className=" w-8 h-8 md:w-10 md:h-10"
                  src="https://img.icons8.com/material-rounded/48/fafafa/rows.png"
                  alt="rows"
                />
              )}
            </button>
          </div>
          <div className="flex-col gap-2 flex">
            <h1 className="text-lg text-d-text md:text-xl">
              Welcome back, <span className="font-bold text-d-accent">{user}</span>
            </h1>
            <div className="text-d-text bg-d-secondary p-4 rounded-lg gap-2 flex flex-col">
              {/* BUAT SEMENTARA PAKE CAMOUNT DULU, NANTI GANTI JADI COMPLETED */}
              <h1 className="px-2 py-1 rounded-lg text-xs border-2 w-fit md:text-sm">{level(coursesAmount)}</h1>
              <div className="flex flex-col gap-1 text-sm md:text-base">
                <h1>
                  <span className="font-bold">{coursesAmount}</span> Enrolled Courses
                </h1>
                <h1>
                  <span className="font-bold">{coursesCompleted}</span> Completed Courses
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-d-text text-2xl font-bold md:text-3xl">My Courses</h1>
          {isToggled && (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 overflow-hidden overflow-x-scroll">
              {enrolled.map((don) => (
                <DashContentCard
                  key={don.id}
                  courses={don}
                  category={don.category}
                  state={isToggled}
                />
              ))}
            </div>
          )}
          {! isToggled && (
            <div className="grid-rows-1 auto-rows-auto gap-y-4 gap-12 overflow-hidden overflow-x-scroll">
            {enrolled.map((don) => (
              <DashContentCard
                key={don.id}
                courses={don}
                category={don.category}
                state={isToggled}
              />
            ))}
          </div>
          
          )}
        </div>
      </div>
    );
  }
}
