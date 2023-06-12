import { useEffect, useState } from 'react';
import { Dropdown } from './Dropdown';
import { Link, useLocation } from 'react-router-dom';
import { ProfileIcon } from '../ui/ProfileIcon';



export default function Navbar() {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();
  const shouldShowNavbar = location.pathname !== '/';

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const [IsNavbarScrolled, setIsNavbarScrolled] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop < 200) setIsNavbarScrolled(true);
      else setIsNavbarScrolled(false);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarColor = IsNavbarScrolled ? '#1a1c2299' : '#1a1c22';
  const navbarHeight = IsNavbarScrolled ? '5rem' : '4rem';
  const navbarTransition = "all 0.5s"

  if(!shouldShowNavbar)return null;
  return (
    <div className="fixed w-full flex justify-center z-50 backdrop-blur-md items-center">
      <nav
        id="navbarid"
        className="w-full"
        style={{
          backgroundColor: navbarColor,
          height:navbarHeight,
          transition: navbarTransition
        }}>
        <div className="flex items-center justify-between h-full px-6 md:px-12 lg:px-16 xl:px-40">
          <div className="flex items-center gap-6 w-48 justify-start ">
            <button
              className="block lg:hidden text-3xl text-white focus:outline-none"
              onClick={toggleDropdown}>
              <img
                src="https://img.icons8.com/ios-filled/100/FFFFFF/menu-rounded.png"
                className="w-8"
                alt="-"
              />
            </button>
            <a
              href="/home"
              className="text-d-accent text-3xl font-bold prompt w-36">
              LIBELLUS
            </a>
          </div>
          <div className="flex items-center">
            {!isDropdownOpen && (
              <div className="hidden text-white lg:flex items-center gap-8 text-md">
                <Link
                  to="/home"
                  className={`${location.pathname === '/home' ? 'text-d-accent' : ''} transition-all duration-150`}>
                  Home
                </Link>
                <Link
                  to="/dashboard"
                  className={`${
                    location.pathname === '/dashboard' ? 'text-d-accent' : ''
                  } transition-all duration-150`}>
                  Dashboard
                </Link>
                <Link
                  to="/courses"
                  className={`${location.pathname === '/courses' ? 'text-d-accent' : ''} transition-all duration-150`}>
                  Courses
                </Link>
                <Link
                  to="/videos"
                  className={`${location.pathname === '/videos' ? 'text-d-accent' : ''} transition-all duration-150`}>
                  Videos
                </Link>
                <Link
                  to="/practice"
                  className={`${location.pathname === '/practice' ? 'text-d-accent' : ''} transition-all duration-150`}>
                  Practice
                </Link>
              </div>
            )}
          </div>
          <div className="flex gap-4 items-center w-fit justify-end lg:w-48">
            <img
              width="28"
              height="28"
              src="https://img.icons8.com/ios-filled/50/5f7adb/search--v1.png"
              alt="search--v1"
            />
            <ProfileIcon />
          </div>
        </div>
        {isDropdownOpen && (
          <div className="lg:hidden">
            <Dropdown
              options={[
                { label: 'Home', value: '/home' },
                { label: 'Dashboard', value: '/dashboard' },
                { label: 'Courses', value: '/courses' },
                { label: 'Videos', value: '/videos' },
                { label: 'Practice', value: '/practice' },
              ]}
              handleChange={toggleDropdown}
              change={IsNavbarScrolled}>
              <div className="my-auto"></div>
            </Dropdown>
          </div>
        )}
      </nav>
    </div>
  );
}
