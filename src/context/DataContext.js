import { useState,useEffect,createContext } from "react";
import useAxiosFetch from '../hooks/useAxiosFetch';

const DataContext=createContext({});

export const DataProvider=({children})=>{


  const [search,setSearch]=useState('');
  const [posts,setPosts]=useState([])
  const [searchResults,setSearchResults]=useState([])

  const{data,fetchError,isLoading}=useAxiosFetch('http://localhost:4000/posts')
  

  useEffect(()=>{
    setPosts(data);
  },[data])

  
// Search Function it can validate your input and send the result

 useEffect(()=> {

  const filteredResults=posts.filter(post => 
    ((post.body)?.toLowerCase())?.includes(search?.toLowerCase())
      || ((post.title)?.toLowerCase())?.includes(search?.toLowerCase())

    )
    setSearchResults(filteredResults.reverse());
 },[posts,search])


   return(
    <DataContext.Provider value={{
      search,setSearch,searchResults,
      fetchError,isLoading,
      posts,setPosts

    }}>
    {children}
    </DataContext.Provider>
   )

}

export default DataContext