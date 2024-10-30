/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { CardListProps } from './interface';
import SmallCard from './smallCard';

export default function CardList({ data }: CardListProps) {
  return (
    <div className='card-list-container'>
      {data?.map((item: any, i) => <SmallCard {...item} key={i} />)}
    </div>
  );
}
