import { useEffect, useState } from 'react';
import ContentCard from '../components/cards/ContentCard';

export default function Dashboard() {
  const [enrolled, setEnrolled] = useState([]);

  useEffect(() => {
    const courses = JSON.parse(localStorage.getItem('LIBELLUS_ENROLLED')) || [];
    setEnrolled(courses || []);
  }, []);

  if (!enrolled || enrolled.length === 0) {
    return <div>LOADING...</div>;
  } else {
    return (
      <div className="w-full p-20 flex gap-8 flex-col min-h-[100vh]">
        <h1 className="text-d-text text-4xl">My Courses</h1>
        <div className="flex gap-8 overflow-hidden">
          {enrolled.map((don) => (
            <ContentCard
              key={don.id}
              courses={don}
              category={don.category}
            />
          ))}
        </div>
      </div>
    );
  }
}
