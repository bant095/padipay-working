import React from 'react';
import { Link } from 'react-router-dom';
import KycSidebar from '../../../../Components/Auth/Dashboard/KycSidebar';

const AccountDetails = () => {
  return (
    <main className='bg-[#003399] px-20 pt-20 pb-56'>
      <div className='flex justify-around gap-2 small-screen'>
        {/* Left Side */}
        <KycSidebar />

        {/* -------------------------------------------------- */}
        {/* Right side */}
        <div className=' bg-white w-screen my-10 px-16 py-8'>
          <h1 className='text-2xl font-bold'>Account Details</h1>
          <div className='my-6'>
            <label htmlFor='nin'>NIN</label>
            <input
              type='number'
              id='nin'
              name='nin'
              className='border-2 rounded-[10px] border-lowergrey bg-[#F0F0F0] px-4 w-full py-3'
              required
              tabIndex='6'
            />
          </div>
          <div className='my-6'>
            <label htmlFor='accountNumber'>Account Number:</label>
            <input
              type='number'
              id='accountNumber'
              name='accountNumber'
              className='border-2 rounded-[10px] border-lowergrey bg-[#F0F0F0] px-4 w-full py-3'
              required
              tabIndex='6'
            />
          </div>
          <div className='my-6'>
            <label htmlFor='monthlyIncome'>Monthly Income (NGN)</label>
            <input
              type='number'
              id='monthlyIncome'
              name='monthlyIncome'
              className='border-2 rounded-[10px] border-lowergrey bg-[#F0F0F0] px-4 w-full py-3'
              required
              tabIndex='6'
            />
          </div>
          <div className='my-6'>
            <label htmlFor='bankName'>Bank Name:</label>
            <input
              type='text'
              id='bankName'
              name='bankName'
              className='border-2 rounded-[10px] border-lowergrey bg-[#F0F0F0] px-4 w-full py-3'
              required
              tabIndex='5'
            />
          </div>
          <div className='my-6'>
            <label htmlFor='natureOfBusiness'>Nature of Business:</label>
            <input
              type='text'
              id='natureOfBusiness'
              name='natureOfBusiness'
              className='border-2 rounded-[10px] border-lowergrey bg-[#F0F0F0] px-4 w-full py-3'
              required
              tabIndex='5'
            />
          </div>
          <div className='flex gap-4'>
            <Link to='/digitpin'>
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

export default AccountDetails;
