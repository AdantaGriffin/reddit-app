import React, { useState } from 'react';
import Header from './Components/Header/header'; 
import Subreddits from './Components/Subreddits/subreddits';
import Reddits from './Components/Reddits/reddits';

function App() {

const [ searchResult, setSearchResult ] = useState([
  {
    title: 'title',
    img: 'img',
    profile: 'profile',
    time: 'hrs ago',
    comments: 'comments',
    id: 'sr profile 1'
  },
  {
    title: 'title',
    img: 'img',
    profile: 'profile',
    time: 'hrs ago',
    comments: 'comments',
    id: 'sr profile 2'
  }
]);
const [ subSearch, setSubSearch ] = useState([
  {
    title: 'title',
    img: 'img',
    profile: 'profile',
    time: 'hrs ago',
    comments: 'comments',
    id: 'profile 1'
  },
  {
    title: 'title',
    img: 'img',
    profile: 'profile',
    time: 'hrs ago',
    comments: 'comments',
    id: 'profile 2'
  }
]);

  return (
    <>
    <header>
      <Header />
    </header>
      
      <aside>
        <Subreddits />
      </aside>

      <main>
        <Reddits  userSearchResult={searchResult} userSubSearch={subSearch}/>
      </main>
      
    </>
  );
};


export default App;
