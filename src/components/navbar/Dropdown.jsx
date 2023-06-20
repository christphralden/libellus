import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import './Dropdown.css';

export function Dropdown({ options, handleChange, change, children }) {
  const spring = useSpring({
    from: { opacity: 0, transform: 'translateY(-20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { mass: 1, tension: 250, friction: 30 },
  });

  const dropdownStyles = useSpring({
    from: { height: 0, opacity: 0 },
    to: { height: 'auto', opacity: 1 },
  });

  const navbarColor = change ? '#1a1c22' : '#1a1c22';
  const navbarTransition = 'all 0.5s';

  return (
    <animated.div style={dropdownStyles}>
      <animated.div
        className="dropdown border-t-2 border-d-accent lg:hidden w-full px-8 py-4"
        style={{
          backgroundColor: navbarColor,
          transition: navbarTransition,
        }}>
        <animated.div
          style={spring}
          className="text-lg">
          {options.map((option) => (
            <animated.div
              key={option.value}
              style={spring}>
              <Link
                to={option.value}
                className="block py-2 text-white hover:text-d-accent">
                {option.label}
              </Link>
            </animated.div>
          ))}
          {children}
        </animated.div>
      </animated.div>
    </animated.div>
  );
}
