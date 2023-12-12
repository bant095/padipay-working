import React from 'react';
import { Link } from 'react-router-dom';

const PersonalDetails = () => {
  return (
    <div className='w-[60%]'>
      <div className='section' id='personalDetailsSection'>
        <h1 className='text-2xl font-bold'>Personal Details</h1>
        <div className='relative my-6'>
          <label htmlFor='firstName'>First Name:</label>
          <input
            type='text'
            id='firstName'
            name='firstName'
            className='border-2 rounded-[10px] border-lowergrey bg-[#F0F0F0] px-4 w-full py-4'
            required
            tabIndex='3'
          />
        </div>
        <div className='relative my-6'>
          <label htmlFor='middleName'>Middle Name:</label>
          <input
            type='text'
            id='middleName'
            name='middleName'
            className='border-2 rounded-[10px] border-lowergrey bg-[#F0F0F0] px-4 w-full py-4'
            required
            tabIndex='3'
          />
        </div>
        <div className='relative my-6'>
          <label htmlFor='lastName'>Last Name:</label>
          <input
            type='text'
            id='lastName'
            name='lastName'
            className='border-2 rounded-[10px] border-lowergrey bg-[#F0F0F0] px-4 w-full py-4'
            required
            tabIndex='3'
          />
        </div>
        <div className='relative my-6'>
          <label htmlFor='address'>Address:</label>
          <input
            type='text'
            id='address'
            name='address'
            className='border-2 rounded-[10px] border-lowergrey bg-[#F0F0F0] px-4 w-full py-4'
            required
            tabIndex='3'
          />
        </div>
        <div className='flex gap-3 my-6'>
          <div className='relative'>
            <label htmlFor='state'>State:</label>
            <select
              name='state'
              id='state'
              className='border-2 rounded-[10px] border-lowergrey bg-[#F0F0F0] px-4 w-full py-3'
              required
            >
              <option value='Default'>Select Default</option>
              <option value='Abuja'>Abuja</option>
              <option value='Lagos'>Lagos</option>
              <option value='Oyo'>Oyo</option>
              <option value='Kwara'>Kwara</option>
            </select>
          </div>
          <div className='relative'>
            <label htmlFor='lga'>LGA:</label>
            <select
              name='lga'
              id='lga'
              className='border-2 rounded-[10px] border-lowergrey bg-[#F0F0F0] px-4 w-full py-3'
              required
              tabIndex='3'
            >
              <option value='default'>Select Default</option>
              <option value='amac'>AMAC</option>
              <option value='gwagwalada'>Gwagwalada</option>
              <option value='kwali'>Kwali</option>
              <option value='kuje'>Kuje</option>
            </select>
          </div>
        </div>
        <div className='flex gap-3 my-6'>
          <div className='relative'>
            <label htmlFor='city'>City:</label>
            <input
              type='text'
              id='city'
              name='city'
              className='border-2 rounded-[10px] border-lowergrey bg-[#F0F0F0] px-4 w-full py-3'
              required
              tabIndex='3'
            />
          </div>
          <div className='relative'>
            <label htmlFor='landmark'>Nearest Landamark:</label>
            <input
              type='text'
              id='landmark'
              name='landmark'
              className='border-2 rounded-[10px] border-lowergrey bg-[#F0F0F0] px-4 w-full py-3'
              required
              tabIndex='3'
            />
          </div>
        </div>
        <div className='flex gap-3 my-6'>
          <div className='relative'>
            <label htmlFor='dob'>Date of Birth:</label>
            <input
              type='date'
              id='dob'
              name='dob'
              className='border-2 rounded-[10px] border-lowergrey bg-[#F0F0F0] px-4 w-full py-3'
              required
              tabIndex='3'
            />
          </div>
          <div className='relative'>
            <label htmlFor='occupation'>Occupation:</label>
            <select
              name='occupation'
              id='occupation'
              className='border-2 rounded-[10px] border-lowergrey bg-[#F0F0F0] px-4 w-full py-3'
              required
              tabIndex='3'
            >
              <option value='default'>Select Default</option>
              <option value='unemployed'>Unemployed</option>
              <option value='civilServant'>Civil Servant</option>
              <option value='businessOwner'>Business Owner</option>
              <option value='investor'>Investor</option>
            </select>
          </div>
        </div>
        <div className='flex gap-3 my-6'>
          <div>
            <label htmlFor='phone'>Phone:</label>
            <input
              type='tel'
              id='phone'
              name='phone'
              className='border-2 rounded-[10px] border-lowergrey bg-[#F0F0F0] px-4 w-full py-3'
              required
              tabIndex='4'
            />
          </div>
          <div className='relative'>
            <label htmlFor='gender'>Gender:</label>
            <select
              name='gender'
              id='gender'
              className='border-2 rounded-[10px] border-lowergrey bg-[#F0F0F0] px-4 w-full py-3'
              required
              tabIndex='3'
            >
              <option value='default'>Select Default</option>
              <option value='male'>Male</option>
              <option value='female'>Female</option>
              <option value='preferNotToSay'>Prefer Not to Say</option>
            </select>
          </div>
        </div>
        <div className='flex gap-4'>
          <Link to='/employmentstatus'>
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
  );
};

export default PersonalDetails;
