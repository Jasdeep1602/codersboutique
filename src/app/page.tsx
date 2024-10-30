import Dropdown from '@/components/filters/dropDown';
import SearchBar from '@/components/filters/searchBar';
import HeaderComp from '@/components/header';
import CardList from '@/components/jobCards';
import Paginaton from '@/components/pagination';
import { jobAPI } from '@/data/data';

export default function Home() {
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

        <CardList data={jobAPI} />
      </main>
      <footer>
        <Paginaton />
      </footer>
    </div>
  );
}
