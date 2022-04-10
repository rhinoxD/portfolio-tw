import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

function Header() {
  const [showMenu, setShowMenu] = useState('md:hidden');
  const menuItems = [
    {
      title: 'Home',
      key: '/',
    },
    {
      title: 'Projects',
      key: '/projects',
    },
    {
      title: 'Contact',
      key: '/contact',
    },
  ];
  const pathname = window.location.pathname;
  return (
    <div className='text-white font-mont'>
      <div
        className={`flex bg-theme justify-between items-center p-2 shadow-lg ${
          showMenu == '' && 'md:flex-col'
        }`}
      >
        <div className='flex justify-between items-center w-full'>
          <h1 className='text-4xl font-semibold'>S K</h1>
          <FaBars
            onClick={() => {
              if (showMenu === 'md:hidden') {
                setShowMenu('');
              } else {
                setShowMenu('md:hidden');
              }
            }}
            className='lg:hidden xl:hidden 2xl:hidden md:flex cursor-pointer'
          />
        </div>
        <div className='flex md:hidden'>
          {menuItems.map((item) => {
            return (
              <li
                className={`list-none mx-5 p-1 ${
                  item.key == pathname && 'bg-white text-black rounded-md'
                }`}
              >
                <Link to={`${item.key}`}>{item.title}</Link>
              </li>
            );
          })}
        </div>
        <div
          className={`md:flex mt-5 items-start w-full flex-col lg:hidden xl:hidden 2xl:hidden ${showMenu}`}
        >
          {menuItems.map((item) => {
            return (
              <li
                className={`list-none py-1 ${
                  item.key == pathname && 'bg-white text-black rounded-md'
                }`}
              >
                <Link to={`${item.key}`}>{item.title}</Link>
              </li>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Header;
