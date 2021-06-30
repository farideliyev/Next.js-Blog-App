import postsApi from "../api/postApi";
import {ThunkAction} from "redux-thunk";
import {AppDispatch, RootState} from "./store";
import {Action} from "redux";


type InitialStateType = typeof initialState
let initialState = {
    posts : [] as Array<object>,
    isCreated: false as boolean
}

export let postReducer = (state = initialState, action): InitialStateType=>{
    switch (action.type){
        case "GET_POSTS":

            return {
                ...state,
                posts: [
                    ...action.payload
                ],
            }
        case "CREATE_POST":
            return {
                ...state,
                posts: [
                    ...state.posts,
                    action.payload
                ],
                isCreated: true
            }
        default:
            return state
    }
}

type getPostActionType = (payload: object)=>{
    type: "GET_POSTS"
}

let getPostsAction:getPostActionType = (payload)=>({type: "GET_POSTS", payload })

type createPostActionType = (payload: object)=>{
    type: "CREATE_POST"
}
let createPostAction: createPostActionType = (payload)=>({type: "CREATE_POST", payload })

export let getPostsThunkCreator =  () :AppThunk=>{

    return async (dispatch: AppDispatch)=>{

        let res = await postsApi.getPosts()

        if(res.status===200) {
            dispatch(getPostsAction(res.data))
        }
    }
}

export let createPostThunkCreator =  (post) :AppThunk=>{

    return async (dispatch: AppDispatch)=>{

        let res = await postsApi.createPost(post)

        if(res.status===201) {
            dispatch(createPostAction(res.data))
        }
    }
}
export default postReducer

type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action
    >