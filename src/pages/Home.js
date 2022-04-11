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
          <h1 className='text-4xl text-blue-800 font-bold text-center my-1'>
            Technologies I Use
          </h1>
          <div className='grid grid-cols-4 md:grid-cols-1'>
            <FaReact
              className='w-full text-center mt-20'
              size={180}
              color='cyan'
            />
            <FaBootstrap
              className='w-full text-center mt-20 animate-bounce'
              size={180}
              color='blue'
            />
            <FaHtml5
              className='w-full text-center mt-20'
              size={180}
              color='orangered'
            />
            <FaCss3
              className='w-full text-center mt-20 animate-bounce'
              size={180}
              color='blue'
            />
            <FaJsSquare
              className='w-full text-center mt-20 animate-bounce'
              size={180}
              color='#f6e336'
            />
            <FaNodeJs
              className='w-full text-center mt-20'
              size={180}
              color='green'
            />
            <SiMongodb
              className='w-full text-center mt-20 animate-bounce'
              size={180}
              color='green'
            />
            <FaPython
              className='w-full text-center mt-20'
              size={180}
              color='lightblue'
            />
            {/* <SiDjango
              className='w-full text-center mt-20'
              size={180}
              color='green'
            /> */}
          </div>
        </div>

        {/* Javascript Section */}
        <div className='my-20'>
          <div className='text-center h-52 bg-primary'>
            <h1 className='text-white font-bold text-3xl py-10'>
              Yes You're Right... I'm a Javascript Buff
            </h1>
          </div>
          <div
            className='mx-56 md:mx-5 shadow-2xl bg-gray-50 -mt-20 
          rounded-lg hover:bg-gray-700 hover:text-white hover:scale-105 ease-in duration-200'
          >
            <div className='h-96'>
              <lottie-player
                src='https://assets8.lottiefiles.com/packages/lf20_yd8fbnml.json'
                background='transparent'
                speed='1'
                loop
                autoplay
              ></lottie-player>
            </div>
            <p className='text-xl my-5 font-semibold md:px-5 px-14 py-10'>
              JavaScript is one of the most top-ranked programming languages
              because of its ubiquitous use on all platforms and mass adoption.
              Main Use Cases: Web Development.
            </p>
          </div>
        </div>

        {/* Dev Stack Section */}
        <div className='my-20'>
          <div className='text-center h-52 bg-red-400'>
            <h1 className='text-white font-bold text-3xl py-10'>
              My Development Stack
            </h1>
          </div>
          <div
            className='mx-56 md:mx-5 shadow-2xl bg-gray-50 -mt-20 
          rounded-lg hover:bg-gray-700 hover:text-white hover:scale-105 ease-in duration-200'
          >
            <div className='h-96'>
              <lottie-player
                src='https://assets2.lottiefiles.com/packages/lf20_vybwn7df.json'
                background='transparent'
                speed='1'
                loop
                autoplay
              ></lottie-player>
            </div>
            <div className='grid md:grid-cols-1 grid-cols-3 p-10 md:p-5'>
              <div>
                <h1 className='text-xl font-bold'>Front End</h1>
                <hr />
                <p className='font-semibold mt-2'>HTML/CSS</p>
                <p className='font-semibold mt-2'>React</p>
                <p className='font-semibold mt-2'>Javascript</p>
                <p className='font-semibold mt-2'>Redux</p>
              </div>
              <div className='text-center md:mb-2'>
                <h1 className='text-xl font-bold'>UI / UX</h1>
                <hr />
                <p className='font-semibold mt-2'>Bootstrap</p>
                <p className='font-semibold mt-2'>Tailwind</p>
                <p className='font-semibold mt-2'>Material UI</p>
                <p className='font-semibold mt-2'>Semantic UI</p>
              </div>
              <div className='text-right'>
                <h1 className='text-xl font-bold'>Backend / DB</h1>
                <hr />
                <p className='font-semibold mt-2'>Node JS</p>
                <p className='font-semibold mt-2'>Express JS</p>
                <p className='font-semibold mt-2'>My SQL</p>
                <p className='font-semibold mt-2'>Mongo DB</p>
              </div>
            </div>
          </div>
        </div>

        {/* Dev Info */}
        <div>
          <h1 className='text-4xl text-gray-700 text-center font-bold'>
            Who is Shivam ?
          </h1>
          <div className='h-screen relative text-gray-800'>
            <div className='h-full'>
              <lottie-player
                src='https://assets3.lottiefiles.com/packages/lf20_dcatp5cr.json'
                background='transparent'
                speed='1'
                loop
                autoplay
              ></lottie-player>
            </div>
            <div className='absolute inset-0 flex flex-col items-center justify-center'>
              <h1 className='text-2xl font-bold'>
                Hi , Hello , Namaste...
                <hr />
                <pre className='text-xl md:text-sm my-5 font-mont font-semibold'>
                  {JSON.stringify(
                    {
                      name: 'Shivam Kumar',
                      age: 21,
                      gender: 'Male',
                      country: 'INDIA',
                    },
                    null,
                    2
                  )}
                </pre>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
