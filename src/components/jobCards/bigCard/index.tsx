'use client';

/* eslint-disable @typescript-eslint/no-explicit-any */

import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { setModal, setModalData } from '@/redux/slices/auth';

export default function BigCard() {
  const { modal, modaldata } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  return (
    <Dialog
      open={modal}
      onClose={() => dispatch(setModal(false))}
      className='relative z-10 '>
      <DialogBackdrop
        transition
        className=' fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in'
      />

      <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
        <div className=' flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
          <DialogPanel
            transition
            className='relative   transform overflow-hidden rounded-lg  bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95'>
            <div className='rounded-md w-full bg-white px-4 py-4 shadow-md transition transform duration-500 cursor-pointer'>
              <div className='flex flex-col justify-start '>
                <div className='flex justify-between items-center '>
                  <div className='text-lg font-semibold text-bookmark-blue flex space-x-1 items-center mb-2'>
                    <span>{modaldata?.JobTitle}</span>
                  </div>
                  <span className='bg-green-500 rounded-full uppercase text-white text-sm px-4 py-1 font-bold shadow-xl'>
                    {' '}
                    {modaldata?.JobType}{' '}
                  </span>
                </div>
                <div className='flex w-full '>
                  <div className='text-sm text-gray-500 flex w-1/2  space-x-1 items-center'>
                    <svg
                      className='w-7 h-7'
                      fill='currentColor'
                      viewBox='0 0 24 24'
                      xmlns='http://www.w3.org/2000/svg'>
                      <path
                        fillRule='evenodd'
                        d='M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z'
                        clipRule='evenodd'
                      />
                      <path d='M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z' />
                    </svg>
                    <span>{modaldata?.CompanyName}</span>
                  </div>
                  <div className='text-sm text-gray-500 flex w-1/2  space-x-1 items-center'>
                    <svg
                      className='w-6 h-6'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'>
                      <path
                        fillRule='evenodd'
                        d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z'
                        clipRule='evenodd'
                      />
                    </svg>
                    <span>{modaldata?.Location}</span>
                  </div>
                </div>
                <div className='flex-col w-full pt-4  '>
                  <div className='text-sm text-gray-500 flex   space-x-1 items-center pb-4'>
                    Description: {modaldata?.Description}
                  </div>
                  <div className='text-sm text-gray-500 flex  space-x-1 items-start'>
                    <div>Requirements:</div>{' '}
                    <ul>
                      {modaldata?.Requirements?.map((item: any, i: any) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className='bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6'>
              <button
                type='button'
                onClick={() => dispatch(setModal(false), setModalData(null))}
                className='inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto'>
                Apply
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
