import { useParams,NavLink,useNavigate } from "react-router-dom";
import DataContext from './context/DataContext';
import api from "./api/posts"
import { useContext } from 'react';

const PostPage = () => {
  const {posts,setPosts}=useContext(DataContext)
  const {id}=useParams();
  const post= posts.find((post)=>(post.id).toString() === id);
  const navigate=useNavigate();

   //Delete Function you can delete the single post

   const handleDelete=async(id)=>{
    await api.delete(`/posts/${id}`)
    const postList= posts.filter(post => post.id !== id)
    setPosts(postList);
    navigate('/')
    
  }
  return (
    <main className="PostPage">
      <article className="post">
        {post && 
        <>
        <h2>{post.title}</h2>
            <p className="postDate">{post.datetime}</p>
            <p className="postBody">{post.body}</p>
            <NavLink to={`/edit/${post.id}`}><button className="editButton">Edit Post</button></NavLink>
            <button className="deleteButton" onClick={()=> handleDelete(post.id)}>
              DeletePost
            </button>
        </>
        }
        {!post &&
                    <>
                        <h2>Post Not Found</h2>
                        <p>Well, that's disappointing.</p>
                        <p>
                            <NavLink to='/'>Visit Our Homepage</NavLink>
                        </p>
                    </>
                }
        
      </article>
      
    </main>
  );
}

export default PostPage;
