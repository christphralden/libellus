import { useTransition, animated } from 'react-spring';

export default function HomeDisplayCard({ course }) {
  const fadeTransitions = useTransition(course, {
    from: { opacity: 0, transform: 'translateY(20px)' },
    enter: { opacity: 1, transform: 'translateY(0)' },
    config: { duration: 500 },
  });

  return (
    <div className="w-full h-[400px] md:w-[1200px] md:h-[500px] lg:h-[600px] relative">
      <div className="rounded-xl bg-d-secondary w-full h-full z-20">
        <img
          src={course.bannerImage}
          alt={course.title}
          className="w-full h-full rounded-xl object-cover z-10 opacity-75"
        />
        <div className="absolute bottom-0 left-0 p-4 z-30 flex flex-col gap-2 md:p-8 lg:p-12">
          {fadeTransitions((style, course) => (
            <animated.div
              className="text-xl text-d-text font-bold line-clamp-2 md:text-2xl lg:text-3xl"
              style={style}
              key={course.id}>
              {course.title}
            </animated.div>
          ))}
          {fadeTransitions((style, course) => (
            <animated.div
              className="text-sm text-d-text line-clamp-1 md:text-md lg:text-lg"
              style={style}
              key={course.id}>
              {course.description}
            </animated.div>
          ))}
          {fadeTransitions((style, course) => (
            <animated.div
              className="flex flex-wrap gap-2"
              style={style}
              key={course.id}>
              {course.tags.slice(0, window.innerWidth < 768 ? 3 : 6).map((tag) => (
                <div
                  key={tag}
                  className="px-2 py-1 text-d-text border-d-text border-2 rounded-xl text-xs lg:text-sm">
                  {tag}
                </div>
              ))}
            </animated.div>
          ))}
        </div>
        <div className='bg-d-primary w-full h-full absolute top-0 rounded-xl opacity-50'></div>
        <div className='bg-gradient-to-t from-bg-primary w-full h-full absolute top-0 rounded-xl'></div>
      </div>
    </div>
  );
}
