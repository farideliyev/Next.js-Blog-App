import React, {ChangeEvent, useEffect, useState} from "react";
import {NewPostContainer, SuccessMessage} from "../../components/Post";
import {createPostThunkCreator} from "../../redux/postReducer";
import {useDispatch, useSelector, TypedUseSelectorHook} from "react-redux";
import Link from "next/link";
import {RootState, AppDispatch} from "../../redux/store";

let newPost = () => {
    const [post, setPost] =useState({title:"", text:""})
    const dispatch = useDispatch<AppDispatch>()
    const isCreated = useSelector((state:RootState)  => state.isCreated)


    const onChange = (e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
        let value = e.target.value
        let id = e.target.id
        setPost(prevState => {
            return {
                ...prevState,
                [id]: value

            }
        })
    }

    const onClick = (e)=>{
        e.preventDefault()
        if(post.title && post.text){
            dispatch(createPostThunkCreator(post))
        }
    }

    return (
        <NewPostContainer>
            {isCreated
                ?
                <>
                <SuccessMessage>Your post was successfully added</SuccessMessage>
                </>
                :<>
                <label htmlFor="title">Title</label>
                <input type="text" id="title" placeholder="Enter Title" onChange={onChange}/>
                <label htmlFor="body">Text</label>
                <textarea name="" id="text" cols={30} rows={10} placeholder="Enter text" onChange={onChange}/>
                <button type="submit" onClick={onClick}>Create new Post</button>
                </>
            }
        </NewPostContainer>
    )
}

export default newPost