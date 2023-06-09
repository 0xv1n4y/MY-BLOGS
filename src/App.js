import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import Home from './Home';
import Post from './Post';
import PostPage from './PostPage';
import About from './About';
import Missing from './Missing';
import NewPost from './NewPost';
import { Route, Routes } from 'react-router-dom';
import EditPage from './EditPage';
import {DataProvider} from "./context/DataContext"



function App (){

  return(
    <div>
      
      <Header title="Vinay-Blogs" />
      <DataProvider>
      <Nav />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="about" element={ <About/> } />
        <Route path="*" element={ <Missing/> } />
        <Route path='post' element={<Post/>}/>

        <Route path='/post/:id' element={<PostPage />}/>

        <Route path='newpost' element={<NewPost/>}/>

        <Route path='edit/:id' element={<EditPage />}/>

      </Routes>
      </DataProvider>
      <Footer/>
      
   

    </div>

  )
}

export default App;
