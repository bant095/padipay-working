import React from 'react';
import { Link } from 'react-router-dom';
import KycSidebar from '../../../../Components/Auth/Dashboard/KycSidebar';

const EmploymentStatus = () => {
  return (
    <main className='bg-[#003399] px-20 pt-20 pb-56'>
      <div className='flex justify-around gap-2 small-screen'>
        {/* Left Side */}
        <KycSidebar />

        {/* -------------------------------------------------- */}
        {/* Right side */}
        <div className=' bg-white w-screen my-10 px-16 py-8'>
          <h1 className='text-2xl font-bold'>Employment Status</h1>
          <div className='relative my-6'>
            <label htmlFor='employmentStatus'>
              What’s your current employment status?:
            </label>
            <select
              name='employmentStatus'
              id='employmentStatus'
              className='border-2 rounded-[10px] border-lowergrey bg-[#F0F0F0] px-4 w-full py-3'
              required
              tabIndex=''
            >
              <option value='default'>Select Default</option>
              <option value='unemployed'>Unemployed</option>
              <option value='civilServant'>Civil Servant</option>
              <option value='businessOwner'>Business Owner</option>
              <option value='investor'>Investor</option>
            </select>
          </div>
          <div className='relative my-6'>
            <label htmlFor='profession'>What’s your current profession?:</label>
            <select
              name='profession'
              id='profession'
              className='border-2 rounded-[10px] border-lowergrey bg-[#F0F0F0] px-4 w-full py-3'
              required
              tabIndex=''
            >
              <option value='default'>Select Default</option>
              <option value='unemployed'>Unemployed</option>
              <option value='civilServant'>Civil Servant</option>
              <option value='businessOwner'>Business Owner</option>
              <option value='investor'>Investor</option>
            </select>
          </div>
          <div className='relative my-6'>
            <label htmlFor='placeOfWork'>
              What’s the name of your current place of work?:
            </label>
            <input
              type='text'
              id='placeOfWork'
              name='placeOfWork'
              className='border-2 rounded-[10px] border-lowergrey bg-[#F0F0F0] px-4 w-full py-3'
              required
              tabIndex='4'
            />
          </div>
          <div className='relative my-6'>
            <label htmlFor='addressOfWork'>
              What is the address of your current place of work?:
            </label>
            <input
              type='text'
              id='addressOfWork'
              name='addressOfWork'
              className='border-2 rounded-[10px] border-lowergrey bg-[#F0F0F0] px-4 w-full py-3'
              required
              tabIndex='4'
            />
          </div>
          <div className='relative my-6'>
            <label htmlFor='emailAddress'>
              What is your work email address?:
            </label>
            <input
              type='email'
              id='emailAddress'
              name='emailAddress'
              className='border-2 rounded-[10px] border-lowergrey bg-[#F0F0F0] px-4 w-full py-3'
              required
              tabIndex='4'
            />
          </div>
          <div className='relative my-6'>
            <label htmlFor='sector'>
              What sector of the economy is your company?:
            </label>
            <select
              name='sector'
              id='sector'
              className='border-2 rounded-[10px] border-lowergrey bg-[#F0F0F0] px-4 w-full py-3'
              required
              tabIndex=''
            >
              <option value='default'>Select Default</option>
              <option value='unemployed'>Unemployed</option>
              <option value='civilServant'>Civil Servant</option>
              <option value='businessOwner'>Business Owner</option>
              <option value='investor'>Investor</option>
            </select>
          </div>
          <div className='relative my-6'>
            <label htmlFor='firstJobYear'>
              When did you start your first job?:
            </label>
            <select
              name='firstJobYear'
              id='firstJobYear'
              className='border-2 rounded-[10px] border-lowergrey bg-[#F0F0F0] px-4 w-full py-3'
              required
              tabIndex=''
            >
              <option value='default'>Select Default</option>
              <option value='unemployed'>Unemployed</option>
              <option value='civilServant'>Civil Servant</option>
              <option value='businessOwner'>Business Owner</option>
              <option value='investor'>Investor</option>
            </select>
          </div>

          <div className='flex gap-4'>
            <Link to='/nextofkin'>
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

export default EmploymentStatus;
