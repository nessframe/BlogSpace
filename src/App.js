import React, {useEffect, useState} from "react";
import "./styles/App.css"
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import { usePosts } from "./hooks/usePosts";
import PostService from "./API/PostService";

function App() {
    const [postsLoading, setPostsLoading] = useState(false)
    const [posts, setPosts] = useState([

    ]);
    function createPost(newPost) {
        setPosts([...posts, newPost])
        setModal(false)
    }
    function removePost(post) {
        setPosts(posts.filter(e => e.id !== post.id))
    }


    const [filter, setFilter] = useState({sort: '', query: '',})
    const sortedAndSearchPosts = usePosts(posts, filter.sort, filter.query)

    async function fetchPosts() {
        setPostsLoading(true)
        const posts = await PostService.getAll()
        setPosts(posts)
        setPostsLoading(false)
    }
    useEffect(() => {
        fetchPosts()
    }, [])

    const [modal, setModal] = useState(false)


    return (
        <>
            <MyButton 
                style={{marginTop: '20px'}}
                onClick={() => {setModal(true)}}
            >
                Create Post
            </MyButton>

            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost} posts={posts} />
            </MyModal>

            <hr style={{margin: '15px 0'}}></hr>
            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />
            { postsLoading
                ? <h1>Posts loading....</h1>
                : <PostList remove={removePost} posts={sortedAndSearchPosts} title='Posts:'/>
            }
        </>
    );
}

export default App;