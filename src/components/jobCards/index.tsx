'use client';

/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { CardListProps } from './interface';
import SmallCard from './smallCard';

export default function CardList({ data }: CardListProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;

  // Calculate the indices of the items for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = data.slice(startIndex, endIndex);

  // Navigate to the next or previous page
  const nextPage = () => {
    if (endIndex < data.length) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (startIndex > 0) setCurrentPage(currentPage - 1);
  };

  return (
    <>
      <div className='card-list-container'>
        {currentItems?.map((item: any, i) => <SmallCard {...item} key={i} />)}
      </div>

      <div className='flex items-center gap-8  pb-6'>
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className='rounded-md border border-slate-300 p-2.5 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
          type='button'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='currentColor'
            className='w-4 h-4'>
            <path
              fill-rule='evenodd'
              d='M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z'
              clip-rule='evenodd'
            />
          </svg>
        </button>

        <p className='text-slate-600'>
          Page <strong className='text-slate-800'>{currentPage}</strong>{' '}
          of&nbsp;
          <strong className='text-slate-800'>
            {Math.ceil(data.length / itemsPerPage)}
          </strong>
        </p>

        <button
          onClick={nextPage}
          disabled={endIndex >= data.length}
          className='rounded-md border border-slate-300 p-2.5 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
          type='button'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='currentColor'
            className='w-4 h-4'>
            <path
              fill-rule='evenodd'
              d='M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z'
              clip-rule='evenodd'
            />
          </svg>
        </button>
      </div>
    </>
  );
}
