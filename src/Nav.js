import React from 'react';
import { NavLink } from 'react-router-dom';
import DataContext from './context/DataContext';
import { useContext } from 'react';

const Nav = () => {
  const {search,setSearch}=useContext(DataContext)
  return (
    <nav className="Nav">
      <form className='searchForm' onSubmit={(e)=>setSearch(e.preventDefault())}>
        <label htmlFor='search'>SearchPosts</label>
        <input 
        id='search'
        type='text'
        placeholder='Search Posts'
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        />

      </form>
      <ul>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='newpost'>Post</NavLink></li>
        <li><NavLink to='about'>About</NavLink></li>
      </ul>




       
        
        

      
    </nav>
  );
}

export default Nav;
