import React from 'react';
import Layout from '../components/Layout';
import {
  FaReact,
  FaBootstrap,
  FaHtml5,
  FaCss3,
  FaJsSquare,
  FaNodeJs,
  FaPython,
} from 'react-icons/fa';
import { SiMongodb, SiDjango } from 'react-icons/si';

function Home() {
  return (
    <Layout>
      <div>
        {/* Intro Section */}
        <div className='h-screen bg-theme'>
          <div
            className='grid grid-cols-2 md:grid-cols-1 h-screen items-center 
            border-4 border-white transform rotate-12 md:border-0 md:rotate-0 mx-6 bg-theme'
          >
            <div className='h-1/2'>
              <lottie-player
                src='https://assets10.lottiefiles.com/private_files/lf30_obidsi0t.json'
                // src='https://assets10.lottiefiles.com/packages/lf20_kkflmtur.json'
                background='transparent'
                speed='1'
                loop
                autoplay
              ></lottie-player>
            </div>
            <div className='font-bold text-white md:px-5'>
              <h1 className='text-7xl md:text-4xl'>
                Hii, I am <b className='text-yellow-500'>SHIVAM</b>
              </h1>
              <h1 className='text-4xl md:text-xl'>
                FullStack <b className='text-red-500'>Developer</b>
              </h1>
            </div>
          </div>
        </div>
        {/* Technologies */}
        <div className='mt-28'>
          <h1 className='text-4xl text-blue-800 font-cold text-center my-12'>
            Technologies I Use
          </h1>
          <div className='grid grid-cols-4 md:grid-cols-1'>
            <FaReact className='w-full text-center' size={180} color='cyan' />
            <FaBootstrap
              className='w-full text-center'
              size={180}
              color='blue'
            />
            <FaHtml5
              className='w-full text-center'
              size={180}
              color='orangered'
            />
            <FaCss3 className='w-full text-center' size={180} color='blue' />
            <FaJsSquare
              className='w-full text-center'
              size={180}
              color='#f6e336'
            />
            <FaNodeJs className='w-full text-center' size={180} color='green' />
            <SiMongodb
              className='w-full text-center'
              size={180}
              color='green'
            />
            <FaPython
              className='w-full text-center'
              size={180}
              color='lightblue'
            />
            <SiDjango className='w-full text-center' size={180} color='green' />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
