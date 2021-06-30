import React, {ReactElement} from "react";
import {Header} from "./Header";
import Link from "next/link"
import Head from 'next/head'


const Layout: React.FC = ({children}):ReactElement=> {
    return (
        <>
            <Head>
                <title>Blog</title>
            </Head>
            <Header>
                <Link href='/'>Home</Link>
                <Link href='/posts/new'>Create New Post</Link>
            </Header>
            <div>
                {children}
            </div>

            </>
    )
}

export default Layout