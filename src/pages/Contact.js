import React from 'react';
import Layout from '../components/Layout';

function Contact() {
  return (
    <Layout>
      <div>
        <div className='h-screen mt-10'>
          <lottie-player
            src='https://assets2.lottiefiles.com/packages/lf20_kdx6cani.json'
            background='transparent'
            speed='1'
            loop
            autoplay
          ></lottie-player>
        </div>
        <div className='w-screen flex justify-center'>
          <div className='md:w-full w-1/2'>
            <h1 className='text-2xl font-semibold'>Contact me to know more</h1>
            <input
              type='text'
              placeholder='Name'
              className='w-full border-2 border-gray-400'
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Contact;
