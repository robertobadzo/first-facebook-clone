import React, {useState} from 'react'
import "./Feed.css"
import PostForm from "./PostForm/PostForm"

function Feed(props) {
const [state, setState] = useState(1)

  
    return ( state === 2 ? <PostForm />  : 
        (
        <div className='create-post'>
            <div className='createPostTopWrapper'>
            <img className ="avatar" src = {props.avatar} alt='avatar'></img>
            <div className = "newPostInput" onClick={()=> {setState(2)}}><h4 className='text'>What's on your mind {props.name}?</h4></div> 


            </div>
       
        </div>
    )
    )}


export default Feed;
