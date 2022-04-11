import React from 'react';
import Layout from '../components/Layout';

function Home() {
  return (
    <Layout>
      <div>
        <div className='h-screen bg-theme'>
          <div className='grid grid-cols-2 md:grid-cols-1 h-screen items-center'>
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
      </div>
    </Layout>
  );
}

export default Home;
