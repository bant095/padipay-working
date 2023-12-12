import React from 'react';
import { Link } from 'react-router-dom';
import KycSidebar from '../../../../Components/Auth/Dashboard/KycSidebar';

const DigitPin = () => {
  return (
    <main className='bg-[#003399] px-20 pt-20 pb-56'>
      <div className='flex justify-around gap-2 small-screen'>
        {/* Left Side */}
        <KycSidebar />

        {/* -------------------------------------------------- */}
        {/* Right side */}
        <div className=' bg-white w-screen my-10 px-16 py-8'>
          <h1 className='text-2xl font-bold'>
            Set a 4-digit PIN that would be used for all loan requests or
            transaction
          </h1>
          <div className='my-6'>
            <label htmlFor='pin'>PIN:</label>
            <input
              type='password'
              id='pin'
              name='pin'
              className='border-2 rounded-[10px] border-lowergrey bg-[#F0F0F0] px-4 w-full py-3'
              required
              tabIndex='7'
            />
          </div>
          <div className='my-6'>
            <label htmlFor='confirmPin'>Confirm PIN:</label>
            <input
              type='password'
              id='confirmPin'
              name='confirmPin'
              className='border-2 rounded-[10px] border-lowergrey bg-[#F0F0F0] px-4 w-full py-3'
              required
              tabIndex='8'
            />
          </div>
          <div className='flex gap-4'>
            <Link to='/termsofuse'>
              <button
                className='proceed-button bg-[#003399] text-white px-5 py-2 rounded-[10px] cursor-pointer'
                onclick='proceedButtonClick()'
              >
                Proceed
              </button>
            </Link>
            <button
              className='border-2 border-primary text-primary px-5 py-2 rounded-[10px] cursor-pointer'
              onclick='goBack()'
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DigitPin;
