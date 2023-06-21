import { useEffect, useState } from 'react';
import { Dropdown } from './Dropdown';
import { Link, useLocation } from 'react-router-dom';
import { ProfileIcon } from '../ui/ProfileIcon';
import './SearchBar.css'

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();
  // const shouldShowNavbar = location.pathname !== '/';

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const [IsNavbarScrolled, setIsNavbarScrolled] = useState(true);
  const [IsSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen(!IsSearchOpen);
  };

  const handleSubmit = () =>{
    alert("Submit Search");
  }

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
  useEffect(() => {
    setIsDropdownOpen(false);
  }, [location.pathname]);

  const navbarColor = IsNavbarScrolled ? '#1a1c22' : '#1a1c22';
  const navbarHeight = IsNavbarScrolled ? '5rem' : '4rem';
  const navbarTransition = 'all 0.5s';

  console.log(IsSearchOpen);

  // if(!shouldShowNavbar)return null;
  return (
    <div>
      {IsSearchOpen && (
        <div className="w-full h-full fixed bg-black opacity-90 flex justify-center items-start pt-32 z-50">
          <div>
            <form
              className="form collapsed"
              onSubmit={handleSubmit}>
              <label htmlFor="search">
                <input
                  className="input"
                  type="text"
                  required
                  placeholder="Search"
                  id="search"
                />
                <div className="fancy-bg"></div>
                <div className="search">
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="r-14j79pv r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-4wgw6l r-f727ji r-bnwqim r-1plcrui r-lrvibr">
                    <g>
                      <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                    </g>
                  </svg>
                </div>
                <button
                  className="close-btn"
                  type="reset">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"></path>
                  </svg>
                </button>
              </label>
            </form>
          </div>
        </div>
      )}
      <div className="fixed w-full flex justify-center z-50 items-center">
        <nav
          id="navbarid"
          className="w-full"
          style={{
            backgroundColor: navbarColor,
            height: navbarHeight,
            transition: navbarTransition,
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
                href="/"
                className="text-d-accent text-3xl font-bold prompt w-36">
                LIBELLUS
              </a>
            </div>
            <div className="flex items-center">
              {!isDropdownOpen && (
                <div className="hidden text-white lg:flex items-center gap-8 text-md">
                  <Link
                    to="/"
                    className={`${location.pathname === '/' ? 'text-d-accent' : ''} transition-all duration-150`}>
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
                    className={`${
                      location.pathname === '/courses' ? 'text-d-accent' : ''
                    } transition-all duration-150`}>
                    Courses
                  </Link>
                </div>
              )}
            </div>
            <div className="flex gap-4 items-center w-fit justify-end lg:w-48">
              <button onClick={toggleSearch}>
                <img
                  width="28"
                  height="28"
                  src="https://img.icons8.com/ios-filled/50/5f7adb/search--v1.png"
                  alt="search--v1"
                />
              </button>
              <Link to="/signup">
                <ProfileIcon />
              </Link>
            </div>
          </div>
          {isDropdownOpen && (
            <div className="lg:hidden">
              <Dropdown
                options={[
                  { label: 'Home', value: '/' },
                  { label: 'Dashboard', value: '/dashboard' },
                  { label: 'Courses', value: '/courses' },
                ]}
                handleChange={toggleDropdown}
                change={IsNavbarScrolled}>
                <div className="my-auto"></div>
              </Dropdown>
            </div>
          )}
        </nav>
      </div>
    </div>
  );
}
