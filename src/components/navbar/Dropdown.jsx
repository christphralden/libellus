import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import './Dropdown.css';

export function Dropdown({ options, handleChange, change, children }) {
  const spring = useSpring({
    from: { opacity: 0, transform: 'translateY(-20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { mass: 1, tension: 250, friction: 30 },
  });

  return (
    <div className="dropdown border-t-2 border-d-accent lg:hidden w-full px-8 py-4">
      <animated.div
        style={spring}
        className=" text-lg">
        {options.map((option) => (
          <animated.div
            key={option.value}
            style={spring}>
            <Link
              to={option.value}
              className="block py-1 text-white mb-2 hover:text-d-accent">
              {option.label}
            </Link>
          </animated.div>
        ))}
        {children}
      </animated.div>
    </div>
  );
}
