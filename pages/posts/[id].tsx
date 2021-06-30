import React from "react";
import {BlogBody} from "../../components/Blog";
import { GetStaticProps, GetStaticPaths } from 'next'
import postsApi from "../../api/postApi";


export const getStaticProps :GetStaticProps = async ({params})=> {
    const res = await postsApi.getPost(params.id)
    const post = res.data.body

    return {
        props : {
            post
        }
    }
}
export const getStaticPaths: GetStaticPaths = async () => {
    const posts = await postsApi.getPosts().then(res=>res.data)

    const paths = posts.map((post) => ({
        params: { id: post.id.toString() }
    }))

    return { paths, fallback: false }
}



type PropsType = {
    post: string
}
const Post: React.FC<PropsType> = ({post})=>{
    return <BlogBody>{post}</BlogBody>

}

export default Post