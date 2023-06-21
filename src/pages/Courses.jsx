import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import data from '../lib/data/CoursesData.json';
import DashContentCard from '../components/cards/DashContentCard';

export default function ExplorePage() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const categories = Object.keys(data.courses);

  const filteredCourses = selectedCategory !== '' ? data.courses[selectedCategory] : Object.values(data.courses).flat();

  const sidebarAnimation = useSpring({
    transform: sidebarOpen ? 'translateX(0%)' : 'translateX(-100%)',
  });

  return (
    <div>
      <animated.div
        className="w-fit max-w-1/2 h-screen text-d-text fixed z-50 bg-d-secondary p-6 px-10 flex flex-col gap-8"
        style={sidebarAnimation}>
        <div className="flex justify-between">
          <a
            href="/home"
            className="text-d-accent text-3xl font-bold prompt w-36">
            LIBELLUS
          </a>
          <button onClick={toggleSidebar}>
            <img
              className=""
              width="35"
              height="35"
              src="https://img.icons8.com/ios-glyphs/30/5f7adb/macos-close.png"
              alt="macos-close"
            />
          </button>
        </div>
        <div className="">
          <h2 className="text-lg font-bold mb-4 uppercase">Filter by Category:</h2>
          <ul className="space-y-2 ">
            <li>
              <button
                className={`${selectedCategory === '' ? 'font-bold  text-d-accent' : 'font-normal'} uppercase`}
                onClick={() => {
                  handleCategoryChange('');
                  toggleSidebar();
                }}>
                All
              </button>
            </li>
            {categories.map((category) => (
              <li key={category}>
                <button
                  className={`${selectedCategory === category ? 'font-bold text-d-accent' : 'font-normal'} uppercase`}
                  onClick={() => {
                    handleCategoryChange(category);
                    toggleSidebar();
                  }}>
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </animated.div>
      <div className="flex flex-col p-20 pt-24 px-6 gap-8  md:px-12 lg:px-16 xl:px-40">
        <button
          className="text-d-text text-xl font-bold text-center border-2 border-d-accent rounded-lg py-2"
          onClick={toggleSidebar}>
          Courses List
        </button>
        <div className="flex">
          <div className="w-full flex flex-col gap-8">
            <h1 className="text-d-text text-3xl font-bold">Courses </h1>
            <div className="grid-rows-1 auto-rows-auto gap-y-4 gap-12 overflow-hidden overflow-x-scroll">
              {filteredCourses.map((course) => (
                <DashContentCard
                  key={course.id}
                  courses={course}
                  category={course.category}
                  state={false}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
