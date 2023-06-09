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
        <Route path="/" component={ <Home /> } />
        <Route path="about" component={ <About/> } />
        <Route path="*" component={ <Missing/> } />
        <Route path='post' component={<Post/>}/>

        <Route path='/post/:id' component={<PostPage />}/>

        <Route path='newpost' component={<NewPost/>}/>

        <Route path='edit/:id' component={<EditPage />}/>

      </Routes>
      </DataProvider>
      <Footer/>
      
   

    </div>

  )
}

export default App;
