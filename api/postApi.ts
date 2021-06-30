import axios, {AxiosResponse} from "axios";

let url = 'https://simple-blog-api.crew.red/posts'

type PostType = {
    id:number,
    title:string,
    body: string
}
type ResponseType = {
    data: Array<PostType>,
    status: number
}
let postsApi = {

     getPosts (){
         return axios.get<ResponseType>(url).then(response=>response)
         /*add catch and types will not work*/
    },

    getPost(id){
         return axios.get<ResponseType>(`${url}/${id}`)
    },

    createPost(post){
         return axios.post<ResponseType>(url, {title:post.title, body: post.text})
    }
}

export default postsApi