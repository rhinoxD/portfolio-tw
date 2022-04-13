import React from 'react';
import { FaGithub, FaLinkedin, FaMailBulk } from 'react-icons/fa';

function Footer() {
  return (
    <>
      <div className='h-44 md:h-20'>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
          <path
            fill='#2a2a2a'
            fill-opacity='1'
            d='M0,128L0,128L288,128L288,256L576,256L576,64L864,64L864,160L1152,160L1152,64L1440,64L1440,320L1152,320L1152,320L864,320L864,320L576,320L576,320L288,320L288,320L0,320L0,320Z'
          ></path>
        </svg>
      </div>
      <div className='bg-theme w-screen flex justify-center'>
        <div className='md:w-full w-1/2'>
          <div className='p-10 font-mont text-center'>
            <p className='text-gray-50 pb-5'>Designed and Developed By</p>
            <div className='h-1 border-2 border-white border-dotted'></div>
            <div className='flex text-white w-full justify-between py-3'>
              <a href='mailto:shivamsk0721@gmail.com'>
                <FaMailBulk />
              </a>
              <a href='https://www.linkedin.com/in/the-shivamkumar/'>
                <FaLinkedin />
              </a>
              <a href='https://github.com/rhinoxD'>
                <FaGithub />
              </a>
            </div>
            <div className='h-1 border-2 border-gray-50 border-dotted'></div>
            <p className='text-gray-50 mt-10'>Shivam Kumar</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
