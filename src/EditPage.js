import { useEffect } from "react";
import { useParams,NavLink } from "react-router-dom";
import {useNavigate } from 'react-router-dom';
import DataContext from './context/DataContext';
import { useContext,useState } from 'react';
import {format} from 'date-fns';
import api from './api/posts';

const EditPage = () => {
    const {posts,setPosts}=useContext(DataContext);
    
    const {id}=useParams();
    const post= posts.find(post =>(post.id).toString() ===id)

    const [editTitle,setEditTitle]=useState('')
    const [editBody,setEditBody]=useState('')
    const navigate=useNavigate();


    //Edit Function to eddit the single post

  const handleEdit=async(id)=>{
    const datetime=format(new Date(),'MMMM dd,yyyy pp');
    const editPost={id, title:editTitle,datetime,body:editBody}
    try{
      const response=await api.put(`/posts/${id}`,editPost)
      setPosts(posts.map(post=>post.id === id ? {...response.data}:post))
      setEditTitle('');
      setEditBody('');
      navigate('/');

    }catch(err){

      console.log(`Error:${err.message}`)
    }

  }

    useEffect(()=>{
        if(post) {
            setEditTitle(post.title);
            setEditBody(post.body);
        }
    },[post,setEditTitle,setEditBody])

  return (
    <main className="NewPost">
            {editTitle &&
                <>
                    <h2>Edit Post</h2>
                    <form className="newPostForm" onSubmit={(e) => e.preventDefault()}>
                        <label htmlFor="postTitle">Title:</label>
                        <input
                            id="postTitle"
                            type="text"
                            required
                            value={editTitle}
                            onChange={(e) => setEditTitle(e.target.value)}
                        />
                        <label htmlFor="postBody">Post:</label>
                        <textarea
                            id="postBody"
                            required
                            value={editBody}
                            onChange={(e) => setEditBody(e.target.value)}
                        />
                        <button type="submit" onClick={() => handleEdit(post.id)}>Submit</button>
                    </form>
                </>
            }
            {!editTitle &&
                <>
                    <h2>Post Not Found</h2>
                    <p>Well, that's disappointing.</p>
                    <p>
                        <NavLink to='/'>Visit Our Homepage</NavLink>
                    </p>
                </>
            }
        </main>
    
  );
}

export default EditPage;
