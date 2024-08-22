import React, {useEffect, useState} from "react";
import "./styles/App.css"
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import PostService from "./API/PostService";
import Loader from "./components/UI/Loader/Loader";
import { usePosts } from "./hooks/usePosts";
import { useFetching } from "./hooks/useFetching";

function App() {
    const [posts, setPosts] = useState([]);
    const [modal, setModal] = useState(false)
    const [filter, setFilter] = useState({sort: '', query: '',})

    
    const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
        const posts = await PostService.getAll()
        setPosts(posts)
    })
    useEffect(() => {
        fetchPosts()
    }, [])

    
    function createPost(newPost) {
        setPosts([...posts, newPost])
        setModal(false)
    }
    function removePost(post) {
        setPosts(posts.filter(e => e.id !== post.id))
    }


    const sortedAndSearchPosts = usePosts(posts, filter.sort, filter.query)


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
            {postError && <h1>Something went wrong: {postError}</h1>}
            { isPostsLoading
                ? <Loader/>
                : <PostList remove={removePost} posts={sortedAndSearchPosts} title='Posts:'/>
            }
        </>
    );
}

export default App;