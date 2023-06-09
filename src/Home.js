import React from 'react';
import Feed from './Feed';
import DataContext from './context/DataContext';
import { useContext } from 'react';

const Home = () => {
  const {isLoading,fetchError,searchResults}=useContext(DataContext)
  return (
    <main className='Home'>
      {isLoading && <p className='statusMsg'>isLoading....</p>}
      {fetchError && <p className='statusMsg' style={{color:'red'}}>{fetchError}</p>}

      {!isLoading && !fetchError && (searchResults.length ? <Feed posts={searchResults}/>:<p className='statusMsg'>No Posts to Display</p>)}
    

    </main>
  );
}

export default Home;

