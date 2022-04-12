import React from 'react';
import Layout from '../components/Layout';

function Projects() {
  return (
    <Layout>
      <div className='mt-20'>
        <div className='h-screen'>
          <div className='h-3/4'>
            <lottie-player
              src='https://assets2.lottiefiles.com/packages/lf20_ygiuluqn.json'
              background='transparent'
              speed='1'
              loop
              autoplay
            ></lottie-player>
          </div>
          <p className='text-xl font-semibold text-center'>
            Good ideas are not adopted automatically. They must be driven into
            practice with courageous patience
          </p>
          <h1
            className='text-4xl text-center font-bold mt-5'
            data-aos='slide-up'
          >
            Because
          </h1>
        </div>
        <div
          className='font-bold text-center bg-red-500 mx-20 p-20 text-white 
        rounded-tl-full rounded-br-full md:mx-5'
        >
          <h1 className='text-8xl md:text-3xl' data-aos='slide-left'>
            THE GAME IS...
          </h1>
          <h1 className='text-8xl md:text-3xl' data-aos='slide-right'>
            CONSISTENCY
          </h1>
        </div>
      </div>
    </Layout>
  );
}

export default Projects;
