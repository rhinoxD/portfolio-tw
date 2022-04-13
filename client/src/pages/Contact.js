import React, { useState } from 'react';
import axios from 'axios';
import Layout from '../components/Layout';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [query, setQuery] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: 'post',
      url: 'api/contact',
      data: { name, email, query },
    }).then((response) => {
      if (response.data.status === 'success') {
        alert('Message Sent.');
        resetForm();
      } else if (response.data.status === 'fail') {
        alert('Message failed to send.');
      }
    });
  };
  const resetForm = () => {
    setName('');
    setEmail('');
    setQuery('');
  };
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
          <div className='md:w-full w-1/2 p-10 shadow-2xl bg-gray-50'>
            <form onSubmit={handleSubmit} method='post'>
              <h1 className='text-2xl font-semibold'>
                Contact me to know more
              </h1>
              <input
                type='text'
                placeholder='Name'
                className='w-full border-2 border-gray-400 rounded p-1 shadow-lg mt-5'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type='email'
                placeholder='Email'
                className='w-full border-2 border-gray-400 rounded p-1 shadow-lg mt-5'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <textarea
                placeholder='Query'
                className='w-full border-2 border-gray-400 rounded p-1 shadow-lg mt-5'
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button className='bg-red-500 rounded text-white px-5 py-1 mt-3'>
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Contact;
