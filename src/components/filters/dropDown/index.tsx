/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { setJobData } from '@/redux/slices/auth';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { jobAPI } from '@/data/data';

export default function Dropdown() {
  const { jobdata } = useAppSelector((state) => state.auth);

  const dispatch = useAppDispatch();

  const jobType = ['Full-Time', 'Part-Time', 'Remote', 'Cancel'];

  const handleJobFilter = (e: React.MouseEvent<HTMLDivElement>) => {
    const value = (e.target as HTMLElement).innerText;

    if (value === 'Cancel') {
      // Reset to show the original job data list
      dispatch(setJobData(jobAPI));
      console.log(jobdata, 'Cancel');
    } else {
      const jobTypeFilterArray = jobAPI.filter(
        (item: { JobType: string }) => item.JobType === value
      );
      dispatch(setJobData(jobTypeFilterArray));

      console.log(jobdata, 'filter');
    }
  };

  return (
    <Menu as='div' className='relative inline-block text-left cursor-pointer'>
      <div>
        <MenuButton className='inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'>
          Job-Type
          <ChevronDownIcon
            aria-hidden='true'
            className='-mr-1 h-5 w-5 text-gray-400'
          />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className='absolute left-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in'>
        {jobType?.map((item, i) => (
          <div className='py-1' key={i} onClick={handleJobFilter}>
            <MenuItem>
              <p className='block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900'>
                {item}
              </p>
            </MenuItem>
          </div>
        ))}
      </MenuItems>
    </Menu>
  );
}
