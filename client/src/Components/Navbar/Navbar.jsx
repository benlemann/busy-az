

import React, { useState, useEffect } from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Logo from "../../assets/Logo/logo.webp";
import '../Navbar/Navbar.css';
import { NavLink, useNavigate } from 'react-router-dom';

const navigation = [
  { name: 'Vakansiyalar', href: '#', current: false },
  { name: 'Məqalələr', href: '#', current: false },
  { name: 'İşaxtaranlar üçün', href: '#', current: false },
  { name: 'İşəgötürənlər üçün', href: '#', current: false },
  { name: 'Haqqımızda', href: '#', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Navbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState('');

  useEffect(() => {
    const checkLogin = async () => {
      try {
        const response = await fetch("http://localhost:7999/api/user", {
          method: "GET",
          credentials: "include",
        });

        if (response.ok) {
          const data = await response.json();
          setIsLoggedIn(data.success);
          setUserRole(data.user.userrole);
        } else {
          setIsLoggedIn(false);
          setUserRole('');
        }
      } catch (error) {
        console.error("Error checking login:", error);
        setIsLoggedIn(false);
        setUserRole('');
      }
    };

    checkLogin();
  }, []);

  const handleMenuButtonClick = () => {
    console.log(isLoggedIn, userRole);
    if (!isLoggedIn) {
      navigate('/login');
    } else {
      if (userRole === 'admin') {
        navigate('/admin');
      } else if (userRole === 'employer') {
        navigate('/dashboard/employer/profile');
      } else {
        navigate('/dashboard/freelancer/profile');
      }
    }
  };
  const handleMenuButtonClickk = () => {
    console.log(isLoggedIn, userRole);
    if (!isLoggedIn) {
      navigate('/login');
    } else {
      if (userRole === 'employer') {
        navigate('/dashboard/employer/profile');
      } else {
        alert("hesabinizdan cikis yapiniz ve employer olarak kayit olun ")
      }
    }
  };

  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="px-8 navv">
            <div className="relative flex items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
                {/* Mobile menu button */}
                <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 bg-gray-200 text-gray-400 hover:bg-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>

              <div className="flex flex-1 items-center justify-center lg:items-stretch lg:justify-start">
                <div className="flex flex-shrink-0 items-center logodiv">
                  <NavLink to="/">
                    <img className="logo" src={Logo} alt="Your Company" />
                  </NavLink>
                </div>
                <div className="hidden sm:ml-6 :block navlinkmenu">
                  <div className="flex items-center space-x-4 navlink">
                    <NavLink className="navlink" to="/vacancies">Vakansiyalar</NavLink>
                    <NavLink className="navlink" to="/blog">Məqalələr</NavLink>
                    <NavLink className="navlink" to="/jobseekers">CV-lər</NavLink>
                    <NavLink className="navlink" to="/about">Haqqımızda</NavLink>

                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                <button onClick={handleMenuButtonClickk} className='bg-gray-200 text-gray-600 px-2 py-1 rounded-md btnvac'>+ Vakansiya yarad</button>

                <Menu as="div" className="relative ml-3">
                  <div>
                    <MenuButton
                      className="relative flex rounded-full bg-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      onClick={handleMenuButtonClick}
                    >
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://busy.az/site/images/user-avatar-placeholder.png"
                        alt=""
                      />
                    </MenuButton>
                  </div>
                  <Transition
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <MenuItem>
                        {({ focus }) => (
                          <a
                            href="#"
                            className={classNames(focus ? 'bg-gray-100' : '', 'hidden px-4 py-2 text-sm text-gray-700')}
                          >
                            Your Profile
                          </a>
                        )}
                      </MenuItem>
                      <MenuItem>
                        {({ focus }) => (
                          <a
                            href="#"
                            className={classNames(focus ? 'bg-gray-100' : '', ' hidden px-4 py-2 text-sm text-gray-700')}
                          >
                            Settings
                          </a>
                        )}
                      </MenuItem>
                      <MenuItem>
                        {({ focus }) => (
                          <a
                            href="#"
                            className={classNames(focus ? 'bg-gray-100' : '', 'hidden  px-4 py-2 text-sm text-gray-700')}
                          >
                            Sign out
                          </a>
                        )}
                      </MenuItem>
                    </MenuItems>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <DisclosurePanel className="lg:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2 flex flex-col gap-2">
              <NavLink className="navlink" to="/vacancies">Vakansiyalar</NavLink>
              <NavLink className="navlink" to="/blog">Məqalələr</NavLink>
              <NavLink className="navlink" to="/jobseekers">CV-lər</NavLink>
              <NavLink className="navlink" to="/about">Haqqımızda</NavLink>

            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
