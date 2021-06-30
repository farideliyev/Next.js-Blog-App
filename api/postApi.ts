import axios, {AxiosRequestConfig, AxiosResponse} from "axios";

let url = 'https://simple-blog-api.crew.red/posts'

type PostType = {
    id: number,
    title: string,
    body:  string
}

let postsApi = {

     getPosts (){

         return axios.get(url).then(response=>response)
         /*add catch and types will not work*/
    },

    getPost(id){
         return axios.get<PostType>(`${url}/${id}`).then(response=>response.data)
    },

    createPost(post){
         return axios.post(url, {title:post.title, body: post.text}).then(res=>res)
    }
}

export default postsApi