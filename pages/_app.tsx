import React from "react";
import {Provider} from 'react-redux'
import {useStore} from "../redux/store";
import { AppProps } from 'next/app'
import {getPostsThunkCreator} from "../redux/postReducer";
import "../styles/styles.css"
import Layout from "../components/layout";


export default function App ({ Component, pageProps }: AppProps)  {
    const store = useStore(pageProps.initialReduxState)
    store.dispatch(getPostsThunkCreator())

    return (
        <Provider store={store}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </Provider>
    )
}