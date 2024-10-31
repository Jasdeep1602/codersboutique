'use client';

import Dropdown from '@/components/filters/dropDown';
import SearchBar from '@/components/filters/searchBar';
import HeaderComp from '@/components/header';
import CardList from '@/components/jobCards';
import { useAppSelector } from '@/hooks/redux';

export default function Home() {
  const { jobdata } = useAppSelector((state) => state.auth);

  return (
    <div className='mainbody'>
      <header>
        <HeaderComp />
      </header>
      <main>
        <div className='filters'>
          <SearchBar />
          <Dropdown />
        </div>
        <CardList data={jobdata} />
      </main>
    </div>
  );
}
