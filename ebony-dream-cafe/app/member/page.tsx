import Navbar from '@/components/navbar';
import React from 'react';

export default function MembershipForm() {
  return (
    <div className='membership-container'>
      <section className='navbar-section-container'>
        <Navbar />
      </section>
      <section className='membership-form'>
        <div className='membership-form-title'>
          <h1 className='text-3xl font-bold text-center mb-6'>Membership</h1>
        </div>
        <form className='membership-form-container space-y-6'>
          <div className='first-name'>
            <input
              type='text'
              placeholder='First Name'
              className='w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#539452] text-black'
            />
          </div>
          <div className='last-name'>
            <input
              type='text'
              placeholder='Last Name'
              className='w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#539452] text-black'
            />
          </div>
          <div className='gender'>
            <div className='male flex items-center space-x-2'>
              <input type='radio' name='gender' className='h-4 w-4 text-[#539452]' />
              <label className='text-lg'>Male</label>
            </div>
            <div className='female flex items-center space-x-2'>
              <input type='radio' name='gender' className='h-4 w-4 text-[#539452]' />
              <label className='text-lg'>Female</label>
            </div>
            <div className='other flex items-center space-x-2'>
              <input type='radio' name='gender' className='h-4 w-4 text-[#539452]' />
              <label className='text-lg'>Other</label>
            </div>
          </div>
          <div className='email'>
            <input
              type='text'
              placeholder='Email Address'
              className='w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#539452] text-black'
            />
          </div>
          <div className='phone'>
            <input
              type='text'
              placeholder='Phone Number'
              className='w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#539452] text-black'
            />
          </div>
          <button
            type='submit'
            className='w-full py-3 bg-[#476b47] text-white rounded-lg hover:bg-[#90A955] focus:outline-none focus:ring-2 focus:ring-[#539452]'
          >
            Submit
          </button>
        </form>
        
      </section>
    </div>
  );
}
