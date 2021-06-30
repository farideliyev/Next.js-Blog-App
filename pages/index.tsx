import React from "react"
import Link from "next/link"
import {useSelector} from "react-redux";

import {BlogTitle, BlogContainer} from "../components/Blog";
import {RootState} from "../redux/store";


export default function Home() {


    const posts = useSelector((state:RootState) => state.posts)

    return (
        <BlogContainer>
            {posts && posts.map((post, index) => {
                return (
                    <BlogTitle key={index}>
                        <Link href={`posts/${post.id.toString()}`}>{post.title}</Link>
                    </BlogTitle>
                )
            })}
        </BlogContainer>
    )
}