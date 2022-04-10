import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
  return (
    <div className='text-white font-mont'>
      <div className='flex bg-theme justify-between items-center p-2 shadow-lg'>
        <div className='flex justify-between w-full'>
          <h1 className='text-4xl font-semibold'>S K</h1>
          <button
            onClick={() => {
              setShowMenu();
            }}
            className='lg:hidden xl:hidden 2xl:hidden md:flex'
          >
            MENU
          </button>
        </div>
        <div className='flex md:hidden'>
          {menuItems.map((item) => {
            return (
              <li className='list-none mx-5'>
                <Link to={`${item.key}`}>{item.title}</Link>
              </li>
            );
          })}
        </div>
        <div className='md-flex flex-col lg:hidden xl:hidden 2xl:hidden'>
          {menuItems.map((item) => {
            return (
              <li className='list-none mx-5'>
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
