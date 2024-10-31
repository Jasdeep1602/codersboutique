import React, { useState } from 'react';
import { useAppDispatch } from '@/hooks/redux';
import { setJobData } from '@/redux/slices/auth';
import { jobAPI } from '@/data/data';

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useAppDispatch();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (!value.trim()) {
      // Restore original job list if input is empty
      dispatch(setJobData(jobAPI));
    } else {
      // Filter jobs based on searchTerm
      const filteredJobs = jobAPI.filter((job) =>
        job.JobTitle.toLowerCase().includes(value.toLowerCase())
      );
      dispatch(setJobData(filteredJobs));
    }
  };

  return (
    <div className='w-full max-w-sm min-w-[200px]'>
      <div className='relative'>
        <input
          value={searchTerm}
          onChange={handleSearch} // Trigger search on every change
          className='w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-3 pr-28 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow'
          placeholder='Job Title...'
        />
        <div className='absolute top-3 right-1 text-slate-400'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='currentColor'
            className='w-4 h-4 mr-2'>
            <path
              fillRule='evenodd'
              d='M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z'
              clipRule='evenodd'
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
