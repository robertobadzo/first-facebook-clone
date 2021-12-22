import React, {useState} from 'react'
import "./Feed.css"
import PostForm from "./PostForm/PostForm"
import {useDispatch, useSelector} from "react-redux"
import { switchWindow } from '../../../actions/homepage';

function Feed(props) {
    const openWindow = useSelector((state) => state.openWindow);
   console.log(openWindow)
    const dispatch = useDispatch();
  
    return ( openWindow == 1 ? <PostForm />  : 
        (
        <div className='create-post'>
            <div className='createPostTopWrapper'>
            <img className ="avatar" src = {props.avatar} alt='avatar'></img>
            <div className = "newPostInput" onClick={dispatch(switchWindow)}><h4 className='text'>What's on your mind {props.name}?</h4></div> 


            </div>
       
        </div>
    )
    )}


export default Feed;
